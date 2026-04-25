import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const createBooking = async (bookingData) => {
    // mock logic
    const id = Math.random().toString(36).substr(2, 9);
    const newBooking = { ...bookingData, id };
    setBookings([...bookings, newBooking]);
    return newBooking;
  };
  const getBookingById = (id) => bookings.find(b => b.id === id);
  const calculatePrice = (pricePerNight, checkIn, checkOut, guests) => {
    if (!checkIn || !checkOut) return { subtotal: 0, taxes: 0, serviceFee: 0, total: 0, nights: 0 };
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end - start);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) return { subtotal: 0, taxes: 0, serviceFee: 0, total: 0, nights: 0 };
    
    const subtotal = pricePerNight * nights;
    const serviceFee = Math.round(subtotal * 0.1);
    const taxes = Math.round(subtotal * 0.05);
    const total = subtotal + serviceFee + taxes;
    
    return { subtotal, serviceFee, taxes, total, nights };
  };

  return (
    <BookingContext.Provider value={{ bookings, createBooking, getBookingById, calculatePrice }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
