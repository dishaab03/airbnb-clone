import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ListingCard from '../components/Home/ListingCard';
import { useFilters } from '../hooks/useFilters';
import { useWishlist } from '../hooks/useWishlist';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { filteredListings, loading, applyFilter } = useFilters();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Extract parameters from URL
  const location = searchParams.get('location') || '';
  const guests = parseInt(searchParams.get('guests')) || 1;
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';

  useEffect(() => {
    // Apply filters from search params
    applyFilter('location', location);
    applyFilter('guests', guests);
    applyFilter('checkIn', checkIn);
    applyFilter('checkOut', checkOut);
  }, [location, guests, checkIn, checkOut, applyFilter]);

  if (loading) {
    return (
      <Layout>
        <div className="loading-container flex-center">
          <div className="loader"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="search-results-page container fade-in">
        <header className="search-header">
          <h1>Search Results</h1>
          <p className="results-count">
            {filteredListings.length} {filteredListings.length === 1 ? 'place' : 'places'} found 
            {location && ` in ${location}`}
          </p>
        </header>

        {filteredListings.length > 0 ? (
          <div className="grid-auto">
            {filteredListings.map((listing) => (
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
            <div className="no-results-content">
              <span className="no-results-icon">🔍</span>
              <h2>No matches found</h2>
              <p>Try adjusting your search filters to find what you're looking for.</p>
              <button 
                className="btn-secondary" 
                onClick={() => window.location.href = '/'}
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          .search-results-page {
            padding-top: 32px;
            padding-bottom: 64px;
          }

          .search-header {
            margin-bottom: 32px;
          }

          .search-header h1 {
            font-size: 2rem;
            margin-bottom: 8px;
          }

          .results-count {
            color: var(--text-medium);
            font-size: 1rem;
          }

          .no-results {
            padding: 100px 0;
            text-align: center;
          }

          .no-results-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 16px;
          }

          .no-results-content h2 {
            margin-bottom: 8px;
          }

          .no-results-content p {
            color: var(--text-medium);
            margin-bottom: 24px;
          }

          .loading-container { height: 60vh; }
          .loader { width: 48px; height: 48px; border: 5px solid var(--border-light); border-bottom-color: var(--primary-color); border-radius: 50%; animation: rotation 1s linear infinite; }
          @keyframes rotation { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </div>
    </Layout>
  );
};

export default SearchPage;
