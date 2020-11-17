const BetSlip = require('../models/BetSlip');
const Race = require('../models/Race')
const User = require('../models/User');

require('dotenv').config();
const sgMail = require('@sendgrid/mail')


// @route    GET api/quinielas/:id
// @desc     Get quinielas by id
// @access   Private
const stripe = require('stripe')('sk_test_51H4G4xB9GffACqxkKLFJijrVgjhuHV47HEC0OYuLvbwcCfZZbvRcCjIJGddtE9hbhsCzUaOJ5EmwuNNeEWoYC1Xf003Kwq0IBk');

module.exports.get_payment= async (req, res) =>{

    const race = await Race.findOne().sort({date: -1})
    const uuid = await race.uuid;
    const betSlip = await BetSlip.find({ user: req.params.id, uuid: uuid, paid: false });

    const amount = betSlip.length*2

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
    });

    const intent = paymentIntent;

    res.json({client_secret: intent.client_secret});

};




// @route    GET api/stripe/
// @desc     Get all games
// @access   Private
module.exports.get_change_paid = async (req, res) =>{

    try {
        const race = await Race.findOne().sort({date: -1})
        const uuid = await race.uuid;

        await BetSlip.updateMany(
                { user: req.params.id, uuid: uuid, paid: false },
                { $set: {paid: true} },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            );
        const betSlips = await BetSlip.find({ user: req.params.id, uuid: uuid });

        res.json(betSlips)

    } catch (err) {
        res.status(500).send('not paid');
    }

}

module.exports.get_send_receipt= async (req, res) =>{

    const user = await User.findById(req.user).select('-password');
    let date_ob = new Date();
    let dateTime = ("0" + date_ob.getDate()).slice(-2);

    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    let year = date_ob.getFullYear();

    const name = user.name
    const totalQuinielas = req.body.quinielas.length
    const email = user.email
    const date = year + "-" + month + "-" + dateTime
    const total = req.body.total
    const list = req.body.quinielas
    const listGames = req.body.game


    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'mexico90spm3@gmail.com', // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        templateId: 'd-91f9a47f8d5d4918aa1e82c168667a34',
        dynamic_template_data: {totalQuinielas, total, name, date, email, list, listGames},
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

};