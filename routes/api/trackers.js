const express = require('express');
const router = express.Router();
const trackersCtrl = require('../../controllers/trackers');

router.get('/trackers', trackersCtrl.getLeagueRecords);


module.exports = router;