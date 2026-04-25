import React from 'react';
import '../../styles/global.css';

const propertyTypes = [
  { id: 'all', label: 'Amazing pools', icon: '🏊' },
  { id: 'cabin', label: 'Cabins', icon: '🛖' },
  { id: 'beachfront', label: 'Beachfront', icon: '🏖️' },
  { id: 'apartment', label: 'Amazing views', icon: '🏔️' },
  { id: 'villa', label: 'Luxe', icon: '💎' },
  { id: 'lakefront', label: 'Lakefront', icon: '🌊' },
  { id: 'treehouse', label: 'Treehouses', icon: '🌲' },
  { id: 'camping', label: 'Camping', icon: '⛺' },
  { id: 'arctic', label: 'Arctic', icon: '❄️' },
  { id: 'design', label: 'Design', icon: '🏛️' },
];

const FilterPanel = ({ activeFilter, onFilterChange }) => {
  const currentFilter = activeFilter || 'all';

  return (
    <div className="filter-panel-container">
      <div className="filter-panel container">
        <div className="filter-scroll-wrapper">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              className={`filter-chip ${currentFilter === type.id ? 'active' : ''}`}
              onClick={() => onFilterChange && onFilterChange(type.id)}
            >
              <span className="filter-icon">{type.icon}</span>
              <span className="filter-label">{type.label}</span>
            </button>
          ))}
        </div>
        
        <button className="filters-btn hide-mobile">
          <span className="icon">⚡</span>
          <span>Filters</span>
        </button>
      </div>

      <style jsx>{`
        .filter-panel-container {
          background-color: white;
          padding: 12px 0 0;
          position: sticky;
          top: 80px;
          z-index: 900;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
        }

        .filter-panel {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .filter-scroll-wrapper {
          flex: 1;
          display: flex;
          gap: 32px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .filter-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .filter-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: fit-content;
          color: var(--text-light);
          padding-bottom: 12px;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }

        .filter-chip:hover {
          color: var(--text-dark);
          border-bottom-color: var(--border-light);
        }

        .filter-chip.active {
          color: var(--text-dark);
          border-bottom-color: var(--text-dark);
        }

        .filter-icon {
          font-size: 1.5rem;
        }

        .filter-label {
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .filters-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--border-light);
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .filters-btn:hover {
          border-color: var(--text-dark);
          background-color: var(--bg-light);
        }
      `}</style>
    </div>
  );
};

export default FilterPanel;
