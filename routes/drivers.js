const { Router } = require('express');
const driversController = require('../controllers/driversController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

router.post('/', driversController.post_create_drivers);
router.get('/', driversController.get_drivers);
router.put('/update/:id',auth, driversController.put_edit_drivers);




module.exports = router;