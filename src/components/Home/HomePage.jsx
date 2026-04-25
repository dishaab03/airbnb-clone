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
      `}</style>
    </div>
  );
};

export default HomePage;
