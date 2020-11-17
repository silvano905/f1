const express = require('express');
const Race = require('../models/Race')
const Winners = require('../models/Winners');


// @route    GET api/games
// @desc     Get all games
// @access   Private
module.exports.add_get_winners_list = async (req, res) =>{

    try {
        const race = await Race.findOne().sort({date: -1})
        const uuid = race.uuid


        const winner = await Winners.findOne({uuid: uuid}).sort({date: -1})

        res.json(winner);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('winners list not found');
    }

};




