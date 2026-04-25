import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/global.css';
import PriceDisplay from '../Common/PriceDisplay';

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
          <PriceDisplay amount={price} perNight={true} />
        </p>
      </div>

      <style jsx>{`
        .listing-card {
          cursor: pointer;
          transition: var(--transition-default);
          display: flex;
          flex-direction: column;
        }

        .card-image-container {
          position: relative;
          aspect-ratio: 1/0.95;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
          background-color: var(--bg-light);
        }

        .card-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .listing-card:hover .card-image-container img {
          transform: scale(1.05);
        }

        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 24px;
          color: rgba(0, 0, 0, 0.5);
          -webkit-text-stroke: 2px white;
          transition: transform 0.2s, color 0.2s;
        }

        .wishlist-btn.active {
          color: var(--primary-color);
          -webkit-text-stroke: 0;
        }

        .wishlist-btn:active {
          transform: scale(0.9);
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .card-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 19px;
        }

        .rating-text {
          font-size: 14px;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-type, .card-date {
          font-size: 15px;
          color: var(--text-light);
          font-weight: 400;
          line-height: 19px;
        }

        .card-price {
          margin-top: 6px;
          font-size: 15px;
          color: var(--text-dark);
        }

        .price-value {
          font-weight: 700;
        }

        .price-unit {
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default ListingCard;
