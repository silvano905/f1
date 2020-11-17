const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WinnersSchema = new Schema({
    uuid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    twenty:[
        {
            user: {
                type: Schema.Types.ObjectId
            },
            betId: {
                type: Schema.Types.ObjectId,
            },
            name: {
                type: String,
            },
        }

    ],
    nineteen:[
        {
            user: {
                type: Schema.Types.ObjectId
            },
            betId: {
                type: Schema.Types.ObjectId,
            },
            name: {
                type: String,
            },
        }

    ],

});

module.exports = mongoose.model('winner', WinnersSchema);