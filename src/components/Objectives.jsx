import React from 'react';
import './Objectives.css';
import security from '../assets/security.jpeg'

const Objectives = () => {
  return (
    <section className="objectives">
      {/* Centered title with blue underline */}
      <h2 className="objectives-title">Our Objectives</h2>
      
      {/* First Objective - Image on the left, text on the right */}
      <div className="objective-section">
        
      </div>
      <div className="objective">
        <div className="objective-image">
          <img src={security} alt="Objective 1" />
        </div>
        <div className="objective-content">
          <h3>Enhance Safety</h3>
          <p>Our primary goal is to enhance the safety and security measures across all aviation sectors.</p>
        </div>
      </div>

      {/* Second Objective - Image on the right, text on the left */}
      <div className="objective">
        
       

        <div className="objective-content">
          <h3>Improve Efficiency</h3>
          <p>We aim to improve efficiency in civil aviation through innovative mechanical and electrical solutions.</p>
        </div>

        <div className="objective-image">
          <img src={security} alt="Objective 2" />
        </div>
      </div>

      {/* Third Objective - Image on the left, text on the right */}
      <div className="objective">
        <div className="objective-image">
          <img src={security} alt="Objective 3" />
        </div>
        <div className="objective-content">
          <h3>Foster Innovation</h3>
          <p>Fostering innovation in aviation to meet future challenges through technology and training.</p>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
