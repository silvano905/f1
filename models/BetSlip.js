const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BetSlipSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    bet_p_1: {
        type: String,
        required: true
    },
    bet_p_2: {
        type: String,
        required: true
    },
    bet_p_3: {
        type: String,
        required: true
    },
    bet_p_4: {
        type: String,
        required: true
    },
    bet_p_5: {
        type: String,
        required: true
    },
    bet_p_6: {
        type: String,
        required: true
    },
    bet_p_7: {
        type: String,
        required: true
    },
    bet_p_8: {
        type: String,
        required: true
    },
    bet_p_9: {
        type: String,
        required: true
    },
    bet_p_10: {
        type: String,
        required: true
    },
    bet_p_11: {
        type: String,
        required: true
    },
    bet_p_12: {
        type: String,
        required: true
    },
    bet_p_13: {
        type: String,
        required: true
    },
    bet_p_14: {
        type: String,
        required: true
    },
    bet_p_15: {
        type: String,
        required: true
    },
    bet_p_16: {
        type: String,
        required: true
    },
    bet_p_17: {
        type: String,
        required: true
    },
    bet_p_18: {
        type: String,
        required: true
    },
    bet_p_19: {
        type: String,
        required: true
    },
    bet_p_20: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    points: {
        type: Number
    },
    paid: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('slip', BetSlipSchema);