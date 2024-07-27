const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { createDonation, getDonations } = require('../controllers/donationController');
router.post('/donate', auth, createDonation);
router.get('/donations', auth, getDonations);
module.exports = router;
