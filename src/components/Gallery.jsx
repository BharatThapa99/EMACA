import React, { useState } from 'react';
import './Gallery.css';


// Data: Gallery sections and their images
const galleryData = {
  "First Session of EMACA 2069": [
    '/images/first-session/Picture1.jpg',
    '/images/first-session/Picture2.jpg',
    '/images/first-session/Picture3.jpg',
    '/images/first-session/Picture4.jpg',
    '/images/first-session/Picture5.jpg',
    '/images/first-session/Picture6.jpg',
    '/images/first-session/Picture7.jpg',
    '/images/first-session/Picture8.jpg',
    '/images/first-session/Picture9.jpg',
    
  ],
  "Third Session of EMACA 2073": [
    '/images/third-session/Picture10.jpg',
    '/images/third-session/Picture11.jpg',
    '/images/third-session/Picture12.jpg',
    '/images/third-session/Picture13.jpg',
    '/images/third-session/Picture14.jpg',
    '/images/third-session/Picture15.jpg',
    '/images/third-session/Picture16.jpg',
    '/images/third-session/Picture17.jpg',
    '/images/third-session/Picture18.jpg',
    '/images/third-session/Picture19.jpg',
    '/images/third-session/Picture20.jpg',
    '/images/third-session/Picture21.jpg',
    '/images/third-session/Picture22.jpg',
    '/images/third-session/Picture23.jpg',
    '/images/third-session/Picture24.jpg',
    '/images/third-session/Picture25.jpg',
    '/images/third-session/Picture26.jpg',
    '/images/third-session/Picture27.jpg',
    '/images/third-session/Picture28.jpg',
    '/images/third-session/Picture29.jpg',

    
  ],
  "Fifth Session of EMACA": [
    '/images/fifth-session/Picture30.jpg',
    ''
  ],
  "Volleyball Competition": [
    '/images/volleyball/Picture31.jpg',
    '/images/volleyball/Picture32.jpg',
    '/images/volleyball/Picture33.jpg',
    '/images/volleyball/Picture34.png',
  ],
  "Sports Team":[
    '/images/sports-team/Picture35.jpg',
    '/images/sports-team/Picture36.jpg',
    '/images/sports-team/Picture37.jpg',
    '/images/sports-team/Picture38.jpg',

  ],
  "Futsal Competition": [
    '/images/futsal-competition/Picture39.png',
    '/images/futsal-competition/Picture40.jpg',
    '/images/futsal-competition/Picture41.jpg',
    '/images/futsal-competition/Picture42.jpg',
    '/images/futsal-competition/Picture43.jpg',
    '/images/futsal-competition/Picture44.jpg',
    '/images/futsal-competition/Picture45.jpg',
    '/images/futsal-competition/Picture46.jpg',
    '/images/futsal-competition/Picture47.jpg',
    '/images/futsal-competition/Picture48.jpg',
    '/images/futsal-competition/Picture49.jpg',
    '/images/futsal-competition/Picture50.jpg',
    '/images/futsal-competition/Picture51.jpg',
    '/images/futsal-competition/Picture52.jpg',
    '/images/futsal-competition/Picture53.jpg',
    '/images/futsal-competition/Picture54.jpg',
    '/images/futsal-competition/Picture55.jpg',
    '/images/futsal-competition/Picture56.jpg',
    '/images/futsal-competition/Picture58.jpg',
    '/images/futsal-competition/Picture59.jpg',
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
        <h1 className='gallery-title'>EMACA Gallery</h1>
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
