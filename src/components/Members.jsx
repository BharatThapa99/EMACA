import React, { useState } from 'react';
import './Members.css'; // Import the corresponding CSS file
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaFacebook, FaTwitter, FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Social Media and Arrow Icons

const members = [
  {
    name: 'Prabha Sharma',
    position: 'President',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Salina Bhatta',
    position: 'Vice President',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Prabhakar Chaudhary',
    position: 'Vice President',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Saramsha Bhandari',
    position: 'Secretary',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Rammani Lamichane',
    position: 'Vice Secretary',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'MD Kamar Reza',
    position: 'Treasury',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Smarika Bhaila ',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Mithilesh Kumar Sah',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Krishna Prasad Khanal',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Shankar Lal Das',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Suman Kumar Hamal',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Manju Prajapati',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Ashutosh Jha',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Jaybabu Mahato',
    position: 'Member',
    img: '/images/profile-pic/profile.png', // Replace with actual path to the image
    social: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  
];

 // Settings for the slider
 const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <FaArrowLeft className="slick-prev" />,
    nextArrow: <FaArrowRight className="slick-next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };


const MembersSection = () => {
    
  
    return (
<section className="members-section">
        <div className="members-section-header">
          <h2>Our Members</h2>
          <p>EMACA 11th Executive Committee</p>
        </div>
  
    <div className="slider-container">
          
  
          <div className="members-grid" >
        <Slider {...settings} className="slider">
            {members.map((member, index) => (
              <div className="member-card" key={index}>
                <div className="member-image">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <div className="social-icons">
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
          </div>
  
          
    </div>
</section>
    );
  };
  
  export default MembersSection;
