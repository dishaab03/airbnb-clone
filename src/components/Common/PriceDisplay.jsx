import React from 'react';

/**
 * PriceDisplay component to handle currency formatting and display
 * @param {number} amount - The amount to display
 * @param {string} currency - Currency symbol (default: ₹)
 * @param {boolean} perNight - Whether to show "/ night"
 */
const PriceDisplay = ({ amount, currency = '₹', perNight = false, className = '' }) => {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <span className={`price-display ${className}`} style={{ fontWeight: '600' }}>
      <span className="currency">{currency}</span>
      <span className="amount">{formattedAmount}</span>
      {perNight && <span className="per-night" style={{ fontWeight: '400', fontSize: '0.9em', color: '#666' }}> / night</span>}
    </span>
  );
};

export default PriceDisplay;
