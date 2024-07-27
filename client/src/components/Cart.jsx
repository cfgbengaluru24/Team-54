import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/inventory')
      .then(response => response.json())
      .then(data => {
        const initialItems = data.map(item => ({ category: item.category, quantity: 0 }));
        setCartItems(initialItems);
      })
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  const handleIncrease = (category) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.category === category ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (category) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.category === category && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleSubmit = () => {
    const itemsToSubmit = cartItems.filter(item => item.quantity > 0);
    fetch('/api/cart/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: itemsToSubmit })
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.message || data.error);
      })
      .catch(error => console.error('Error submitting cart:', error));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.category}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
      <button onClick={handleSubmit}>Submit Cart</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Cart;
