

// // GoalProgress.jsx
// import React, { useMemo, useState } from 'react';
// import './GoalProgress.css';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

// const GoalProgress = () => {
//   const [timeframe, setTimeframe] = useState('Weekly');

//   // sample data (0-100 as percentage)
//   const weekData = [
//     { day: 'Mon', workout: 30, calories: 55, steps: 75 },
//     { day: 'Tue', workout: 43, calories: 33, steps: 50 },
//     { day: 'Wed', workout: 75, calories: 50, steps: 55 },
//     { day: 'Thu', workout: 63, calories: 80, steps: 43 },
//     { day: 'Fri', workout: 33, calories: 55, steps: 63 },
//     { day: 'Sat', workout: 33, calories: 55, steps: 63 },
//     { day: 'Sun', workout: 33, calories: 55, steps: 63 },
//   ];

//   const labels = weekData.map((d) => d.day);

//   const data = useMemo(() => ({
//     labels,
//     datasets: [
//       {
//         label: 'Workout',
//         data: weekData.map((d) => d.workout),
//         backgroundColor: '#00bcd4',
//         borderRadius: 6,
//         barThickness: 16,
//       },
//       {
//         label: 'Calories',
//         data: weekData.map((d) => d.calories),
//         backgroundColor: '#ff9800',
//         borderRadius: 6,
//         barThickness: 16,
//       },
//       {
//         label: 'Steps',
//         data: weekData.map((d) => d.steps),
//         backgroundColor: '#9c27b0',
//         borderRadius: 6,
//         barThickness: 16,
//       },
//     ],
//   }), [weekData]);

//   const options = useMemo(() => ({
//     responsive: true,
//     maintainAspectRatio: false, // lets container control height
//     interaction: { mode: 'index', intersect: false },
//     plugins: {
//       legend: {
//         display: false, // we keep the custom legend below
//       },
//       tooltip: {
//         callbacks: {
//           label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         stacked: false,
//         grid: { display: false },
//         ticks: { padding: 8 },
//       },
//       y: {
//         beginAtZero: true,
//         suggestedMax: 100,
//         ticks: {
//           stepSize: 20,
//           callback: (value) => `${value}%`,
//         },
//         grid: {
//           color: '#f0f0f0',
//         },
//       },
//     },
//   }), []);

//   return (
//     <div className="goal-progress-card card">
//       <div className="gp-top">
//         <h3>Goal Progress</h3>
//         <div className="gp-controls">
//           <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
//             <option>Weekly</option>
//             <option>Monthly</option>
//             <option>Yearly</option>
//           </select>
//         </div>
//       </div>

//       <div className="gp-chart-wrapper">
//         <Bar data={data} options={options} />
//       </div>

//       <div className="gp-legend">
//         <div className="legend-item"><span className="dot workout" /> Workout</div>
//         <div className="legend-item"><span className="dot calories" /> Calories</div>
//         <div className="legend-item"><span className="dot steps" /> Steps</div>
//       </div>
//     </div>
//   );
// };

// export default GoalProgress;







// src/components/GoalProgress.jsx
import React, { useMemo, useState, useRef, useEffect } from 'react';
import './GoalProgress.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoalProgress = () => {
  const [timeframe, setTimeframe] = useState('Weekly');

  // sample percentage data (0 - 100)
  const weekData = [
    { day: 'Mon', workout: 30, calories: 55, steps: 75 },
    { day: 'Tue', workout: 43, calories: 33, steps: 50 },
    { day: 'Wed', workout: 75, calories: 50, steps: 55 },
    { day: 'Thu', workout: 63, calories: 80, steps: 43 },
    { day: 'Fri', workout: 33, calories: 55, steps: 63 },
    { day: 'Sat', workout: 33, calories: 55, steps: 63 },
    { day: 'Sun', workout: 33, calories: 55, steps: 63 },
  ];

  const labels = useMemo(() => weekData.map((d) => d.day), [weekData]);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Workout',
          data: weekData.map((d) => d.workout),
          backgroundColor: '#00bcd4',
          borderRadius: 6,
          barThickness: 16,
        },
        {
          label: 'Calories',
          data: weekData.map((d) => d.calories),
          backgroundColor: '#ff9800',
          borderRadius: 6,
          barThickness: 16,
        },
        {
          label: 'Steps',
          data: weekData.map((d) => d.steps),
          backgroundColor: '#9c27b0',
          borderRadius: 6,
          barThickness: 16,
        },
      ],
    }),
    [labels, weekData]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const value = ctx.parsed && (ctx.parsed.y ?? ctx.parsed);
              return `${ctx.dataset.label}: ${value}%`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: false,
          grid: { display: false },
          ticks: { padding: 8 },
        },
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          ticks: {
            stepSize: 20,
            callback: (v) => `${v}%`,
          },
          grid: { color: '#f0f0f0' },
        },
      },
    }),
    []
  );

  // chart ref to call resize/update explicitly
  const chartRef = useRef(null);

  // Resize handler: call chart resize when window resizes
  useEffect(() => {
    const onResize = () => {
      // small timeout to let layout settle
      requestAnimationFrame(() => {
        const ref = chartRef.current;
        if (!ref) return;

        // react-chartjs-2 v4+: ref.current is the chart instance
        // react-chartjs-2 v3 or older might expose chartInstance
        // we try both defensively.
        try {
          if (typeof ref.resize === 'function') {
            ref.resize();
          } else if (ref.chartInstance && typeof ref.chartInstance.resize === 'function') {
            ref.chartInstance.resize();
          } else if (ref.chart && typeof ref.chart.resize === 'function') {
            ref.chart.resize();
          }
        } catch (err) {
          // fail silently; dispatching resize elsewhere should still help
          // console.warn('chart resize failed', err);
        }
      });
    };

    window.addEventListener('resize', onResize);
    // run once to ensure correct size
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  // optionally re-run chart update when timeframe changes (if you later switch datasets)
  useEffect(() => {
    const ref = chartRef.current;
    if (!ref) return;
    // try to call update on the chart instance
    try {
      const chartInstance = ref.chart ?? ref.chartInstance ?? ref;
      if (chartInstance && typeof chartInstance.update === 'function') {
        chartInstance.update();
      }
    } catch (e) {
      // ignore
    }
  }, [timeframe]);

  return (
    <div className="goal-progress-card card">
      <div className="gp-top">
        <h3>Goal Progress</h3>
        <div className="gp-controls">
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>

      <div className="gp-chart-wrapper">
        <Bar ref={chartRef} data={data} options={options} />
      </div>

      <div className="gp-legend">
        <div className="legend-item">
          <span className="dot workout" /> Workout
        </div>
        <div className="legend-item">
          <span className="dot calories" /> Calories
        </div>
        <div className="legend-item">
          <span className="dot steps" /> Steps
        </div>
      </div>
    </div>
  );
};

export default GoalProgress;
