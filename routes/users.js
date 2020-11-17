const { Router } = require('express');
const usersController = require('../controllers/usersController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

router.post('/', usersController.create_user);
router.get('/:id', auth, usersController.user_info);
router.put('/:id', usersController.put_edit_user);
router.post('/reset/request', usersController.post_request_password_reset);
router.patch('/reset/patch', usersController.patch_request_password_reset);



module.exports = router;
