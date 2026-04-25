import React from 'react';

const ListingDetails = ({ listing }) => {
  return (
    <div className="listing-details">
      <section className="listing-info">
        <h1>{listing.title}</h1>
        <div className="listing-meta">
          <span>{listing.rating} stars</span> • <span>{listing.reviews?.length || 0} reviews</span> • <span>{listing.location}</span>
        </div>
      </section>

      <hr style={{ margin: '2rem 0', borderColor: 'var(--light-gray)' }} />

      <section className="host-info">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="host-avatar" style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--dark-green)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {listing.host?.name?.[0] || 'H'}
          </div>
          <div>
            <h3>Hosted by {listing.host?.name || 'Host'}</h3>
            <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Joined in {listing.host?.joinedDate || '2022'}</p>
          </div>
        </div>
      </section>

      <hr style={{ margin: '2rem 0', borderColor: 'var(--light-gray)' }} />

      <section className="listing-description">
        <div className="listing-specs" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontWeight: '500' }}>
          <span>{listing.guests} guests</span> • <span>{listing.bedrooms} bedrooms</span> • <span>{listing.beds} beds</span> • <span>{listing.bathrooms} bath</span>
        </div>
        <p style={{ lineHeight: '1.6' }}>{listing.description}</p>
      </section>

      <hr style={{ margin: '2rem 0', borderColor: 'var(--light-gray)' }} />

      <section className="amenities">
        <h2>What this place offers</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
          {listing.amenities?.map((amenity, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>✓</span> {amenity}
            </li>
          )) || <li>No amenities listed</li>}
        </ul>
      </section>
    </div>
  );
};

export default ListingDetails;
