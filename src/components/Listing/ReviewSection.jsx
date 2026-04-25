import React from 'react';

const ReviewSection = ({ listing }) => {
  return (
    <section className="review-section" style={{ padding: '2rem 1rem' }}>
      <div className="review-header" style={{ marginBottom: '2rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>★</span> {listing.rating} • {listing.reviews?.length || 0} reviews
        </h2>
      </div>

      <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {listing.reviews?.length > 0 ? (
          listing.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee' }}></div>
                <div>
                  <h4 style={{ margin: 0 }}>{review.userName}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--gray)' }}>{review.date}</p>
                </div>
              </div>
              <p style={{ lineHeight: '1.5' }}>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet for this listing.</p>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
