import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../Common/SearchBar';
import '../../styles/global.css';
import '../../styles/responsive.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (location, checkIn, checkOut, guests) => {
    navigate(`/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon"> NestAway</span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="navbar-center hide-mobile">
          <div className="search-bar-wrapper">
            <SearchBar onSearch={handleSearch} size="small" />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <button className="navbar-btn hide-mobile">Become a Host</button>
          <div className="navbar-icons">
            <button className="navbar-icon-btn">
              <span className="icon">🌐</span>
            </button>
            <div className="navbar-profile-dropdown">
              <button className="profile-btn flex-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="hamburger">☰</span>
                <span className="avatar">👤</span>
              </button>
              
              {isMobileMenuOpen && (
                <div className="dropdown-menu shadow-strong fade-in">
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <Link to="/wishlist" className="dropdown-item">Wishlist</Link>
                  <hr />
                  <button className="dropdown-item">Log In</button>
                  <button className="dropdown-item">Sign Up</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--bg-white);
          color: var(--text-dark);
          border-bottom: 1px solid var(--border-medium);
          padding: var(--space-1) 0;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-family: 'Outfit', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-color);
          letter-spacing: -1px;
        }

        .navbar-logo:hover {
          opacity: 0.9;
        }

        .navbar-center {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 0 var(--space-4);
        }

        .search-bar-wrapper {
          width: 100%;
          max-width: 360px;
        }

        .navbar-btn {
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 24px;
          color: var(--text-dark);
          font-size: 0.9rem;
        }

        .navbar-btn:hover {
          background-color: var(--bg-light);
        }

        .navbar-icons {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .navbar-icon-btn {
          padding: 12px;
          border-radius: 50%;
          color: var(--text-dark);
        }

        .navbar-icon-btn:hover {
          background-color: var(--bg-light);
        }

        .profile-btn {
          gap: 12px;
          padding: 8px 8px 8px 12px;
          border: 1px solid var(--border-light);
          border-radius: 32px;
          background-color: white;
          color: var(--text-medium);
          margin-left: 8px;
        }

        .profile-btn:hover {
          box-shadow: var(--shadow-medium);
        }

        .avatar {
          background-color: var(--text-light);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          background-color: white;
          border-radius: 12px;
          min-width: 240px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.12);
          padding: 8px 0;
          z-index: 1001;
        }

        .dropdown-item {
          padding: 12px 16px;
          font-size: 0.9rem;
          color: var(--text-dark);
          font-weight: 400;
        }

        .dropdown-item:hover {
          background-color: var(--bg-light);
        }

        hr {
          margin: 8px 0;
          border-top: 1px solid var(--border-medium);
        }

        .fade-in { animation: fadeIn 0.2s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .navbar { height: 72px; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
