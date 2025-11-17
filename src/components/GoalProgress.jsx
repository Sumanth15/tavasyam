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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoalProgress = () => {
  const [timeframe, setTimeframe] = useState('Weekly');

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

  const chartRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      requestAnimationFrame(() => {
        const ref = chartRef.current;
        if (!ref) return;

        try {
          if (typeof ref.resize === 'function') {
            ref.resize();
          } else if (ref.chartInstance && typeof ref.chartInstance.resize === 'function') {
            ref.chartInstance.resize();
          } else if (ref.chart && typeof ref.chart.resize === 'function') {
            ref.chart.resize();
          }
        } catch (err) {
        }
      });
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const ref = chartRef.current;
    if (!ref) return;
    try {
      const chartInstance = ref.chart ?? ref.chartInstance ?? ref;
      if (chartInstance && typeof chartInstance.update === 'function') {
        chartInstance.update();
      }
    } catch (e) {
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
