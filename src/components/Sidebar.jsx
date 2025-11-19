// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';
import DashboardIcon from '../assets/Dashbaord.svg';
import WorkoutIcon from '../assets/Workout.svg';
import DietPlanIcon from '../assets/Diet Plan.svg';
import GoalIcon from '../assets/Goal.svg';
import ScheduleIcon from '../assets/Schedule.svg';
import ProgressIcon from '../assets/Progres.svg';
import HelpIcon from '../assets/Help.svg';
import LogoutIcon from '../assets/Logout.svg';
import DumbbellIcon from '../assets/Workout-bold.svg';

const Sidebar = ({ onClose }) => {
  const [active, setActive] = useState('Overview');

  const menu = [
    { id: 1, name: 'Overview', icon: DashboardIcon },
    { id: 2, name: 'Workout', icon: WorkoutIcon },
    { id: 3, name: 'Diet Plan', icon: DietPlanIcon },
    { id: 4, name: 'Goals', icon: GoalIcon },
    { id: 5, name: 'My Schedule', icon: ScheduleIcon },
    { id: 6, name: 'Progress', icon: ProgressIcon },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>
          Fitness
          <img src={DumbbellIcon} alt="icon" className="dumbbell-icon" />
        </h2>
        <button className="close-btn" onClick={onClose} aria-label="Close sidebar">✕</button>
      </div>

      <nav className="sidebar-nav">
        {menu.map((m) => (
          <button
            key={m.id}
            className={`nav-item ${active === m.name ? 'active' : ''}`}
            onClick={() => setActive(m.name)}
          >
            <span className="nav-icon">
              <img src={m.icon} alt={m.name} />
            </span>

            <span className="nav-text">{m.name}</span>

            {m.name === 'Progress' && <span className="nav-arrow">›</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-item">
          <span className="nav-icon"><img src={HelpIcon} alt="Help" /></span>
          <span className="nav-text">Help</span>
        </button>

        <button className="nav-item">
          <span className="nav-icon"><img src={LogoutIcon} alt="Logout" /></span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
