const BetSlip = require('../models/BetSlip');
const Race = require('../models/Race')
const User = require('../models/User');
const Drivers = require('../models/Drivers');


async function addWinners(listDrivers, driver) {
    driver.drivers = [];
    for (const [key, value] of Object.entries(listDrivers)) {
        driver.drivers.unshift({driver:listDrivers[key].driver})
        await driver.save()

    }
}

module.exports.post_create_drivers = async (req, res) =>{

    try {

        const winner = await Drivers.findOne().sort({date: -1});
        const allDrivers = req.body
        await addWinners(allDrivers, winner)

        res.json(winner);

    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error');
    }


};


module.exports.get_drivers = async (req, res) =>{

    try {
        const drivers = await Drivers.findOne().sort({date: -1})
        res.json(drivers);
    } catch (err) {
        res.status(500).send('Server Error');
    }

};

module.exports.put_edit_drivers = async (req, res) =>{
    const {
        d_0,
        d_1,
        d_2,
        d_3,
        d_4,
        d_5,
        d_6,
        d_7,
        d_8,
        d_9,
        d_10,
        d_11,
        d_12,
        d_13,
        d_14,
        d_15,
        d_16,
        d_17,
        d_18,
        d_19,
    } = req.body;

    const final = {
        0: d_0,
        1: d_1,
        2: d_2,
        3: d_3,
        4: d_4,
        5: d_5,
        6: d_6,
        7: d_7,
        8: d_8,
        9: d_9,
        10: d_10,
        11: d_11,
        12: d_12,
        13: d_13,
        14: d_14,
        15: d_15,
        16: d_16,
        17: d_17,
        18: d_18,
        19: d_19
    }

    const finalTwo = {
        d_0,
        d_1,
        d_2,
        d_3,
        d_4,
        d_5,
        d_6,
        d_7,
        d_8,
        d_9,
        d_10,
        d_11,
        d_12,
        d_13,
        d_14,
        d_15,
        d_16,
        d_17,
        d_18,
        d_19
    }

    const finalThree = [
            {
                driver: d_0
            },
            {
                driver: d_1
            },
            {
                driver: d_2
            },
            {
                driver: d_3
            },
            {
                driver: d_4
            },
            {
                driver: d_5
            },
            {
                driver: d_6
            },
            {
                driver: d_7
            },
            {
                driver: d_8
            },
            {
                driver: d_9
            },
            {
                driver: d_10
            },
            {
                driver: d_11
            },
            {
                driver: d_12
            },
            {
                driver: d_13
            },
            {
                driver: d_14
            },
            {
                driver: d_15
            },
            {
                driver: d_16
            },
            {
                driver: d_17
            },
            {
                driver: d_18
            },
            {
                driver: d_19
            }
        ]

    try {

        const id = req.params.id;


        let drivers = await Drivers.findOneAndUpdate(
            {_id: id},
            { $set: {drivers: finalThree} },
            { new: true, upsert: true, setDefaultsOnInsert: true })
        res.json(drivers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Drivers not updated');
    }

};