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
      <Link to="/donate" style={{ color: "white", textDecoration: "none" }}>
        <h3>Donate Clothes</h3>
      </Link>
      <Link to="/data" style={{ color: "white", textDecoration: "none" }}>
        <h3>Fetch Data</h3>
      </Link>
      <Link to="/form" style={{ color: "white", textDecoration: "none" }}>
        <h3>Form</h3>
      </Link>
    </div>
  );
}

export default Navbar;
