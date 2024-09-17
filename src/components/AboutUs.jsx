import React from 'react';
import './AboutUs.css'; // Import the CSS file
import { FaShieldAlt, FaCogs, FaTools, FaPlane } from 'react-icons/fa'; // Import some icons

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Left part with About Us description */}
      <div className="about-us-left">
        <h2>About Us</h2>
        <p>
          The Electrical Mechanical Association of Civil Aviation (EMACA) is a
          professional body dedicated to ensuring the highest standards of
          safety, security, and efficiency within the aviation industry.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Right part with services/features */}
      <div className="about-us-right">
        <div className="service">
          <FaShieldAlt className="service-icon" />
          <h3>Security</h3>
          <p>We ensure the highest standards of safety and security for all operations in aviation.</p>
        </div>
        <div className="service">
          <FaCogs className="service-icon" />
          <h3>Maintenance</h3>
          <p>Providing cutting-edge maintenance solutions to enhance aviation efficiency.</p>
        </div>
        <div className="service">
          <FaTools className="service-icon" />
          <h3>Repairs</h3>
          <p>Expert repair services to keep your aviation equipment in peak condition.</p>
        </div>
        <div className="service">
          <FaPlane className="service-icon" />
          <h3>Flight Operations</h3>
          <p>Managing and streamlining all aspects of flight operations for maximum safety.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
