// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{
      backgroundColor: "black",
      width: "100%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "0 20px"
    }}>
        <div> <img src="https://aspireandglee.com/wp-content/uploads/2020/04/cropped-img-20200417-wa0062_edited.png" 
                  style={{ width: '100px', height: '75px', margin: '20px 0' }}
></img></div>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h3>Home</h3>
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        <h3>About</h3>
      </Link>
      <Link to="/donate" style={{ color: "white", textDecoration: "none" }}>
        <h3>Donate Clothes</h3>
      </Link>
      <Link to="/data" style={{ color: "white", textDecoration: "none" }}>
        <h3>Progress Tracker</h3>
      </Link>
      <Link to="/form" style={{ color: "white", textDecoration: "none" }}>
        <h3>Form</h3>
      </Link>
    </div>
  );
}

export default Navbar;
