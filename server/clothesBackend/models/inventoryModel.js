const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalCapacity: { type: Number, default: 10 } // Total capacity initialized to 10
});

module.exports = mongoose.model('Inventory', InventorySchema);
