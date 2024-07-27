const Donation = require('../models/donationModel');
const Inventory = require('../models/inventoryModel');
const { sendRescheduleEmail } = require('../utils/mailer');

exports.createDonation = async (req, res) => {
    const { category, quantity, email } = req.body;

    try {
        let inventory = await Inventory.findOne({ category });

        if (!inventory) {
            // Create a new inventory entry if it does not exist
            inventory = new Inventory({ category, quantity: 0, totalCapacity: 10 }); // Initialize with total capacity
        }

        if (inventory.quantity + quantity > 10) {
            const rescheduleDate = new Date();
            rescheduleDate.setDate(rescheduleDate.getDate() + 7); // Reschedule for 7 days later
            
            sendRescheduleEmail(email, rescheduleDate.toDateString());
            return res.status(400).json({ msg: 'Not enough space in inventory. An email has been sent to reschedule your donation.' });
        }

        // Save the donation
        const donation = new Donation({ user: req.user.id, category, quantity });
        await donation.save();

        // Update inventory
        inventory.quantity += quantity;
        await inventory.save();

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
