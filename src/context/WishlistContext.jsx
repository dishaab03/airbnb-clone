import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Initialize from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('airbnb_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('airbnb_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (listingId) => {
    if (!wishlist.includes(listingId)) {
      setWishlist(prev => [...prev, listingId]);
    }
  };

  const removeFromWishlist = (listingId) => {
    setWishlist(prev => prev.filter(id => id !== listingId));
  };

  const toggleWishlist = (listingId) => {
    if (wishlist.includes(listingId)) {
      removeFromWishlist(listingId);
    } else {
      addToWishlist(listingId);
    }
  };

  const isInWishlist = (listingId) => wishlist.includes(listingId);

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist, 
      toggleWishlist, 
      isInWishlist,
      count: wishlist.length 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
