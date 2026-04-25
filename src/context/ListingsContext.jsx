import React, { createContext, useState, useEffect } from 'react';

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    try {
      const response = await fetch('http://localhost:3001/listings');
      const data = await response.json();
      setListings(data);
    } catch (err) {
      console.error('Failed to fetch listings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const getListingById = (id) => listings.find(l => l.id === id);

  return (
    <ListingsContext.Provider value={{ listings, loading, getListingById, fetchListings }}>
      {children}
    </ListingsContext.Provider>
  );
};
