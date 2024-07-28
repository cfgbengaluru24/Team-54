const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/api/donate', donationController.addDonation);
router.get('/donations', donationController.getDonations);

module.exports = router;
