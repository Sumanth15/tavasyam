// MySchedule.jsx
import React from 'react';
import './MySchedule.css';

const MySchedule = () => {
  const data = [
    { id:1, day:'Monday', activity:'Stretch', time:'At 08:00', detail:'20 Sets', image:'🧘‍♀️' },
    { id:2, day:'Tuesday', activity:'Back Stretch', time:'At 08:00', detail:'10 Round', image:'🧘' },
    { id:3, day:'Wednesday', activity:'Yoga', time:'At 08:00', detail:'20 min', image:'🧘‍♀️' },
  ];

  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h2>My Schedule</h2>
        <a href="#" className="view-all">View All <span>›</span></a>
      </div>

      <div className="schedule-list">
        {data.map(item => (
          <div key={item.id} className="schedule-card">
            <div className="schedule-content">
              <div className="schedule-icon">{item.image}</div>
              <div className="schedule-info">
                <h3>{item.day}</h3>
                <div className="activity-name">{item.activity}</div>
                <div className="activity-time">{item.time}</div>
              </div>
            </div>
            <div className="schedule-detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
