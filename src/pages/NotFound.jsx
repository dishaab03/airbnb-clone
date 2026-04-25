import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page" style={{ padding: '6rem 1rem', textAlign: 'center', background: 'var(--ivory)' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--dark-green)' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--gray)', marginBottom: '2.5rem' }}>The page you're looking for doesn't exist or has been moved.</p>
      <button 
        onClick={() => navigate('/')}
        style={{ backgroundColor: 'var(--dark-green)', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 'bold' }}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
