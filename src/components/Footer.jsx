import React from 'react';
import './Footer.css';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaTwitterSquare } from 'react-icons/fa'; // Import Facebook icon

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left side - Website name, address, and email */}
      <div className="footer-left">
        <h3>EMACA - Electrical Mechanical Association of Civil Aviation</h3> {/* Change to your website's name */}
        <p>123 Aviation Street, Kathmandu, Nepal</p>
        <p>Email: contact@emaca.com</p> {/* Change to your actual email */}
      </div>

      {/* Right side - Quick links and Facebook icon */}
      <div className="footer-right">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/downloads">downloads</a></li>
          <li><a href="/gallery">gallery</a></li>
        </ul>
      
      </div>
        {/* Facebook icon with link */}
        <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitterSquare />
        </a>
        <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
    </footer>
  );
};

export default Footer;
