import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import './BookingPanel.css';

const BookingPanel = ({ listing }) => {
  const navigate = useNavigate();
  const { calculatePrice, createBooking } = useBooking();
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [pricing, setPricing] = useState({ subtotal: 0, taxes: 0, serviceFee: 0, total: 0 });

  useEffect(() => {
    if (checkIn && checkOut) {
      const p = calculatePrice(listing.pricePerNight, checkIn, checkOut, guests);
      setPricing(p);
    }
  }, [checkIn, checkOut, guests, listing.pricePerNight, calculatePrice]);

  const handleReserve = async () => {
    if (!checkIn || !checkOut) {
      alert('Please select dates');
      return;
    }
    
    // In a real app, we'd call createBooking or just navigate to the booking flow
    // The prompt says: "On click: Validate dates, call useBooking().createBooking(), redirect to /booking/confirmation/:bookingId"
    // But it also says "/listing/:id/book" is a multi-step flow.
    // I'll follow the "redirect to /booking/confirmation" for simplicity in this component or navigate to flow.
    // Let's navigate to the flow first as per the flow description.
    navigate(`/listing/${listing.id}/book`, { state: { checkIn, checkOut, guests } });
  };

  return (
    <div className="booking-panel">
      <div className="panel-header">
        <span className="price">₹{listing.pricePerNight}</span> <span className="night">night</span>
      </div>

      <div className="booking-form">
        <div className="date-inputs">
          <div className="date-input">
            <label>CHECK-IN</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div className="date-input">
            <label>CHECKOUT</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>
        <div className="guest-input">
          <label>GUESTS</label>
          <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
            {[...Array(listing.guests || 1)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} guest{i > 0 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <button className="reserve-btn" onClick={handleReserve} disabled={!checkIn || !checkOut}>
          Reserve
        </button>

        <p className="no-charge">You won't be charged yet</p>

        {checkIn && checkOut && (
          <div className="price-breakdown">
            <div className="price-row">
              <span>₹{listing.pricePerNight} x {pricing.nights || 0} nights</span>
              <span>₹{pricing.subtotal || 0}</span>
            </div>
            <div className="price-row">
              <span>Service fee</span>
              <span>₹{pricing.serviceFee || 0}</span>
            </div>
            <div className="price-row">
              <span>Taxes</span>
              <span>₹{pricing.taxes || 0}</span>
            </div>
            <hr />
            <div className="price-row total">
              <span>Total</span>
              <span>₹{pricing.total || 0}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPanel;
