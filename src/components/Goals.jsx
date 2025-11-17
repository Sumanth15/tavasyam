// Goals.jsx
import React from 'react';
import './Goals.css';

const Goals = () => {
  const goals = [
    { id:1, title:'ABS & Stretch', date:'Saturday, April 14', time:'08:00 AM', target:'30 Min/day' },
    { id:2, title:'Push Up', date:'Sunday, April 15', time:'08:00 AM', target:'50 Sets/day' },
  ];

  return (
    <div className="goals-container">
      <div className="goals-header">
        <h2>Goals</h2>
        <a href="#" className="view-all">View All <span>›</span></a>
      </div>

      <div className="goals-list">
        {goals.map(g => (
          <div key={g.id} className="goal-card">
            <div className="goal-info">
              <h3>{g.title}</h3>
              <p className="goal-datetime">{g.date} | {g.time}</p>
            </div>
            <div className="goal-target">{g.target}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
