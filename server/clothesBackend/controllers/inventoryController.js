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
