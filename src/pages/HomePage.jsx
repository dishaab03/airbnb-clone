import React from 'react';
import { useListings } from '../hooks/useListings';
import ListingCard from '../components/Home/ListingCard';

const HomePage = () => {
  const { listings } = useListings();

  return (
    <div className="home-page" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem' }}>
      <section className="hero" style={{ padding: '4rem 2rem', background: 'var(--dark-green)', color: 'white', borderRadius: '16px', textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find your next adventure</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>Explore unique stays in breathtaking locations.</p>
      </section>

      <section className="listings-grid">
        <h2 style={{ marginBottom: '1.5rem' }}>Popular Destinations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {listings.length > 0 ? (
            listings.map(item => (
              <ListingCard key={item.id} listing={item} />
            ))
          ) : (
            <p>No listings available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
