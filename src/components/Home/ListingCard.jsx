import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStars from '../Common/RatingStars';
import '../../styles/global.css';

const ListingCard = ({ 
  id, 
  image, 
  title, 
  location, 
  rating, 
  reviewCount, 
  price, 
  type, 
  isFavorite, 
  onWishlistToggle 
}) => {
  const navigate = useNavigate();

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (onWishlistToggle) onWishlistToggle(id);
  };

  return (
    <div className="listing-card" onClick={() => navigate(`/listing/${id}`)}>
      <div className="card-image-container">
        <img src={image} alt={title} loading="lazy" />
        <button 
          className={`wishlist-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="card-info">
        <div className="card-header">
          <h3 className="card-title">{location}</h3>
          <span className="rating-text">⭐ {rating}</span>
        </div>
        <p className="card-type">{title}</p>
        <p className="card-date">24-29 Apr</p>
        <p className="card-price">
          <span className="price-value">₹{price.toLocaleString()}</span>
          <span className="price-unit"> night</span>
        </p>
      </div>

      <style jsx>{`
        .listing-card {
          cursor: pointer;
          transition: var(--transition-default);
          border-radius: var(--radius-card);
        }

        .card-image-container {
          position: relative;
          aspect-ratio: 1/0.95;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 1.5rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: transform 0.2s;
        }

        .wishlist-btn:active {
          transform: scale(0.8);
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .rating-text {
          font-size: 0.9rem;
          font-weight: 400;
        }

        .card-type, .card-date {
          font-size: 0.95rem;
          color: var(--text-light);
        }

        .card-price {
          margin-top: 4px;
          font-size: 1rem;
          color: var(--text-dark);
        }

        .price-value {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default ListingCard;
