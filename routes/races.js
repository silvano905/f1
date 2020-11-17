const { Router } = require('express');
const racesController = require('../controllers/racesController');
const auth = require('../middleware/auth');

//create router instance
const router = Router();

router.post('/',auth, racesController.post_create_race);
router.get('/', racesController.get_race);
router.get('/all', racesController.get_all_races);
// router.get('/points',auth, racesController.get_update_points);
router.get('/:id', racesController.get_race_id);
router.delete('/:id',auth, racesController.delete_race);
router.post('/add_results',auth, racesController.add_results);


module.exports = router;