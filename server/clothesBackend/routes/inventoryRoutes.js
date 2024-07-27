const express = require('express');
const { initializeInventory } = require('../controllers/inventoryController'); // Ensure correct path

const router = express.Router();

router.post('/initialize', async (req, res) => {
  try {
    const result = await initializeInventory();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
