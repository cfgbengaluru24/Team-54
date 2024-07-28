const Donation = require('../models/donationModel');
const Inventory = require('../models/inventoryModel');

exports.addDonation = async (req, res) => {
  const { category, quantity, email } = req.body;

  try {
    // Find the inventory item
    const inventoryItem = await Inventory.findOne({ category });

    if (!inventoryItem) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (quantity > inventoryItem.capacity) {
      return res.status(400).json({ message: 'Insufficient capacity' });
    }

    // Update inventory
    inventoryItem.quantity += quantity;
    inventoryItem.capacity -= quantity;
    await inventoryItem.save();

    // Add donation
    const newDonation = new Donation({
      category,
      quantity,
      email
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation added successfully', donation: newDonation });
  } catch (error) {
    console.error('Error adding donation:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
