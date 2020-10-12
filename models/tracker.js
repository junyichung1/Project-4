const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema ({
    amount: {type: String},
    team: {type: String},
    betType: {type: String, enum: ['money line', 'Over', 'Under', 'Spread']},
    metric: {type: Number},
    odds: {type: Number},
    potential: {type: Number},
    outcome: {type: String, enum: ['Win', 'Loss']},
    earnings: {type: Number},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    eventID: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Tracker', trackerSchema);