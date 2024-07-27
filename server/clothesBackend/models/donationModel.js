const mongoose = require('mongoose');
const DonationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
});
module.exports = mongoose.model('Donation', DonationSchema);
