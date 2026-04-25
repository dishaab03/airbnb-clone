import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="main-image" onClick={() => setSelectedImage(images[0])}>
          <img src={images[0]} alt={`${title} - 1`} loading="lazy" />
        </div>
        <div className="thumbnails-grid">
          {images.slice(1, 5).map((img, index) => (
            <div key={index} className="thumbnail" onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`${title} - ${index + 2}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Full view" />
            <div className="lightbox-nav">
              {/* Previous/Next arrows could be added here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
