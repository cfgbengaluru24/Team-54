import React from 'react';
import Donation from './components/Donate.jsx';
import Cart from './components/Cart.jsx';
import Inventory from './components/Inventory.jsx';
import SendEmailButton from './components/SendEmailButton.jsx';

const AppRoutes = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#CFFCF8",
      margin: 0,
      color: 'black',
    }}>
      <div><Donation /></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Cart />
      </div>
      <div><Inventory /></div>
      <div><SendEmailButton /></div>
    </div>
  );
};

export default AppRoutes;
