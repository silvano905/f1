const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriversSchema = new Schema({
    drivers: [
        {
            driver: {
                type: String
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('driver', DriversSchema);