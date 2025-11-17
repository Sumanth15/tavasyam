// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onClose }) => {
  const [active, setActive] = useState('Overview');

  const menu = [
    { id:1, name:'Overview', icon:'▦' },
    { id:2, name:'Workout', icon:'🏋️' },
    { id:3, name:'Diet Plan', icon:'📝' },
    { id:4, name:'Goals', icon:'🎯' },
    { id:5, name:'My Schedule', icon:'📅' },
    { id:6, name:'Progress', icon:'📊' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Fitness <span className="dumbbell-icon">🏋️</span></h2>
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">✕</button>
      </div>

      <nav className="sidebar-nav">
        {menu.map((m) => (
          <button
            key={m.id}
            className={`nav-item ${active === m.name ? 'active' : ''}`}
            onClick={() => setActive(m.name)}
          >
            <span className="nav-icon">{m.icon}</span>
            <span className="nav-text">{m.name}</span>
            {m.name === 'Progress' && <span className="nav-arrow">›</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item"><span className="nav-icon">❓</span><span className="nav-text">Help</span></button>
        <button className="nav-item"><span className="nav-icon">🚪</span><span className="nav-text">Logout</span></button>
      </div>
    </div>
  );
};

export default Sidebar;
