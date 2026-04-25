import React from 'react';
import { useFilters } from '../context/FilterContext';
import FilterPanel from '../components/Home/FilterPanel';
import ListingCard from '../components/Home/ListingCard';

const SearchPage = () => {
  const { filteredListings } = useFilters();

  return (
    <div className="search-page" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem' }}>
        <aside>
          <FilterPanel />
        </aside>
        <main>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>{filteredListings?.length || 0} homes found</h2>
            <div className="sort-options">
              <select style={{ padding: '0.5rem', borderRadius: '8px', borderColor: 'var(--light-gray)' }}>
                <option>Price (low-high)</option>
                <option>Rating (high-low)</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {filteredListings?.length > 0 ? (
              filteredListings.map(item => (
                <ListingCard key={item.id} listing={item} />
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 0', gridColumn: 'span 3' }}>
                <h3>No results found</h3>
                <p>Try adjusting your filters or searching for something else.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
