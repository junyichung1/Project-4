const express = require('express');
const router = express.Router();
const sportsApiCtrl = require('../../controllers/api/sportsApi');


router.get('/sportsApi', sportsApiCtrl.getLeagueRecords);


module.exports = router;