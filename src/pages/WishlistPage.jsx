import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useListings } from '../hooks/useListings';
import ListingCard from '../components/Home/ListingCard';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { listings } = useListings();

  const wishlistItems = listings.filter(l => wishlist.includes(l.id));

  return (
    <div className="wishlist-page" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Your Wishlist</h1>
      
      {wishlistItems.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {wishlistItems.map(item => (
            <ListingCard 
              key={item.id} 
              listing={item} 
              onRemove={removeFromWishlist}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h3>Your wishlist is empty</h3>
          <p>Create your first wishlist as you search for your next trip.</p>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
