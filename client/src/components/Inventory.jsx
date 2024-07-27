import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/inventory', {
          headers: { 'x-auth-token': token }
        });
        setInventory(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div>
      <h2>Current Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            <strong>Category:</strong> {item.category} <br />
            <strong>Quantity:</strong> {item.quantity} <br />
            <strong>Total Capacity:</strong> {item.totalCapacity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
