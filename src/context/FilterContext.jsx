import React, { createContext, useContext, useState } from 'react';

import { useListings } from './ListingsContext';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { listings } = useListings();
  const [filters, setFilters] = useState({});
  
  // Basic filtering logic for now
  const filteredListings = listings;

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredListings }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
