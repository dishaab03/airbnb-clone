import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useListings } from '../hooks/useListings';
import ImageGallery from '../components/Listing/ImageGallery';
import ListingDetails from '../components/Listing/ListingDetails';
import BookingPanel from '../components/Listing/BookingPanel';
import ReviewSection from '../components/Listing/ReviewSection';

const ListingPage = () => {
  const { id } = useParams();
  const { listings, loading } = useListings();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // In a real app, useListings might have a getListingById(id)
    // For now we filter from listings array
    const found = listings.find(l => l.id === id);
    if (found) {
      setListing(found);
      document.title = `${found.title} - Airbnb Clone`;
    }
    window.scrollTo(0, 0);
  }, [id, listings]);

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  if (!listing) return <div style={{ padding: '2rem', textAlign: 'center' }}>Listing not found.</div>;

  return (
    <div className="listing-page" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{listing.title}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', textDecoration: 'underline', fontWeight: '500' }}>
            <span>★ {listing.rating}</span>
            <span>{listing.reviews?.length || 0} reviews</span>
            <span>{listing.location}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontSize: '0.9rem' }}>Share</button>
            <button style={{ background: 'none', border: 'none', textDecoration: 'underline', fontSize: '0.9rem' }}>Save</button>
          </div>
        </div>
      </header>

      <ImageGallery images={listing.images} title={listing.title} />

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '5rem', marginTop: '2rem' }}>
        <div className="listing-main-content">
          <ListingDetails listing={listing} />
        </div>
        <aside className="listing-sidebar">
          <BookingPanel listing={listing} />
        </aside>
      </div>

      <hr style={{ margin: '3rem 0', borderColor: 'var(--light-gray)' }} />
      
      <ReviewSection listing={listing} />
    </div>
  );
};

export default ListingPage;
