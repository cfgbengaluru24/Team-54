import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Donation from './components/Donate';
import Inventory from './components/Inventory';  // Import the Inventory component
import Cart from './components/Cart';
import SendEmailButton from './components/SendEmailButton';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/inventory">Inventory</Link> {/* Add link to inventory */}
        <Link to="/cart">Cart</Link>
        <Link to="/email">Email</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Add route for inventory */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/email" element={<SendEmailButton/>}/>
      </Routes>
    </Router>
  );
};

export default App;
