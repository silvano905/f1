const Race = require('../models/Race');
const User = require('../models/User');
const Winners = require('../models/Winners');
const BetSlip = require('../models/BetSlip');
const { v4: uuidv4 } = require('uuid');



function addPoints(race, allBetSlips) {
    const race_results = race.race_results
    const {
        p_1,
        p_2,
        p_3,
        p_4,
        p_5,
        p_6,
        p_7,
        p_8,
        p_9,
        p_10,
        p_11,
        p_12,
        p_13,
        p_14,
        p_15,
        p_16,
        p_17,
        p_18,
        p_19,
        p_20,
    } = race_results

    for (const [key, value] of Object.entries(allBetSlips)) {
        value.points = 0;
        if (allBetSlips[key].bet_p_1 === p_1.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_2 === p_2.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_3 === p_3.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_4 === p_4.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_5 === p_5.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_6 === p_6.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_7 === p_7.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_8 === p_8.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_9 === p_9.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_10 === p_10.driver) {
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_11 === p_11.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_12 === p_12.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_13 === p_13.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_14 === p_14.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_15 === p_15.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_16 === p_16.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_17 === p_17.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_18 === p_18.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_19 === p_19.driver){
            value.points += 1;
        }
        if (allBetSlips[key].bet_p_20 === p_20.driver) {
            value.points += 1;
        }
        value.save();
    }
    return allBetSlips
}

async function addWinners(betSlips, winner) {
    winner.twenty = [];
    winner.nineteen = [];


    for (const [key, value] of Object.entries(betSlips)) {
        if (betSlips[key].points === 20) {
            winner.twenty.unshift({
                user: betSlips[key].user,
                betId: betSlips[key]._id,
                name: betSlips[key].name
            })
        }

        if (betSlips[key].points === 19) {
            winner.nineteen.unshift({
                user: betSlips[key].user,
                betId: betSlips[key]._id,
                name: betSlips[key].name
            })
        }
        await winner.save()

    }
}



// @route    POST api/races
// @desc     Create a race by the admin only
// @access   Private
module.exports.post_create_race = async (req, res) =>{

    try {
        const uuid = uuidv4();

        const user = await User.findById(req.user).select('-password');

        const newRace = new Race({
            user: user,
            race_name: req.body.race_name,
            race_date: req.body.race_date,
            country: req.body.country,
            money: req.body.money,
            uuid: uuid
        });

        // Check user
        if (req.user.toString() !== '5f9b1917bfc9192d58c82477') {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const race = await newRace.save();

        const winnersList = new Winners({
            uuid: uuid
        })
        winnersList.save();

        res.json(race);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

};



// @route    POST api/games/add_results
// @desc     and update game_results by the admin only
// @access   Private
module.exports.add_results = async (req, res) => {

    const {
        p_1,
        p_2,
        p_3,
        p_4,
        p_5,
        p_6,
        p_7,
        p_8,
        p_9,
        p_10,
        p_11,
        p_12,
        p_13,
        p_14,
        p_15,
        p_16,
        p_17,
        p_18,
        p_19,
        p_20,
        race_over,
        close,
        edit
    } = req.body;

    //Build race_results object
    const resultsFields = {
        p_1:{
            driver: p_1,
            position: '1'
        },
        p_2:{
            driver: p_2,
            position: '2'
        },
        p_3:{
            driver: p_3,
            position: '3'
        },
        p_4:{
            driver: p_4,
            position: '4'
        },
        p_5:{
            driver: p_5,
            position: '5'
        },
        p_6:{
            driver: p_6,
            position: '6'
        },
        p_7:{
            driver: p_7,
            position: '7'
        },
        p_8:{
            driver: p_8,
            position: '8'
        },
        p_9:{
            driver: p_9,
            position: '9'
        },
        p_10:{
            driver: p_10,
            position: '10'
        },
        p_11:{
            driver: p_11,
            position: '11'
        },
        p_12:{
            driver: p_12,
            position: '12'
        },
        p_13:{
            driver: p_13,
            position: '13'
        },
        p_14:{
            driver: p_14,
            position: '14'
        },
        p_15:{
            driver: p_15,
            position: '15'
        },
        p_16:{
            driver: p_16,
            position: '16'
        },
        p_17:{
            driver: p_17,
            position: '17'
        },
        p_18:{
            driver: p_18,
            position: '18'
        },
        p_19:{
            driver: p_19,
            position: '19'
        },
        p_20:{
            driver: p_20,
            position: '20'
        },
        race_over,
        close,
        edit
    };

    try {
        // Using upsert option (creates new doc if no match is found):
        const results = await Race.findOneAndUpdate(
            { user: req.user },
            { $set: {
                    race_results: resultsFields
                } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).sort({ date: -1 });

        // await results.save();

        const race = await Race.findOne().sort({date: -1})
        const uuid = race.uuid

        const allBetsSlips = await BetSlip.find({uuid: uuid, paid: true });

        const newBetSlips = await addPoints(race,allBetsSlips)

        //add winners list model if paid true

        const winner = await Winners.findOne({uuid: uuid}).sort({date: -1});

        await addWinners(newBetSlips, winner)
        res.json(newBetSlips);
    } catch (err) {
        res.status(500).send('race results not added');
    }

};




// @route    GET api/games
// @desc     Get all games
// @access   Private
module.exports.get_race = async (req, res) =>{

    try {
        const race = await Race.findOne().sort({date: -1})
        res.json(race);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

}

// @route    GET api/games
// @desc     Get all games
// @access   Private
module.exports.get_all_races = async (req, res) =>{

    try {
        const races = await Race.find({user: '5f9b1917bfc9192d58c82477'})
        res.json(races);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

}

// @route    GET api/games
// @desc     Get all games
// @access   Private
module.exports.get_race_id = async (req, res) =>{

    try {
        const race = await Race.findById(req.params.id)
        res.json(race);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

}


// @route    DELETE api/games/:id
// @desc     Delete a game
// @access   Private
module.exports.delete_race = async (req, res) =>{

    try {
        const race = await Race.findById(req.params.id);

        if (!race) {
            return res.status(404).json({ msg: 'Race not found' });
        }

        // Check user
        if (race.user.toString() !== req.user) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await race.remove();
        //send the most recent jame back as a response
        const races = await Race.findOne().sort({date: -1})

        res.json(races);
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Race not deleted');
    }

};