import React from 'react';

const RatingStars = ({ rating, reviewCount, size = 'medium', interactive = false }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<span key={i} className="star full">★</span>);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  }

  return (
    <div className={`rating-stars ${size} ${interactive ? 'interactive' : ''}`}>
      <div className="stars-container">
        {stars}
      </div>
      {reviewCount !== undefined && (
        <span className="review-count">({reviewCount})</span>
      )}

      <style jsx>{`
        .rating-stars {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .stars-container {
          display: flex;
          color: #ddd; /* Gray for empty stars */
        }

        .star {
          font-size: 1.2rem;
        }

        .star.full {
          color: var(--yellow-accent);
        }

        .star.half {
          position: relative;
          color: #ddd;
        }

        .star.half::before {
          content: '★';
          position: absolute;
          left: 0;
          width: 50%;
          overflow: hidden;
          color: var(--yellow-accent);
        }

        .rating-stars.small .star { font-size: 0.9rem; }
        .rating-stars.medium .star { font-size: 1.1rem; }
        .rating-stars.large .star { font-size: 1.4rem; }

        .review-count {
          font-size: var(--caption-size);
          color: var(--text-dark);
          opacity: 0.7;
        }

        .interactive .star {
          cursor: pointer;
        }

        .interactive .star:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default RatingStars;
