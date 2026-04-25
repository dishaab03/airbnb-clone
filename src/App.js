import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListingsProvider } from './context/ListingsContext';
import { FilterProvider } from './context/FilterContext';
import { WishlistProvider } from './context/WishlistContext';
import { BookingProvider } from './context/BookingContext';

import HomePage from './components/Home/HomePage';
import SearchPage from './pages/SearchPage';
import ListingPage from './pages/ListingPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout/Layout';

import './styles/global.css';
import './styles/responsive.css';

function App() {
  return (
    <ListingsProvider>
      <FilterProvider>
        <WishlistProvider>
          <BookingProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/listing/:id" element={<ListingPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </Router>
          </BookingProvider>
        </WishlistProvider>
      </FilterProvider>
    </ListingsProvider>
  );
}

export default App;
