import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListingsProvider } from './context/ListingsContext';
import { FilterProvider } from './context/FilterContext';
import { WishlistProvider } from './context/WishlistContext';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ListingPage from './pages/ListingPage';
import WishlistPage from './pages/WishlistPage';
import BookingConfirmation from './pages/BookingConfirmation';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

// Components
import BookingFlow from './components/Booking/BookingFlow';

function App() {
  return (
    <Router>
      <ListingsProvider>
        <FilterProvider>
          <WishlistProvider>
            <BookingProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/listing/:id" element={<ListingPage />} />
                  <Route path="/listing/:id/book" element={<BookingFlow />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmation />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BookingProvider>
          </WishlistProvider>
        </FilterProvider>
      </ListingsProvider>
    </Router>
  );
}

export default App;
