import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/Home/HomePage';
import SearchPage from './pages/SearchPage';
import ListingPage from './pages/ListingPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
