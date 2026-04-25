import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [lastBooking, setLastBooking] = useState(null);

  const createBooking = async (bookingData) => {
    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          id: `booking_${Date.now()}`,
          status: 'confirmed',
          createdAt: new Date().toISOString()
        })
      });
      const data = await response.json();
      setBookings(prev => [...prev, data]);
      setLastBooking(data);
      return data;
    } catch (err) {
      console.error('Booking failed:', err);
      throw err;
    }
  };

  return (
    <BookingContext.Provider value={{ bookings, lastBooking, createBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
