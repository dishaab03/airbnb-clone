import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: 'var(--dark-green)', color: 'var(--white)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Airbnb Clone</Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/search">Search</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
