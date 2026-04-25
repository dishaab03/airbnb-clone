import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { useListings } from '../hooks/useListings';

const BookingConfirmation = () => {
  const { bookingId } = useParams();
  const { getBookingById } = useBooking();
  const { listings } = useListings();
  const [booking, setBooking] = useState(null);
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const b = getBookingById(bookingId);
    if (b) {
      setBooking(b);
      const l = listings.find(item => item.id === b.listingId);
      if (l) setListing(l);
    }
  }, [bookingId, getBookingById, listings]);

  if (!booking || !listing) return <div style={{ padding: '2rem', textAlign: 'center' }}>Finding your booking details...</div>;

  return (
    <div className="confirmation-page" style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', color: 'var(--dark-green)', marginBottom: '1rem' }}>✓</div>
      <h1 style={{ color: 'var(--dark-green)', marginBottom: '0.5rem' }}>Booking Confirmed!</h1>
      <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>You're all set for your trip to {listing.location}.</p>

      <div style={{ textAlign: 'left', background: 'var(--ivory)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ marginTop: 0 }}>Reservation Details</h3>
        <p><strong>Confirmation #:</strong> {booking.id.toUpperCase()}</p>
        <p><strong>Listing:</strong> {listing.title}</p>
        <p><strong>Check-in:</strong> {booking.checkIn}</p>
        <p><strong>Check-out:</strong> {booking.checkOut}</p>
        <p><strong>Guests:</strong> {booking.guests}</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--dark-green)', marginTop: '1rem' }}>
          Total Paid: ₹{booking.pricing?.total}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link to="/profile" style={{ backgroundColor: 'var(--dark-green)', color: 'white', padding: '1rem', borderRadius: '8px', fontWeight: '500' }}>
          View My Bookings
        </Link>
        <Link to="/" style={{ color: 'var(--dark-green)', fontWeight: '500' }}>
          Continue Browsing
        </Link>
      </div>
      
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--gray)' }}>
        A confirmation email has been sent to {booking.email}
      </p>
    </div>
  );
};

export default BookingConfirmation;
