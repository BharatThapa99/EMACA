import React, { useState } from 'react';
import './Gallery.css';
import image1 from '../assets/Hero-bg.jpg'
import image2 from '../assets/security.jpeg'
import picture1 from '../assets/first-session/Picture1.jpg'
import picture2 from '../assets/first-session/Picture2.jpg'
import picture3 from '../assets/first-session/Picture3.jpg'
import picture4 from '../assets/first-session/Picture4.jpg'
import picture5 from '../assets/first-session/Picture5.jpg'
import picture6 from '../assets/first-session/Picture6.jpg'
import picture7 from '../assets/first-session/Picture7.jpg'
import picture8 from '../assets/first-session/Picture8.jpg'
import picture9 from '../assets/first-session/Picture9.jpg'

import picture10 from '../assets/third-session/Picture10.jpg'

// Data: Gallery sections and their images
const galleryData = {
  "First Session of EMACA on 4th Magh, 2069": [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
  ],
  "Aviation Seminar": [
    image2,
    image1,
    image2,
  ],
  // Add more galleries as needed
};


const Gallery = () => {
    const [selectedGallery, setSelectedGallery] = useState(null); // To handle the grid of a specific gallery
    const [selectedImage, setSelectedImage] = useState(null); // To handle the clicked image for lightbox
  
    // Open the selected gallery
    const handleGalleryClick = (gallery) => {
      setSelectedGallery(gallery);
      setSelectedImage(null); // Reset image selection when a new gallery is opened
    };
  
    // Open the image in the lightbox
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    // Close the lightbox
    const closeLightbox = () => {
      setSelectedImage(null);
    };
  
    // Navigate through images in the lightbox
    const navigateImages = (direction) => {
      const images = galleryData[selectedGallery];
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + direction + images.length) % images.length;
      setSelectedImage(images[nextIndex]);
    };
  
    // Handle going back to the main gallery page
    const handleBackClick = () => {
      setSelectedGallery(null); // Reset selectedGallery to null to show the main gallery
    };
  
    return (
      <div className="gallery-container">
        {!selectedGallery ? (
          // Gallery thumbnails
          <div className="gallery-thumbnails">
            {Object.keys(galleryData).map((gallery, index) => (
              <div
                className="gallery-thumbnail"
                key={index}
                onClick={() => handleGalleryClick(gallery)}
              >
                <div className="thumbnail-overlay">
                  <h5>{gallery}</h5>
                </div>
                <img
                  src={galleryData[gallery][0]} // Display the first image as thumbnail
                  alt={gallery}
                  className="thumbnail-img"
                />
              </div>
            ))}
          </div>
        ) : (<>
          <div className="gallery-grid">
            {/* Back Button */}
  
            {/* Display the selected gallery grid */}
            {galleryData[selectedGallery].map((image, index) => (
              <div
                className="gallery-grid-item"
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <img src={image} alt={`Gallery ${selectedGallery} ${index}`} />
              </div>
            ))}
            
          </div>
          <button className="back-button" onClick={handleBackClick}>← Back to Galleries</button>

          </>
          
        )}
  
        {/* Lightbox for selected image */}
        {selectedImage && (
          <div className="lightbox">
            <div className="lightbox-content">
              <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
              <img src={selectedImage} alt="Large view" className="lightbox-img" />
              <div className="lightbox-nav">
                <span className="prev-arrow" onClick={() => navigateImages(-1)}>&#10094;</span>
                <span className="next-arrow" onClick={() => navigateImages(1)}>&#10095;</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Gallery;
