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
      <div className="search-section location-section">
        <label>Where</label>
        <input 
          type="text" 
          placeholder="Search destinations" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="divider"></div>

      <div className="search-section date-section">
        <div className="date-input-group">
          <div className="date-field">
            <label>Check in</label>
            <input 
              type="text" 
              placeholder="Add dates"
              value={checkIn}
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="divider-small"></div>
          <div className="date-field">
            <label>Check out</label>
            <input 
              type="text" 
              placeholder="Add dates"
              value={checkOut}
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="search-section guests-section">
        <div className="guest-info">
          <label>Who</label>
          <input 
            type="number" 
            min="1"
            placeholder="Add guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="search-btn-red">
          <span className="search-icon-white">🔍</span>
          {size === 'large' && <span className="search-text-white">Search</span>}
        </button>
      </div>

      <style jsx>{`
        .search-bar {
          display: flex;
          align-items: center;
          background-color: white;
          border: 1px solid var(--border-medium);
          border-radius: 40px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          height: 66px;
        }

        .search-bar.small {
          height: 48px;
          max-width: 300px;
        }

        .search-section {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 24px;
          cursor: pointer;
          border-radius: 32px;
          transition: background-color 0.2s;
        }

        .search-section:hover {
          background-color: var(--bg-light);
        }

        .location-section { flex: 1.5; }
        .date-section { flex: 2; }
        .guests-section { 
          flex: 1.2; 
          display: flex; 
          flex-direction: row; 
          align-items: center; 
          padding-right: 8px;
        }

        .guest-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 12px;
          font-weight: 800;
          color: var(--text-dark);
          margin-bottom: 2px;
        }

        input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          color: var(--text-dark);
          width: 100%;
          padding: 0;
        }

        input::placeholder {
          color: var(--text-light);
        }

        .date-input-group {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .date-field {
          flex: 1;
        }

        .divider {
          width: 1px;
          height: 32px;
          background-color: var(--border-medium);
        }

        .divider-small {
          width: 1px;
          height: 24px;
          background-color: var(--border-medium);
          margin: 0 8px;
        }

        .search-btn-red {
          background-color: var(--primary-color);
          color: white;
          padding: 12px 16px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s;
        }

        .search-btn-red:hover {
          background-color: var(--primary-hover);
        }

        .search-icon-white {
          font-size: 16px;
          font-weight: bold;
        }

        .search-text-white {
          font-weight: 600;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .search-bar { height: auto; flex-direction: column; border-radius: 24px; padding: 12px; }
          .divider { display: none; }
          .search-section { width: 100%; padding: 12px; }
          .search-btn-red { width: 100%; justify-content: center; margin-top: 8px; }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
