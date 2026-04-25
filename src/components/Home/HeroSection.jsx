import React from 'react';
import SearchBar from '../Common/SearchBar';
import '../../styles/global.css';

const HeroSection = ({ onSearch }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <h1>Come to Life</h1>
          <p>For nature, wildlife and our planet</p>
          <button className="btn-primary hero-cta">Become a Host</button>
        </div>
        
        <div className="hero-search-wrapper">
          <SearchBar onSearch={onSearch} size="large" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 60vh;
          min-height: 400px;
          background-image: url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ivory);
          text-align: center;
          margin-bottom: var(--space-7);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          width: 100%;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          margin-bottom: var(--space-2);
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .hero-text p {
          font-size: 1.25rem;
          margin-bottom: var(--space-4);
          opacity: 0.9;
        }

        .hero-cta {
          font-size: 1.1rem;
          padding: var(--space-3) var(--space-6);
        }

        .hero-search-wrapper {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 45vh;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-text p {
            font-size: 1rem;
          }
          
          .hero-search-wrapper {
            padding: 0 var(--space-2);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
