// StatsCards.jsx
import React from 'react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    { id:1, icon:'⏱️', title:'Workout', value:'4 hrs', color:'#00bcd4' },
    { id:2, icon:'🔥', title:'Calories', value:'1800 kcl', color:'#ff9800' },
    { id:3, icon:'👟', title:'Steps', value:'2200 steps', color:'#9c27b0' },
  ];

  return (
    <div className="stats-cards-container">
      {stats.map(s => (
        <div key={s.id} className="stat-card" style={{ background: s.color }}>
          <div className="stat-icon">{s.icon}</div>
          <div className="stat-info">
            <h3>{s.title}</h3>
            <p>{s.value}</p>
          </div>

           <svg
            className="wave-bg"
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"   // <<-- IMPORTANT: stretch to fill
            aria-hidden="true"
            focusable="false"
          >
            <path d="M0,100 C50,120 100,80 150,100 C200,120 250,80 300,100 C350,120 400,80 400,100 L400,200 L0,200 Z" fill="rgba(255,255,255,0.08)"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
