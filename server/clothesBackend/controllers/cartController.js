const Cart = require('../models/cartModel');
const Inventory = require('../models/inventoryModel');

exports.submitCart = async (req, res) => {
  const { items } = req.body;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  try {
    // Check if total inventory exceeds capacity
    const totalInventory = await Inventory.aggregate([
      { $group: { _id: null, total: { $sum: "$quantity" } } }
    ]);

    if (totalInventory[0].total + totalQuantity > 10) {
      return res.status(400).json({ error: 'Exceeded total inventory capacity' });
    }

    // Update inventory quantities
    for (const item of items) {
      const inventoryItem = await Inventory.findOne({ category: item.category });

      if (inventoryItem.quantity + item.quantity > inventoryItem.capacity) {
        return res.status(400).json({ error: `Exceeded capacity for ${item.category}` });
      }

      inventoryItem.quantity += item.quantity;
      await inventoryItem.save();
    }

    // Save cart
    const cart = new Cart({ items, totalQuantity });
    await cart.save();

    res.status(200).json({ message: 'Cart submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
