// src/App.jsx  (Debug-style app)
import React from 'react';
import './App.css'; // keep your app layout css (the shell)
import ErrorBoundary from './ErrorBoundary';

// Import your components (paths must match your project)
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import StatsCards from './components/StatsCards';
import GoalProgress from './components/GoalProgress';
import FoodTable from './components/FoodTable';
import MySchedule from './components/MySchedule';
import Goals from './components/Goals';
import UpgradeCard from './components/UpgradeCard';

/*
  This debug app uses ErrorBoundary to catch any component errors and continue rendering.
  It will show a friendly error box where a component fails so you can identify the culprit.
*/

export default function App() {
  return (
    <div className="app-shell" style={{ minHeight: '100vh' }}>
      <aside className="sidebar-area">
        <ErrorBoundary name="Sidebar"><Sidebar /></ErrorBoundary>
      </aside>

      <header className="header-area">
        <ErrorBoundary name="Header"><Header /></ErrorBoundary>
      </header>

      <main className="main-area" style={{ overflow: 'auto' }}>
        <div className="main-inner">
          <section className="hero-section">
            <ErrorBoundary name="HeroBanner"><HeroBanner /></ErrorBoundary>
          </section>

          <section className="status-row">
            <ErrorBoundary name="StatsCards"><StatsCards /></ErrorBoundary>
          </section>

          <section className="goal-section">
            <ErrorBoundary name="GoalProgress"><GoalProgress /></ErrorBoundary>
          </section>

          <section className="food-section">
            <ErrorBoundary name="FoodTable"><FoodTable /></ErrorBoundary>
          </section>
        </div>
      </main>

      <aside className="right-area">
        <div className="right-stack">
          <ErrorBoundary name="MySchedule"><MySchedule /></ErrorBoundary>
          <ErrorBoundary name="Goals"><Goals /></ErrorBoundary>
          <ErrorBoundary name="UpgradeCard"><UpgradeCard /></ErrorBoundary>
        </div>
      </aside>
    </div>
  );
}
