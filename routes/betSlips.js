const { Router } = require('express');
const betSlipController = require('../controllers/betSlipController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

router.post('/',auth, betSlipController.post_create_betSlip);
router.get('/:user_id',auth, betSlipController.get_user_betSlips);
router.get('/byId/:id',auth, betSlipController.get_betSLipById);
router.delete('/:id',auth, betSlipController.delete_betSlip);
router.get('/', betSlipController.get_all_betSlips);
router.get('/uuid/:id', betSlipController.get_betSlip_By_Uuid);
router.put('/update/:id',auth, betSlipController.put_edit_betSlip);






module.exports = router;