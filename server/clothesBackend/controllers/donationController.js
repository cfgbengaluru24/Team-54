const Donation = require('../models/donationModel');

exports.createDonation = async (req, res) => {
    const { category, quantity } = req.body;
    try {
        const donation = new Donation({ user: req.user.id, category, quantity });
        await donation.save();
        res.json(donation);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getDonations = async (req, res) => {
    try {
        const donations = await Donation.find({ user: req.user.id });
        res.json(donations);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
