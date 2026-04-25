import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ImageGallery from '../components/Listing/ImageGallery';
import BookingPanel from '../components/Listing/BookingPanel';
import ReviewSection from '../components/Listing/ReviewSection';
import { useListings } from '../hooks/useListings';

const ListingPage = () => {
  const { id } = useParams();
  const { getListingById, loading } = useListings();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    if (!loading) {
      const data = getListingById(id);
      setListing(data);
      window.scrollTo(0, 0);
    }
  }, [id, getListingById, loading]);

  if (loading || !listing) {
    return (
      <Layout>
        <div className="container flex-center" style={{ height: '50vh' }}>
          <div className="loader"></div>
        </div>
        <style jsx>{`
          .loader { width: 48px; height: 48px; border: 5px solid var(--border-light); border-bottom-color: var(--primary-dark-green); border-radius: 50%; animation: rotation 1s linear infinite; }
          @keyframes rotation { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="listing-page container fade-in">
        <header className="listing-header">
          <h1>{listing.title}</h1>
          <div className="listing-sub-header">
            <span className="rating">⭐ {listing.rating}</span>
            <span className="dot">·</span>
            <span className="reviews">{listing.reviewCount} reviews</span>
            <span className="dot">·</span>
            <span className="location">{listing.location}</span>
          </div>
        </header>

        <ImageGallery images={listing.images || [listing.image]} />

        <div className="listing-main-content">
          <div className="listing-details">
            <div className="host-info section">
              <div className="host-text">
                <h3>Hosted by {listing.host?.name || 'Local Host'}</h3>
                <p>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} bathrooms</p>
              </div>
              <img src={listing.host?.avatar} alt="Host" className="host-avatar" />
            </div>

            <hr className="divider" />

            <div className="description section">
              <p>{listing.description}</p>
            </div>

            <hr className="divider" />

            <div className="amenities section">
              <h3>What this place offers</h3>
              <div className="amenities-grid">
                {listing.amenities?.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span>✨ {amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="booking-sidebar">
            <BookingPanel listing={listing} />
          </aside>
        </div>

        <ReviewSection rating={listing.rating} reviewCount={listing.reviewCount} />
      </div>

      <style jsx>{`
        .listing-page {
          padding-top: var(--space-6);
          padding-bottom: var(--space-7);
        }

        .listing-header h1 {
          font-size: 1.6rem;
          margin-bottom: var(--space-2);
        }

        .listing-sub-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: var(--space-5);
        }

        .dot { font-weight: normal; color: #666; }
        .location { text-decoration: underline; cursor: pointer; }

        .listing-main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--space-7);
          margin-bottom: var(--space-7);
        }

        .section {
          padding: var(--space-6) 0;
        }

        .host-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .host-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
        }

        .host-text p {
          color: #666;
          margin-top: 4px;
        }

        .description p {
          line-height: 1.6;
          color: var(--text-dark);
          font-size: 1.05rem;
        }

        .amenities h3 {
          margin-bottom: var(--space-4);
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        .divider {
          border: none;
          border-top: 1px solid var(--border-light);
        }

        .fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 768px) {
          .listing-main-content {
            grid-template-columns: 1fr;
          }
          
          .booking-sidebar {
            order: -1;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ListingPage;
