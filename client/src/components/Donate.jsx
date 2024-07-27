import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const Donate = () => {
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [donations, setDonations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('/api/donations/donate', { category, quantity }, {
                headers: { 'x-auth-token': token }
            });
            setDonations([...donations, res.data]);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('/api/donations/donations', {
                    headers: { 'x-auth-token': token }
                });
                setDonations(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchDonations();
    }, []);

    return (
        <div>
            <h2>Donate Clothes</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button type="submit">Donate</button>
            </form>
            <h3>Your Donations</h3>
            <ul>
                {donations.map(donation => (
                    <li key={donation._id}>{donation.category}: {donation.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default Donate;