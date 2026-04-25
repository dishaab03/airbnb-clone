import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content container">
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">Help Centre</Link></li>
            <li><Link to="/safety">AirCover</Link></li>
            <li><Link to="/disability">Anti-discrimination</Link></li>
            <li><Link to="/cancellation">Disability support</Link></li>
            <li><Link to="/report">Cancellation options</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Hosting</h3>
          <ul>
            <li><Link to="/host">Airbnb your home</Link></li>
            <li><Link to="/aircover-for-hosts">AirCover for Hosts</Link></li>
            <li><Link to="/hosting-resources">Hosting resources</Link></li>
            <li><Link to="/community-forum">Community forum</Link></li>
            <li><Link to="/responsible-hosting">Hosting responsibly</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Airbnb</h3>
          <ul>
            <li><Link to="/newsroom">Newsroom</Link></li>
            <li><Link to="/new-features">New features</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/investors">Investors</Link></li>
            <li><Link to="/gift-cards">Airbnb.org emergency stays</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
        </div>
        <div className="footer-social">
          <span>🌐 English (IN)</span>
          <span>₹ INR</span>
        </div>
      </div>

      <style jsx>{`
        .footer-container {
          background-color: var(--bg-light);
          color: var(--text-dark);
          padding: 48px 0 24px;
          border-top: 1px solid var(--border-medium);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-medium);
        }

        .footer-section h3 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 12px;
        }

        .footer-section ul li a {
          font-size: 0.9rem;
          color: var(--text-dark);
        }

        .footer-section ul li a:hover {
          text-decoration: underline;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          gap: 24px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
