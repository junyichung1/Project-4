const express = require('express');
const router = express.Router();
const sportsApiCtrl = require('../../controllers/api/sportsApi');


router.get('/schedule', sportsApiCtrl.getLeagueRecords);
router.get('/schedule/:id', sportsApiCtrl.leagueDetail);


module.exports = router;