import React, { createContext, useState, useEffect } from 'react';

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/listings');
      if (!response.ok) throw new Error('Failed to fetch listings');
      const data = await response.json();
      setListings(data);
    } catch (err) {
      console.error('Failed to fetch listings', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const getListingById = (id) => listings.find(l => l.id === id.toString());

  const searchListings = (query) => {
    if (!query) return listings;
    const lowerQuery = query.toLowerCase();
    return listings.filter(l => 
      l.title.toLowerCase().includes(lowerQuery) || 
      l.location.toLowerCase().includes(lowerQuery) ||
      l.type.toLowerCase().includes(lowerQuery)
    );
  };

  return (
    <ListingsContext.Provider value={{ listings, loading, error, getListingById, searchListings, refreshListings: fetchListings }}>
      {children}
    </ListingsContext.Provider>
  );
};
