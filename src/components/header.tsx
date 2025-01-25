import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="app-container">
      <div className="header">
        <img src="/path-to-your-logo.png" alt="Plan My Diet" className="logo" />
        <div className="buttons">
          <button>Home</button>
          <button>Contacts</button>
          <button>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;