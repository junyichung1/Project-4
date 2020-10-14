const express = require('express');
const router = express.Router();
const sportsApiCtrl = require('../../controllers/api/sportsApi');


router.get('/schedule', sportsApiCtrl.getLeagueRecords);
router.get('/teams', sportsApiCtrl.leagueDetail);


module.exports = router;