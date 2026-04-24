import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ListingsProvider } from './context/ListingsContext';
import { FilterProvider } from './context/FilterContext';
import { WishlistProvider } from './context/WishlistContext';
import { BookingProvider } from './context/BookingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListingsProvider>
        <FilterProvider>
          <WishlistProvider>
            <BookingProvider>
              <App />
            </BookingProvider>
          </WishlistProvider>
        </FilterProvider>
      </ListingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
