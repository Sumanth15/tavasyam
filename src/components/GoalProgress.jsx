import React, { useState, useMemo } from "react";
import "./GoalProgress.css";

const GoalProgress = () => {
  const [timeframe, setTimeframe] = useState("Weekly");

  const weekData = [
    { day: "Mon", workout: 30, calories: 55, steps: 75 },
    { day: "Tue", workout: 43, calories: 33, steps: 50 },
    { day: "Wed", workout: 75, calories: 50, steps: 55 },
    { day: "Thu", workout: 63, calories: 80, steps: 43 },
    { day: "Fri", workout: 33, calories: 55, steps: 63 },
    { day: "Sat", workout: 33, calories: 55, steps: 63 },
    { day: "Sun", workout: 33, calories: 55, steps: 63 },
  ];

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const val = ctx.parsed && (ctx.parsed.y ?? ctx.parsed);
              return `${ctx.dataset.label}: ${val}%`;
            },
          },
        },
      },
      layout: { padding: { top: 12, right: 8, bottom: 8, left: 0 } },
      animation: { duration: 700, easing: "easeOutCubic" },
      scales: {
        x: { stacked: false, offset: true, grid: { display: false } },
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20, callback: (v) => `${v}%` },
          grid: { color: "#f0f0f0" },
        },
      },
    }),
    []
  );

  return (
    <div className="goal-progress-container">
      <div className="header">
        <h2>Goal Progress</h2>
        <div className="dropdown">
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>

      <div className="chart-container">
        <div className="y-axis">
          <span>100%</span>
          <span>80%</span>
          <span>60%</span>
          <span>40%</span>
          <span>20%</span>
          <span>0%</span>
        </div>

        <div className="chart">
          <div className="grid-lines">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grid-line"></div>
            ))}
          </div>

          <div className="bars">
            {weekData.map((data, index) => (
              <div key={index} className="bar-group">
                <div className="bars-wrapper">
                  <div className="bar workout" style={{ height: `${data.workout}%` }} />
                  <div className="bar calories" style={{ height: `${data.calories}%` }} />
                  <div className="bar steps" style={{ height: `${data.steps}%` }} />
                </div>
                <span className="day-label">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="dot workout" />
          <span>Workout</span>
        </div>
        <div className="legend-item">
          <span className="dot calories" />
          <span>Calories</span>
        </div>
        <div className="legend-item">
          <span className="dot steps" />
          <span>Steps</span>
        </div>
      </div>
    </div>
  );
};

export default GoalProgress;
