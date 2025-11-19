// // Header.jsx
// import React from 'react';
// import './Header.css';
// import avatar from '../assets/Avatar w. photo/svg'

// const Header = ({ onToggleSidebar }) => {
//   return (
//     <div className="header">
//       <div className="header-left">
//         <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">☰</button>
//         <div className="welcome-text">
//           <span className="greeting">Good Morning</span>
//           <h1>Welcome Back!</h1>
//         </div>
//       </div>

//       <div className="header-center">
//         <div className="search-bar">
//           <span className="search-icon">🔍</span>
//           <input placeholder="Search" />
//         </div>
//       </div>

//       <div className="header-right">
//         <button className="icon-btn">
//           <span className="notification-badge">3</span>🔔
//         </button>
//         <button className="icon-btn">⚙️</button>
//         <div className="user-avatar"><img src="https://i.pravatar.cc/100?img=5" alt="user"/></div>
//       </div>
//     </div>
//   );
// };

// export default Header;





// Header.jsx
import React from 'react';
import './Header.css';

// Importing your assets
import SearchIcon from '../assets/searchnormal.svg';
import NotificationIcon from '../assets/notification.svg';
import SettingsIcon from '../assets/setting2.svg';
import UserAvatar from '../assets/Avatar w. photo.png';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      {/* Left */}
      <div className="header-left">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
          ☰
        </button>

        <div className="welcome-text">
          <span className="greeting">Good Morning</span>
          <h1>Welcome Back!</h1>
        </div>
      </div>

      {/* Center Search */}
      <div className="header-center">
        <div className="search-bar">
          <img src={SearchIcon} alt="search" className="icon search-icon" />
          <input placeholder="Search" />
        </div>
      </div>

      {/* Right */}
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
