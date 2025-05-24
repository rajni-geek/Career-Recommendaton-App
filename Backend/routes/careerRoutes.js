const express = require('express');
const router = express.Router();
const { getAllCareers, addCareer } = require('../controllers/careerController');
const auth = require('../middleware/authMiddleware');

router.get('/', getAllCareers);
router.post('/', auth, addCareer);  // Only authenticated users can add

module.exports = router;
