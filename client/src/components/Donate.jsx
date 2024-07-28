import React, { useState } from 'react';
import axios from 'axios';
import './Donation.css';

const Donation = () => {
  const [formData, setFormData] = useState({ category: '', quantity: '', email: '' });
  const [message, setMessage] = useState('');
  const [donations, setDonations] = useState([]);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/donate', formData);
      setMessage(res.data.message);
      setDonationSuccess(true);
      fetchDonations();
      setShowModal(true); // Show the modal on success
    } catch (err) {
      console.error(err.response.data);
      setMessage(err.response.data.error || 'Failed to add donation');
      setDonationSuccess(false);
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
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
            className="email-input"
          />
        </label>
        <br />
        <button type="submit">Donate</button>
      </form>
      {message && <p className="message">{message}</p>}
      {donationSuccess && (
        <div className="donations">
          <h2>Recent Donations</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation._id}>
                <strong>Category:</strong> {donation.category} <br />
                <strong>Quantity:</strong> {donation.quantity} <br />
                <strong>Email:</strong> {donation.email} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Donation added successfully!</p>
            <p>Please drop off the clothes at X Location!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;

