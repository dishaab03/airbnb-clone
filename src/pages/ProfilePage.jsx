import React from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/global.css';

const ProfilePage = () => {
  return (
    <Layout>
      <div className="profile-page container fade-in">
        <header className="page-header">
          <h1>Account</h1>
          <p className="subtitle"><strong>Dishaa</strong> · dishaa@example.com · <span className="go-to-profile">Go to profile</span></p>
        </header>

        <div className="profile-grid">
          <div className="profile-card shadow-medium">
            <div className="card-icon">👤</div>
            <div className="card-text">
              <h3>Personal info</h3>
              <p>Provide personal details and how we can reach you</p>
            </div>
          </div>

          <div className="profile-card shadow-medium">
            <div className="card-icon">🛡️</div>
            <div className="card-text">
              <h3>Login & security</h3>
              <p>Update your password and secure your account</p>
            </div>
          </div>

          <div className="profile-card shadow-medium">
            <div className="card-icon">💳</div>
            <div className="card-text">
              <h3>Payments & payouts</h3>
              <p>Review payments, payouts, coupons, and gift cards</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-page {
          padding-top: var(--space-6);
          padding-bottom: var(--space-7);
        }

        .page-header {
          margin-bottom: 48px;
        }

        .subtitle {
          margin-top: 8px;
          font-size: 1.1rem;
        }

        .go-to-profile {
          text-decoration: underline;
          cursor: pointer;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .profile-card {
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border-medium);
          cursor: pointer;
          transition: var(--transition-default);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .profile-card:hover {
          box-shadow: var(--shadow-strong);
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-text h3 {
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .card-text p {
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.4;
        }
      `}</style>
    </Layout>
  );
};

export default ProfilePage;
