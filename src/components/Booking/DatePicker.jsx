import React from 'react';

const DatePicker = ({ value, onChange, label }) => {
  return (
    <div className="date-picker" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{label}</label>
      <input 
        type="date" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '0.8rem', border: '1px solid var(--gray)', borderRadius: '8px' }}
      />
    </div>
  );
};

export default DatePicker;
