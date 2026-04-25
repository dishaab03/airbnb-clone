import React from 'react';
import { useBooking } from '../context/BookingContext';

const ProfilePage = () => {
  const { bookings } = useBooking();

  return (
    <div className="profile-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>My Account</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>My Bookings</h2>
        {bookings.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {bookings.map(booking => (
              <div key={booking.id} style={{ border: '1px solid var(--light-gray)', padding: '1rem', borderRadius: '8px' }}>
                <p><strong>Booking ID:</strong> {booking.id}</p>
                <p><strong>Dates:</strong> {booking.checkIn} to {booking.checkOut}</p>
                <p><strong>Total Paid:</strong> ₹{booking.pricing?.total}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>You have no bookings yet.</p>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
