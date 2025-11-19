// Header.jsx
import React from 'react';
import './Header.css';
import SearchIcon from '../assets/searchnormal.svg';
import NotificationIcon from '../assets/notification.svg';
import SettingsIcon from '../assets/setting2.svg';
import UserAvatar from '../assets/Avatar w. photo.png';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
          ☰
        </button>

        <div className="welcome-text">
          <span className="greeting">Good Morning</span>
          <h1>Welcome Back!</h1>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <img src={SearchIcon} alt="search" className="icon search-icon" />
          <input placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn notification-btn">
          <img src={NotificationIcon} alt="notifications" className="icon" />
        </button>

        <button className="icon-btn">
          <img src={SettingsIcon} alt="settings" className="icon" />
        </button>

        <div className="user-avatar">
          <img src={UserAvatar} alt="user avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
