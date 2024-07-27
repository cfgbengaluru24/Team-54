import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Donate from './components/Donate';
import Inventory from './components/Inventory';  // Import the Inventory component
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/inventory">Inventory</Link> {/* Add link to inventory */}
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Add route for inventory */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
