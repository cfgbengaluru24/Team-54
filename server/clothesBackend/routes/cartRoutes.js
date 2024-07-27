const express = require('express');
const { submitCart } = require('../controllers/cartController');

const router = express.Router();

router.post('/submit', submitCart);

module.exports = router;
