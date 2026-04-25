import React, { useState } from 'react';
import { useBooking } from '../../hooks/useBooking';
import { calculateNights, calculateServiceFee } from '../../utils/PriceUtils';

const BookingPanel = ({ listing }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const { createBooking } = useBooking();
  const [isBooked, setIsBooked] = useState(false);

  const nights = calculateNights(checkIn, checkOut);
  const subtotal = listing.price * nights;
  const serviceFee = calculateServiceFee(subtotal);
  const total = subtotal + serviceFee;

  const handleBooking = async () => {
    if (!checkIn || !checkOut) return;
    try {
      await createBooking({ listingId: listing.id, checkIn, checkOut, guests, totalPrice: total });
      setIsBooked(true);
    } catch (err) {
      alert('Booking failed');
    }
  };

  if (isBooked) {
    return (
      <div className="booking-panel success fade-in">
        <h3>Reserved successfully!</h3>
        <p>Your stay at {listing.title} is confirmed.</p>
        <button className="btn-primary" onClick={() => setIsBooked(false)}>Close</button>
        <style jsx>{`
          .booking-panel.success { padding: 32px; text-align: center; border: 1px solid var(--border-medium); border-radius: 12px; box-shadow: var(--shadow-strong); }
          h3 { color: var(--primary-color); margin-bottom: 12px; }
          p { margin-bottom: 24px; color: var(--text-medium); }
        `}</style>
      </div>
    );
  }

  return (
    <div className="booking-panel shadow-strong">
      <div className="panel-header">
        <span className="price">₹{listing.price.toLocaleString()}</span>
        <span className="unit"> night</span>
      </div>

      <div className="booking-form">
        <div className="date-inputs">
          <div className="input-box">
            <label>CHECK-IN</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="input-box">
            <label>CHECKOUT</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>
        <div className="guest-input input-box">
          <label>GUESTS</label>
          <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))}>
            {[...Array(listing.guests || 4)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1} guest{i > 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn-primary reserve-btn" onClick={handleBooking}>Reserve</button>
      
      <p className="no-charge">You won't be charged yet</p>

      {nights > 0 && (
        <div className="price-breakdown">
          <div className="price-row">
            <span>₹{listing.price.toLocaleString()} x {nights} nights</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="price-row">
            <span>Airbnb service fee</span>
            <span>₹{serviceFee.toLocaleString()}</span>
          </div>
          <hr />
          <div className="price-row total">
            <span>Total before taxes</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .booking-panel {
          position: sticky;
          top: 100px;
          background-color: white;
          border: 1px solid var(--border-medium);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .panel-header { margin-bottom: 24px; }
        .price { font-size: 1.4rem; font-weight: 700; color: var(--text-dark); }
        .unit { font-size: 1rem; color: var(--text-medium); font-weight: 400; }

        .booking-form { border: 1px solid var(--text-light); border-radius: 8px; margin-bottom: 16px; overflow: hidden; }
        .date-inputs { display: flex; border-bottom: 1px solid var(--text-light); }
        .input-box { flex: 1; padding: 10px 12px; }
        .date-inputs .input-box:first-child { border-right: 1px solid var(--text-light); }
        label { display: block; font-size: 0.65rem; font-weight: 800; color: var(--text-dark); margin-bottom: 4px; }
        input, select { border: none; outline: none; width: 100%; font-size: 0.9rem; color: var(--text-medium); background: transparent; }

        .reserve-btn { width: 100%; padding: 14px; font-size: 1rem; font-weight: 700; margin-bottom: 12px; }
        .no-charge { text-align: center; font-size: 0.85rem; color: var(--text-medium); margin-bottom: 24px; }

        .price-breakdown { display: flex; flex-direction: column; gap: 12px; }
        .price-row { display: flex; justify-content: space-between; font-size: 1rem; color: var(--text-medium); }
        .price-row span:first-child { text-decoration: underline; }
        .total { font-weight: 700; color: var(--text-dark); }
        .total span:first-child { text-decoration: none; }
        hr { border: none; border-top: 1px solid var(--border-medium); margin: 8px 0; }
        .fade-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default BookingPanel;
