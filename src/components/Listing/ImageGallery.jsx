import React from 'react';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img src={images[0]} alt="Property main" />
      </div>
      <div className="secondary-images hide-mobile">
        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="gallery-thumbnail">
            <img src={img} alt={`Property view ${index + 1}`} />
          </div>
        ))}
        {images.length > 5 && (
          <button className="show-all-btn">Show all photos</button>
        )}
      </div>

      <style jsx>{`
        .image-gallery {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-2);
          border-radius: var(--radius-card);
          overflow: hidden;
          height: 450px;
          margin-bottom: var(--space-6);
        }

        .main-image {
          height: 100%;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-default);
        }

        .secondary-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: var(--space-2);
          position: relative;
        }

        .gallery-thumbnail {
          height: 100%;
          overflow: hidden;
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-default);
        }

        .gallery-thumbnail img:hover, .main-image img:hover {
          filter: brightness(0.9);
        }

        .show-all-btn {
          position: absolute;
          bottom: var(--space-4);
          right: var(--space-4);
          background-color: white;
          color: var(--text-dark);
          border: 1px solid var(--text-dark);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-button);
          font-weight: 500;
          font-size: 0.9rem;
          box-shadow: var(--shadow-subtle);
        }

        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: 1fr;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
