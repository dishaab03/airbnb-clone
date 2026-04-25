import React from 'react';

const BookingSummary = ({ listing, checkIn, checkOut, guests, pricing }) => {
  return (
    <div className="booking-summary" style={{ border: '1px solid var(--light-gray)', borderRadius: '12px', padding: '1.5rem', background: 'white' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <img src={listing.images?.[0]} alt={listing.title} style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }} />
        <div>
          <h4 style={{ margin: '0 0 0.5rem 0' }}>{listing.title}</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>★ {listing.rating} ({listing.reviews?.length || 0} reviews)</p>
        </div>
      </div>

      <hr style={{ margin: '1.5rem 0', borderColor: 'var(--light-gray)' }} />

      <div style={{ marginBottom: '1.5rem' }}>
        <h3>Price details</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>₹{listing.pricePerNight} x {pricing.nights} nights</span>
            <span>₹{pricing.subtotal}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Service fee</span>
            <span>₹{pricing.serviceFee}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Taxes</span>
            <span>₹{pricing.taxes}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem' }}>
            <span>Total (INR)</span>
            <span>₹{pricing.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
