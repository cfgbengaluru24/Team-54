import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donation = () => {
  const [formData, setFormData] = useState({ category: '', quantity: '', email: '' });
  const [message, setMessage] = useState('');
  const [donations, setDonations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/donate', formData);
      setMessage(res.data.message);
      fetchDonations();
    } catch (err) {
      console.error(err.response.data);
      setMessage(err.response.data.error || 'Failed to add donation');
    }
  };

  const fetchDonations = async () => {
    try {
      const res = await axios.get('/donations');
      setDonations(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <div>
      <h2>Donate Clothes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Donate</button>
      </form>
      {message && <p>{message}</p>}
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation._id}>
            <strong>Category:</strong> {donation.category} <br />
            <strong>Quantity:</strong> {donation.quantity} <br />
            <strong>Email:</strong> {donation.email} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donation;
