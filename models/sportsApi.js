const mongoose = require('mongoose');

const SportsSchema = new mongoose.Schema ({
    teams: {type: String},
    Schedule: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('SportsApi', SportsSchema);