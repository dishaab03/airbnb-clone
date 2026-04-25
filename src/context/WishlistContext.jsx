import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('nestaway_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('nestaway_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (listingId) => {
    if (!wishlist.includes(listingId)) {
      setWishlist(prev => [...prev, listingId]);
    }
  };

  const removeFromWishlist = (listingId) => {
    setWishlist(prev => prev.filter(id => id !== listingId));
  };

  const isInWishlist = (listingId) => wishlist.includes(listingId);

  const toggleWishlist = (listingId) => {
    if (isInWishlist(listingId)) {
      removeFromWishlist(listingId);
    } else {
      addToWishlist(listingId);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
