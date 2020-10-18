const mongoose = require('mongoose');

const betSchema = new mongoose.Schema ({
    amount: {type: Number},
    team: {type: String, uppercase: true},
    betType: {type: String, enum: ['Moneyline', 'Over', 'Under', 'Spread']},
    metric: {type: Number},
    odds: {type: Number},
    potential: {type: Number},
    outcome: {type: String, enum: ['Win', 'Loss', 'Game Not Complete']},
    earnings: {type: Number},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Bet', betSchema);