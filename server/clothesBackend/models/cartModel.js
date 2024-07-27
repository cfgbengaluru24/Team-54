const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [{
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
  totalQuantity: { type: Number, required: true },
});

module.exports = mongoose.model('Cart', cartSchema);
