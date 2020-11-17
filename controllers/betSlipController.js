const BetSlip = require('../models/BetSlip');
const Race = require('../models/Race')
const User = require('../models/User');


// @route    POST api/games
// @desc     Create a game
// @access   Private
module.exports.post_create_betSlip = async (req, res) =>{
    try {
        const user = await User.findById(req.user).select('-password');

        //get the most recent Game created
        const race = await Race.findOne().sort({date: -1})
        const uuid = race.uuid;


        const newBetSlip = new BetSlip({
            user: user,
            name: user.name,
            bet_p_1: req.body.bet_p_1,
            bet_p_2: req.body.bet_p_2,
            bet_p_3: req.body.bet_p_3,
            bet_p_4: req.body.bet_p_4,
            bet_p_5: req.body.bet_p_5,
            bet_p_6: req.body.bet_p_6,
            bet_p_7: req.body.bet_p_7,
            bet_p_8: req.body.bet_p_8,
            bet_p_9: req.body.bet_p_9,
            bet_p_10: req.body.bet_p_10,
            bet_p_11: req.body.bet_p_11,
            bet_p_12: req.body.bet_p_12,
            bet_p_13: req.body.bet_p_13,
            bet_p_14: req.body.bet_p_14,
            bet_p_15: req.body.bet_p_15,
            bet_p_16: req.body.bet_p_16,
            bet_p_17: req.body.bet_p_17,
            bet_p_18: req.body.bet_p_18,
            bet_p_19: req.body.bet_p_19,
            bet_p_20: req.body.bet_p_20,
            uuid: uuid,
            points: 0,
            paid: req.body.paid
        });

        const betSlip = await newBetSlip.save();

        res.json(betSlip);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('bet not created');
    }

};



// @route    GET api/quinielas/:user_id
// @desc     Get all quinielas by user
// @access   Private
module.exports.get_user_betSlips = async (req, res) =>{

    try {
        const race = await Race.findOne().sort({date: -1})
        const uuid = race.uuid;

        const betSlips = await BetSlip.find({ user: req.params.user_id, uuid: uuid });
        if(betSlips.length<=0){
            res.json({message: `No tienes bets de la jornada ${uuid}`});
        }else {
            res.json(betSlips);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

};


// @route    GET api/quinielas/:id
// @desc     Get quinielas by id
// @access   Private
module.exports.get_betSLipById= async (req, res) =>{

    try {
        const betSlip = await BetSlip.findById(req.params.id);
        res.json(betSlip);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

};


// @route    DELETE api/quinielas/:id
// @desc     Delete a quiniela
// @access   Private
module.exports.delete_betSlip = async (req, res) =>{

    try {
        const betSlip = await BetSlip.findById(req.params.id);

        if (!betSlip) {
            return res.status(404).json({ msg: 'BetSlip not found' });
        }

        // Check user
        if (betSlip.user.toString() !== req.user) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await betSlip.remove();

        res.json({ msg: 'BetSlip deleted' });
    } catch (err) {
        console.error(err.message);

        res.status(500).send('BetSlip not deleted');
    }

};


// @route    GET api/quinielas
// @desc     Get all quinielas
// @access   Private
module.exports.get_all_betSlips = async (req, res) =>{

    try {
        const race = await Race.findOne().sort({date: -1})
        const uuid = race.uuid;

        const betSlips = await BetSlip.find({ uuid: uuid }).sort({ date: -1 });


        if(betSlips.length<=0){
            res.json({message: `No hay betSlips de la ${uuid}`});
        }else {
            res.json(betSlips);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

};


// @route    GET api/quinielas
// @desc     Get all quinielas
// @access   Private
module.exports.get_betSlip_By_Uuid = async (req, res) =>{

    try {
        const rece = await Race.findOne({uuid: req.params.id})
        const uuid = rece.uuid;

        const betSlips = await BetSlip.find({ uuid: uuid }).sort({ date: -1 });
        if(betSlips.length<=0){
            res.json({message: `No hay quinielas de la jornada ${uuid}`});
        }else {
            res.json(betSlips);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

};

// @route    POST api/quinielas/update/:quinielaId
// @desc     edit quiniela
// @access   Private
module.exports.put_edit_betSlip = async (req, res) =>{
    // const resultsFields = {
    //     user: req.body.user,
    //     name: req.body.name,
    //     bet_p_1: req.body.bet_p_1,
    //     bet_p_2: req.body.bet_p_2,
    //     bet_p_3: req.body.bet_p_3,
    //     bet_p_4: req.body.bet_p_4,
    //     bet_p_5: req.body.bet_p_5,
    //     bet_p_6: req.body.bet_p_6,
    //     bet_p_7: req.body.bet_p_7,
    //     bet_p_8: req.body.bet_p_8,
    //     bet_p_9: req.body.bet_p_9,
    //     bet_p_10: req.body.bet_p_10,
    //     bet_p_11: req.body.bet_p_11,
    //     bet_p_12: req.body.bet_p_12,
    //     bet_p_13: req.body.bet_p_13,
    //     bet_p_14: req.body.bet_p_14,
    //     bet_p_15: req.body.bet_p_15,
    //     bet_p_16: req.body.bet_p_16,
    //     bet_p_17: req.body.bet_p_17,
    //     bet_p_18: req.body.bet_p_18,
    //     bet_p_19: req.body.bet_p_19,
    //     bet_p_20: req.body.bet_p_20,
    //     uuid: req.body.uuid,
    //     points: req.body.points,
    //     paid: req.body.paid
    // };

    const {
        user,
        name,
        bet_p_1,
        bet_p_2,
        bet_p_3,
        bet_p_4,
        bet_p_5,
        bet_p_6,
        bet_p_7,
        bet_p_8,
        bet_p_9,
        bet_p_10,
        bet_p_11,
        bet_p_12,
        bet_p_13,
        bet_p_14,
        bet_p_15,
        bet_p_16,
        bet_p_17,
        bet_p_18,
        bet_p_19,
        bet_p_20,
        uuid,
        points,
        paid
    } = req.body.formData;

    const final = {
        user,
        name,
        bet_p_1,
        bet_p_2,
        bet_p_3,
        bet_p_4,
        bet_p_5,
        bet_p_6,
        bet_p_7,
        bet_p_8,
        bet_p_9,
        bet_p_10,
        bet_p_11,
        bet_p_12,
        bet_p_13,
        bet_p_14,
        bet_p_15,
        bet_p_16,
        bet_p_17,
        bet_p_18,
        bet_p_19,
        bet_p_20,
        uuid,
        points,
        paid
    }

    try {

        const id = req.params.id;

        let quiniela = await BetSlip.findOneAndUpdate(
            {_id: id},
            { $set: final },
            { new: true, upsert: true, setDefaultsOnInsert: true })

        res.json(quiniela);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Game not updated');
    }

};

