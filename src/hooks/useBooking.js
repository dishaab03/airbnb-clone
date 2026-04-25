import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { calculateTotal } from '../utils/PriceUtils';

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }

  const { 
    bookings, 
    currentBooking, 
    loading, 
    createBooking, 
    cancelBooking, 
    getBookingById,
    setCurrentBooking 
  } = context;

  const getPriceBreakdown = (pricePerNight, checkIn, checkOut) => {
    return calculateTotal(pricePerNight, checkIn, checkOut);
  };

  return {
    bookings,
    currentBooking,
    loading,
    createBooking,
    cancelBooking,
    getBookingById,
    getPriceBreakdown,
    setCurrentBooking
  };
};
