const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  donatedAmount: { type: Number, required: true },
  donationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donor', donorSchema);
