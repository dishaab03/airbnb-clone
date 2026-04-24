import React, { createContext, useState, useEffect } from 'react';
import { calculateTotal, calculateNights } from '../utils/PriceUtils';
import { isPastDate, isOverlapping } from '../utils/DateUtils';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserBookings = async (userId = 'user1') => {
    try {
      const response = await fetch(`http://localhost:3001/bookings?userId=${userId}`);
      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error('Failed to fetch bookings', err);
    }
  };

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const createBooking = async (listing, checkIn, checkOut, guests, userId = 'user1') => {
    // 1. Validation
    if (!checkIn || !checkOut) throw new Error('Please select dates');
    if (new Date(checkOut) <= new Date(checkIn)) throw new Error('Check-out must be after check-in');
    if (isPastDate(checkIn)) throw new Error('Cannot book dates in the past');
    if (guests > listing.guests) throw new Error(`Maximum guests for this listing is ${listing.guests}`);
    
    const nights = calculateNights(checkIn, checkOut);
    if (nights < 1) throw new Error('Minimum 1 night required');
    if (nights > 90) throw new Error('Maximum 90 nights allowed');

    // 2. Check for date conflicts (mock logic)
    const listingBookings = bookings.filter(b => b.listingId === listing.id);
    const hasConflict = listingBookings.some(b => 
      isOverlapping(checkIn, checkOut, b.checkInDate, b.checkOutDate)
    );
    if (hasConflict) throw new Error('These dates are already booked');

    // 3. Calculate Price
    const priceDetails = calculateTotal(listing.pricePerNight, checkIn, checkOut);

    const newBooking = {
      id: `booking-${Date.now()}`,
      listingId: listing.id,
      userId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests,
      nights: priceDetails.nights,
      subtotal: priceDetails.subtotal,
      discountAmount: priceDetails.discountAmount,
      serviceFee: priceDetails.serviceFee,
      tax: priceDetails.tax,
      totalPrice: priceDetails.total,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking)
      });
      
      if (!response.ok) throw new Error('Failed to save booking');
      
      const savedBooking = await response.json();
      setBookings(prev => [...prev, savedBooking]);
      setCurrentBooking(savedBooking);
      return savedBooking;
    } catch (err) {
      console.error('Booking failed', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:3001/bookings/${bookingId}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to cancel booking');
      setBookings(prev => prev.filter(b => b.id !== bookingId));
    } catch (err) {
      console.error('Cancellation failed', err);
      throw err;
    }
  };

  const getBookingById = (id) => bookings.find(b => b.id === id);

  return (
    <BookingContext.Provider value={{ 
      bookings, 
      currentBooking, 
      loading, 
      createBooking, 
      cancelBooking, 
      getBookingById,
      setCurrentBooking 
    }}>
      {children}
    </BookingContext.Provider>
  );
};
