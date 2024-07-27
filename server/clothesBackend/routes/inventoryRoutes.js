const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/initialize', inventoryController.initializeInventory);
router.post('/updateQuantity', inventoryController.updateQuantity);

module.exports = router;

module.exports = router;
