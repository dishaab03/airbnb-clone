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
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display:'block',fill:'currentColor',height:'32px',width:'32px',marginRight:'8px'}}>
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.42-3.481 0-6.358-2.416-6.358-6.478l.002-.23c.009-.924.253-1.805.92-3.396l.144-.353c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025c1.288-2.306 2.743-3.269 4.752-3.269zm0 2.1c-1.29 0-2.04.535-3.029 2.306l-.513.987c-1.966 3.854-5.993 12.368-6.974 14.656l-.168.411c-.581 1.387-.81 2.157-.86 2.934l-.01.315-.001.163c0 2.892 1.942 4.378 4.257 4.378 1.724 0 3.55-1.066 5.411-3.004l.417-.441.425.44c1.862 1.938 3.687 3.005 5.412 3.005 2.315 0 4.256-1.486 4.256-4.378l-.001-.163c-.05-.777-.279-1.547-.86-2.934l-.168-.411c-.981-2.288-5.008-10.802-6.974-14.656l-.513-.987c-.989-1.771-1.739-2.306-3.029-2.306zm0 7.434c2.111 0 3.822 1.711 3.822 3.822s-1.711 3.822-3.822 3.822-3.822-1.711-3.822-3.822 1.711-3.822 3.822-3.822zm0 2.1c-.951 0-1.722.771-1.722 1.722s.771 1.722 1.722 1.722 1.722-.771 1.722-1.722-.771-1.722-1.722-1.722z"></path>
            </svg>
            <span className="logo-text">airbnb</span>
          </Link>
        </div>

        {/* Center: Tabs & Search */}
        <div className="navbar-center hide-mobile">
          <div className="nav-center-wrapper">
            <div className="nav-tabs">
              <button className="nav-tab active">Stays</button>
              <button className="nav-tab">Experiences</button>
              <button className="nav-tab">Online Experiences</button>
            </div>
            <div className="search-bar-container">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <button className="navbar-btn hide-mobile airbnb-host-btn">Airbnb your home</button>
          <div className="navbar-icons">
            <button className="navbar-icon-btn globe-btn">
              <span className="icon">🌐</span>
            </button>
            <div className="navbar-profile-dropdown">
              <button className="profile-btn flex-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="hamburger">☰</span>
                <div className="avatar-container">
                  <span className="avatar">👤</span>
                </div>
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
          padding-bottom: 16px;
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
          color: var(--primary-color);
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .navbar-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .nav-center-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .nav-tabs {
          display: flex;
          gap: 24px;
        }

        .nav-tab {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-dark);
          padding: 10px 16px;
          border-radius: 24px;
          transition: background-color 0.2s;
        }

        .nav-tab:hover {
          background-color: var(--bg-light);
          color: black;
        }

        .nav-tab.active {
          font-weight: 600;
        }

        .search-bar-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .airbnb-host-btn {
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 24px;
          font-size: 14px;
        }

        .airbnb-host-btn:hover {
          background-color: var(--bg-light);
        }

        .globe-btn {
          padding: 12px;
          border-radius: 50%;
        }

        .globe-btn:hover {
          background-color: var(--bg-light);
        }

        .profile-btn {
          gap: 12px;
          padding: 5px 5px 5px 12px;
          border: 1px solid var(--border-light);
          border-radius: 32px;
          background-color: white;
          margin-left: 8px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          transition: box-shadow 0.2s;
        }

        .profile-btn:hover {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .hamburger {
          font-size: 16px;
          color: var(--text-dark);
        }

        .avatar-container {
          background-color: #717171;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .navbar { height: auto; padding: 16px 0; }
          .nav-tabs { display: none; }
          .navbar-center { padding: 0; }
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
