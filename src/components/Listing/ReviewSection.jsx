import React from 'react';
import RatingStars from '../Common/RatingStars';

const ReviewSection = ({ rating, reviewCount }) => {
  // Mock reviews
  const mockReviews = [
    { id: 1, name: 'Amit', date: 'March 2024', comment: 'Absolutely amazing stay! The views are even better than the pictures.', avatar: 'https://i.pravatar.cc/150?u=amit' },
    { id: 2, name: 'Sarah', date: 'February 2024', comment: 'Great location and very responsive host. Highly recommend for a peaceful getaway.', avatar: 'https://i.pravatar.cc/150?u=sarah' }
  ];

  return (
    <div className="review-section">
      <div className="review-header">
        <RatingStars rating={rating} reviewCount={reviewCount} size="large" />
      </div>

      <div className="reviews-grid">
        {mockReviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="user-info">
              <img src={review.avatar} alt={review.name} className="user-avatar" />
              <div>
                <h4 className="user-name">{review.name}</h4>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .review-section {
          padding: var(--space-6) 0;
          border-top: 1px solid var(--border-light);
        }

        .review-header {
          margin-bottom: var(--space-6);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-6);
        }

        .review-card {
          margin-bottom: var(--space-4);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .user-name {
          font-size: 1rem;
          font-weight: 700;
        }

        .review-date {
          font-size: 0.85rem;
          color: #666;
        }

        .review-comment {
          line-height: 1.6;
          color: var(--text-dark);
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewSection;
