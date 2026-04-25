import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing, onRemove }) => {
  return (
    <div className="listing-card" style={{ position: 'relative', border: '1px solid var(--light-gray)', borderRadius: '12px', overflow: 'hidden', background: 'white' }}>
      <Link to={`/listing/${listing.id}`}>
        <img src={listing.images?.[0]} alt={listing.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <div style={{ padding: '1rem' }}>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>{listing.title}</h4>
          <p style={{ margin: 0, color: 'var(--gray)', fontSize: '0.9rem' }}>{listing.location}</p>
          <p style={{ margin: '0.5rem 0 0 0', fontWeight: 'bold' }}>₹{listing.pricePerNight} / night</p>
        </div>
      </Link>
      {onRemove && (
        <button 
          onClick={(e) => { e.preventDefault(); onRemove(listing.id); }}
          style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer' }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default ListingCard;
