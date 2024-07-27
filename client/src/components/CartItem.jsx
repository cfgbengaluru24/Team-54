import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <div className="cart-item">
      <span>{item.category}</span>
      <button onClick={() => onDecrease(item.category)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onIncrease(item.category)}>+</button>
    </div>
  );
};

export default CartItem;
