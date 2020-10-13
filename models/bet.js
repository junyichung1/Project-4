const mongoose = require('mongoose');

const betSchema = new mongoose.Schema ({
    amount: {type: Number},
    team: {type: String, uppercase: true},
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

module.exports = mongoose.model('Bet', betSchema);