import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';  // Import HashLink
import { useLocation } from 'react-router-dom';
import logo from '../assets/react.svg'
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (hash) => location.hash === hash;

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <div className="navbar-logo">
        {/* Replace # with the correct logo URL */}
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="navbar-name">EMACA</span>
      </div>
      </div>

      
      <div className="navbar-right">
        <ul className="navbar-links">
          {/* Scroll to sections within the home page */}
          <li>
            <Link smooth to="/#hero">
              Home
            </Link>
          </li>
          <li>
            <Link smooth to="/#about-us" className={isActive('#about-us') ? 'active' : ''}>
              About Us
            </Link>
          </li>
          <li>
            <Link smooth to="/#objectives" className={isActive('#objectives') ? 'active' : ''}>
              Objectives
            </Link>
          </li>
          <li>
            <Link smooth to="/#members" className={isActive('#members') ? 'active' : ''}>
              Members
            </Link>
          </li>
           {/* Navigate to the Gallery page */}
           <li>
            <Link to="/gallery" className={isActive('#gallery') ? 'active' : ''}>Gallery</Link>
          </li>
          <li>
            <Link smooth to="/#downloads">
              Downloads
            </Link>
          </li>
          
         
          <li>
            <Link smooth to="/#login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
