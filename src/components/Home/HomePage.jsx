import React from 'react';
import FilterPanel from './FilterPanel';
import ListingCard from './ListingCard';
import { useFilters } from '../../hooks/useFilters';
import { useWishlist } from '../../hooks/useWishlist';
import '../../styles/global.css';

const HomePage = () => {
  const { filteredListings, loading, filters, applyFilter, resetFilters } = useFilters();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [visibleCount, setVisibleCount] = React.useState(8);

  const handleFilterChange = (typeId) => {
    applyFilter('propertyType', typeId);
    setVisibleCount(8); // Reset count when filter changes
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const [showModal, setShowModal] = React.useState(true);

  if (loading) {
    return (
      <div className="loading-container flex-center">
        <div className="loader"></div>
        <style jsx>{`
          .loading-container { height: 100vh; }
          .loader { width: 48px; height: 48px; border: 5px solid var(--border-light); border-bottom-color: var(--primary-color); border-radius: 50%; animation: rotation 1s linear infinite; }
          @keyframes rotation { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  const visibleListings = filteredListings.slice(0, visibleCount);

  return (
    <div className="home-page fade-in">
      {showModal && (
        <div className="modal-overlay flex-center" onClick={() => setShowModal(false)}>
          <div className="promo-modal fade-in" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}>✕</button>
            <div className="modal-image">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" alt="Summer trip" />
            </div>
            <div className="modal-content">
              <h2>Save 10% on a summertime trip</h2>
              <p>Book within 7 days and save up to ₹2,000 on your next stay. <a href="#">Terms apply</a></p>
              <button className="btn-primary modal-btn" onClick={() => setShowModal(false)}>Explore deals</button>
            </div>
          </div>
        </div>
      )}

      <FilterPanel 
        activeFilter={filters.propertyType} 
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />

      <section className="listings-grid-section container">
        {visibleListings.length > 0 ? (
          <div className="grid-auto">
            {visibleListings.map((listing) => (
              <ListingCard 
                key={listing.id} 
                {...listing} 
                isFavorite={isInWishlist(listing.id)}
                onWishlistToggle={toggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="no-results flex-center">
            <p>No listings found. Try adjusting your filters!</p>
          </div>
        )}

        {filteredListings.length > visibleCount && (
          <div className="footer-info container">
            <p>Continue exploring amazing places</p>
            <button className="btn-primary" onClick={handleShowMore}>Show more</button>
          </div>
        )}
      </section>

      <style jsx>{`
        .home-page {
          padding-bottom: 64px;
        }

        .listings-grid-section {
          padding-top: 24px;
        }

        .no-results {
          padding: 80px 0;
          color: var(--text-light);
        }

        .footer-info {
          margin-top: 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .footer-info p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2000;
        }

        .promo-modal {
          background: white;
          width: 90%;
          max-width: 568px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 28px rgba(0,0,0,0.28);
        }

        .close-modal {
          position: absolute;
          top: 16px;
          left: 16px;
          background: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 14px;
          z-index: 10;
        }

        .modal-image {
          height: 300px;
          width: 100%;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-content {
          padding: 32px;
          text-align: center;
        }

        .modal-content h2 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .modal-content p {
          color: var(--text-medium);
          margin-bottom: 24px;
          font-size: 16px;
        }

        .modal-btn {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          background-color: var(--primary-color);
          color: white;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
