const express = require('express');
const router = express.Router();
const betsCtrl = require('../../controllers/api/bets');


router.use(require('../../config/auth'));
router.get('/', betsCtrl.index);
router.get('/:id', betsCtrl.show);
router.post('/', betsCtrl.create);
router.delete('/:id', betsCtrl.delete);
router.put('/:id', betsCtrl.update);

module.exports = router;