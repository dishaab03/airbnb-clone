import React, { useState } from 'react';
import '../../styles/global.css';

const SearchBar = ({ onSearch, size = 'large' }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(location, checkIn, checkOut, guests);
  };

  return (
    <form className={`search-bar ${size}`} onSubmit={handleSubmit}>
      <div className="search-section">
        <label>Where</label>
        <input 
          type="text" 
          placeholder="Search destinations" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="divider"></div>

      <div className="search-section">
        <label>Check in</label>
        <input 
          type="date" 
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="divider"></div>

      <div className="search-section">
        <label>Check out</label>
        <input 
          type="date" 
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="divider"></div>

      <div className="search-section guests">
        <label>Who</label>
        <input 
          type="number" 
          min="1"
          placeholder="Add guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
        />
      </div>

      <button type="submit" className="search-btn">
        <span className="search-icon">🔍</span>
      </button>

      <style jsx>{`
        .search-bar {
          display: flex;
          align-items: center;
          background-color: white;
          border: 1px solid var(--border-medium);
          border-radius: 40px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
          padding: 8px;
          width: 100%;
          transition: box-shadow 0.2s;
        }

        .search-bar:hover {
          box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.1);
        }

        .search-bar.small {
          padding: 4px 8px 4px 24px;
        }

        .search-section {
          flex: 1;
          padding: 4px 16px;
          display: flex;
          flex-direction: column;
        }

        .search-bar.small .search-section {
          padding: 0 12px;
        }

        .search-bar.small label { display: none; }
        .search-bar.small input { font-size: 0.85rem; font-weight: 500; }

        label {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 2px;
        }

        input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.9rem;
          color: var(--text-dark);
          width: 100%;
        }

        .divider {
          width: 1px;
          height: 32px;
          background-color: var(--border-medium);
        }

        .search-btn {
          background-color: var(--primary-color);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
        }

        .search-bar.small .search-btn {
          width: 32px;
          height: 32px;
        }

        .search-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .search-bar {
            flex-direction: column;
            border-radius: 24px;
            padding: 16px;
          }
          .divider { display: none; }
          .search-section { width: 100%; border-bottom: 1px solid var(--border-medium); padding: 12px 0; }
          .search-btn { width: 100%; border-radius: 8px; margin-top: 12px; }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
