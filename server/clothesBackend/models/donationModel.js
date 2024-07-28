const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
