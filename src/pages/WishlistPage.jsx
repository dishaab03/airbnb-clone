import React from 'react';
import Layout from '../components/Layout/Layout';
import ListingCard from '../components/Home/ListingCard';
import { useWishlist } from '../hooks/useWishlist';
import { useListings } from '../hooks/useListings';
import '../styles/global.css';

const WishlistPage = () => {
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();
  const { listings, loading } = useListings();

  const favoriteListings = listings.filter(listing => wishlist.includes(listing.id));

  if (loading) {
    return (
      <Layout>
        <div className="container flex-center" style={{ height: '50vh' }}>
          <div className="loader"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="wishlist-page container fade-in">
        <header className="page-header">
          <h1>Wishlists</h1>
        </header>

        {favoriteListings.length > 0 ? (
          <div className="grid-auto">
            {favoriteListings.map((listing) => (
              <ListingCard 
                key={listing.id} 
                {...listing} 
                isFavorite={isInWishlist(listing.id)}
                onWishlistToggle={toggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="empty-wishlist flex-center">
            <div className="empty-content">
              <h3>Create your first wishlist</h3>
              <p>As you search, click the heart icon to save your favorite places and experiences to a wishlist.</p>
              <button className="btn-outline" onClick={() => window.location.href = '/'}>Start exploring</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .wishlist-page {
          padding-top: var(--space-6);
          padding-bottom: var(--space-7);
        }

        .page-header {
          margin-bottom: var(--space-6);
        }

        .empty-wishlist {
          padding: 80px 0;
          text-align: center;
        }

        .empty-content {
          max-width: 400px;
        }

        .empty-content h3 {
          margin-bottom: 12px;
        }

        .empty-content p {
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .loader { width: 48px; height: 48px; border: 5px solid var(--border-light); border-bottom-color: var(--primary-color); border-radius: 50%; animation: rotation 1s linear infinite; }
        @keyframes rotation { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </Layout>
  );
};

export default WishlistPage;
