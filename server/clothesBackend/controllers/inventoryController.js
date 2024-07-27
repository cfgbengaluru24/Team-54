const Inventory = require('../models/inventoryModel');

// Initialize inventory with categories
exports.initializeInventory = async () => {
  const categories = [
    'Shirts', 'Pants', 'Jackets', 'Socks', 'Hats', 'Scarves', 'Gloves', 'Shoes', 'Bags', 'Accessories'
  ];

  try {
    for (const category of categories) {
      await Inventory.updateOne(
        { category },
        { $setOnInsert: { category, quantity: 0, capacity: 10 } },
        { upsert: true }
      );
    }
    console.log('Inventory initialized successfully');
    return { message: 'Inventory initialized successfully' };
  } catch (error) {
    console.error('Error initializing inventory:', error);
    throw new Error('Server error'); // Throw error to be caught by route handler
  }
};

exports.updateQuantity = async (req, res) => {
  const { category, quantity } = req.body;

  try {
    const inventoryItem = await Inventory.findOne({ category });

    if (!inventoryItem) {
      return res.status(404).json({ message: 'Category not found' });
    }

    if (quantity > inventoryItem.capacity) {
      return res.status(400).json({ message: 'Insufficient capacity' });
    }

    inventoryItem.quantity += quantity;
    inventoryItem.capacity -= quantity;

    await inventoryItem.save();

    res.status(200).json({ message: 'Quantity updated successfully', item: inventoryItem });
  } catch (error) {
    console.error('Error updating quantity:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
