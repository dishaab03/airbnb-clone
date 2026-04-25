import React from 'react';

const FilterPanel = () => {
  return (
    <div className="filter-panel" style={{ border: '1px solid var(--light-gray)', borderRadius: '12px', padding: '1.5rem', background: 'white', position: 'sticky', top: '100px' }}>
      <h3>Filters</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price Range</label>
          <input type="range" style={{ width: '100%' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Property Type</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label><input type="checkbox" /> House</label>
            <label><input type="checkbox" /> Apartment</label>
            <label><input type="checkbox" /> Cabin</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
