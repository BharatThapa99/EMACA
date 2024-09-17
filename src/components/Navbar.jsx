import React from 'react';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import logo from "../assets/react.svg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Replace # with the correct logo URL */}
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="navbar-name">EMACA</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/objectives" className="nav-link">Objectives</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/downloads" className="nav-link">Downloads</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
