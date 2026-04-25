import React, { createContext, useContext, useState, useEffect } from 'react';

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('http://localhost:3001/listings');
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error('Failed to fetch listings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  return (
    <ListingsContext.Provider value={{ listings, loading, setListings }}>
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => useContext(ListingsContext);
