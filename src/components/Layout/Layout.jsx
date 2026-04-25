import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="content-area">
        {children}
      </main>
      <Footer />
      
      <style jsx>{`
        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--ivory);
        }

        .content-area {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
