import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    location: '',
    priceMin: 0,
    priceMax: 50000,
    propertyType: [], // Array of types
    amenities: [], // Array of amenities
    minRating: 0,
    guests: 1,
    checkIn: null,
    checkOut: null
  });

  const applyFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      priceMin: 0,
      priceMax: 50000,
      propertyType: [],
      amenities: [],
      minRating: 0,
      guests: 1,
      checkIn: null,
      checkOut: null
    });
  };

  const getFilteredListings = (allListings) => {
    return allListings.filter(listing => {
      // 1. Location filter (substring match)
      if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // 2. Price filter (inclusive range)
      if (listing.pricePerNight < filters.priceMin || listing.pricePerNight > filters.priceMax) {
        return false;
      }

      // 3. Property Type filter (multiple selection - OR logic for the types themselves)
      if (filters.propertyType.length > 0 && !filters.propertyType.includes(listing.type)) {
        return false;
      }

      // 4. Amenities filter (multiple selection - AND logic: must have ALL selected)
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity => 
          listing.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      // 5. Min Rating filter
      if (listing.rating < filters.minRating) {
        return false;
      }

      // 6. Guest capacity filter
      if (listing.guests < filters.guests) {
        return false;
      }

      // 7. Dates availability (if provided)
      // Note: This logic assumes 'availability' in listing is an array of objects {date, available}
      // or we check against current bookings. For now, we'll check listing.availability if it exists.
      if (filters.checkIn && filters.checkOut) {
        // Simple mock check: if listing has availability array, check if all dates in range are 'available: true'
        // If availability is empty, assume available (for demo purposes)
        if (listing.availability && listing.availability.length > 0) {
          // implementation of date check would go here
          // For now, let's keep it simple as specified in requirements
        }
      }

      return true;
    });
  };

  return (
    <FilterContext.Provider value={{ filters, applyFilter, resetFilters, getFilteredListings }}>
      {children}
    </FilterContext.Provider>
  );
};
