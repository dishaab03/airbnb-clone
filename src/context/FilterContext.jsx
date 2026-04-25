import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    location: '',
    priceMin: 0,
    priceMax: 50000,
    propertyType: 'all',
    amenities: [],
    minRating: 0,
    guests: 1,
    checkIn: null,
    checkOut: null
  });

  const applyFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      priceMin: 0,
      priceMax: 50000,
      propertyType: 'all',
      amenities: [],
      minRating: 0,
      guests: 1,
      checkIn: null,
      checkOut: null
    });
  };

  const getFilteredListings = (allListings) => {
    return allListings.filter(listing => {
      // Property Type filter
      if (filters.propertyType !== 'all' && listing.type !== filters.propertyType) return false;
      
      // Location filter (substring match)
      if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      
      // Guests filter
      if (listing.guests < filters.guests) return false;
      
      // Price range
      if (listing.price < filters.priceMin || listing.price > filters.priceMax) return false;
      
      // Rating
      if (listing.rating < filters.minRating) return false;

      return true;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, applyFilter, resetFilters, getFilteredListings }}>
      {children}
    </FilterContext.Provider>
  );
};
