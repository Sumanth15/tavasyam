// // MySchedule.jsx
// import React from 'react';
// import './MySchedule.css';

// const MySchedule = () => {
//   const data = [
//     { id:1, day:'Monday', activity:'Stretch', time:'At 08:00', detail:'20 Sets', image:'🧘‍♀️' },
//     { id:2, day:'Tuesday', activity:'Back Stretch', time:'At 08:00', detail:'10 Round', image:'🧘' },
//     { id:3, day:'Wednesday', activity:'Yoga', time:'At 08:00', detail:'20 min', image:'🧘‍♀️' },
//   ];

//   return (
//     <div className="schedule-container">
//       <div className="schedule-header">
//         <h2>My Schedule</h2>
//         <a href="#" className="view-all">View All <span>›</span></a>
//       </div>

//       <div className="schedule-list">
//         {data.map(item => (
//           <div key={item.id} className="schedule-card">
//             <div className="schedule-content">
//               <div className="schedule-icon">{item.image}</div>
//               <div className="schedule-info">
//                 <h3>{item.day}</h3>
//                 <div className="activity-name">{item.activity}</div>
//                 <div className="activity-time">{item.time}</div>
//               </div>
//             </div>
//             <div className="schedule-detail">{item.detail}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MySchedule;




// MySchedule.jsx
import React from 'react';
import './MySchedule.css';

// Import images from assets
import Icon1 from '../assets/Group 107 1.png';
import Icon2 from '../assets/Image 97.png';
import Icon3 from '../assets/Image 98.png';

const MySchedule = () => {
  const data = [
    { id:1, day:'Monday', activity:'Stretch', time:'At 08:00', detail:'20 Sets', image: Icon1 },
    { id:2, day:'Tuesday', activity:'Back Stretch', time:'At 08:00', detail:'10 Round', image: Icon2 },
    { id:3, day:'Wednesday', activity:'Yoga', time:'At 08:00', detail:'20 min', image: Icon3 },
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
            {/* left: day above icon */}
            <div className="schedule-left">
              <div className="schedule-day">{item.day}</div>
              <div className="schedule-icon">
                <img src={item.image} alt={item.activity} />
              </div>
            </div>

            {/* middle: activity name + time */}
            <div className="schedule-info">
              <div className="activity-name">{item.activity}</div>
              <div className="activity-time">{item.time}</div>
            </div>

            {/* right: detail */}
            <div className="schedule-detail">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
