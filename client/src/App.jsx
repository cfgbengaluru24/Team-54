// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Donation from './components/Donate';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import Form from './Form';
import DataFetchingComponent from './education/DataFetchingComponent.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';  // Import Home component
import About from './components/About';  // Import About component

const App = () => {
  return (
    <Router>
      <div style={{ background: "white", height: "100vh" }}>
        <Navbar />
        <div style={{ display: "flex", justifyContent: "center", color: "black", marginTop: "2rem", width: "80%", margin: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
            <Route path="/data" element={<DataFetchingComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
