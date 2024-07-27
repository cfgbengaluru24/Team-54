const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  quantity: { type: Number, default: 0 },
  capacity: { type: Number, default: 10 },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
