// Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">☰</button>
        <div className="welcome-text">
          <span className="greeting">Good Morning</span>
          <h1>Welcome Back!</h1>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <span className="notification-badge">3</span>🔔
        </button>
        <button className="icon-btn">⚙️</button>
        <div className="user-avatar"><img src="https://i.pravatar.cc/100?img=5" alt="user"/></div>
      </div>
    </div>
  );
};

export default Header;
