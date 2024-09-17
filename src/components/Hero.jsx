import React from 'react';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div> {/* Black overlay with opacity */}
      <div className="hero-content">
        <h1>Electrical Mechanical Association of Civil Aviation</h1>
        <p>Become a member today</p>
        <button className="hero-btn">Register Now</button>
      </div>
    </section>
  );
};

export default Hero;
