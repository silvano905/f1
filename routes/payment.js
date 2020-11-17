const { Router } = require('express');
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

router.get('/secret/:id', paymentController.get_payment);
router.get('/secret/paid/:id', paymentController.get_change_paid);
router.post('/paid/receipt',auth, paymentController.get_send_receipt);





module.exports = router;