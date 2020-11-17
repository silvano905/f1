const { Router } = require('express');
const winnersController = require('../controllers/winnersController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

// router.get('/',winnersController.add_winners_list);
router.get('/list',winnersController.add_get_winners_list);






module.exports = router;