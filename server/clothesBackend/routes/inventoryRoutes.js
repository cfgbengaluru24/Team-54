const express = require('express');
const { initializeInventory } = require('../controllers/inventoryController'); // Ensure correct path
const Inventory = require('../models/inventoryModel');



const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/initialize', async (req, res) => {
  try {
    const result = await initializeInventory();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;



