import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import StatsCards from './components/StatsCards';
import GoalProgress from './components/GoalProgress';
import FoodTable from './components/FoodTable';
import MySchedule from './components/MySchedule';
import Goals from './components/Goals';
import UpgradeCard from './components/UpgradeCard';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((s) => !s);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  useEffect(() => {
    const onResize = () => {
      document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="app-shell">
      <aside
        className={`sidebar-area ${sidebarOpen ? 'open' : ''}`}
        aria-hidden={!sidebarOpen}
      >
        <Sidebar onClose={closeSidebar} />
      </aside>

      <header className="header-area">
        <Header onToggleSidebar={(e) => { 
          if (e && e.stopPropagation) e.stopPropagation();
          toggleSidebar();
        }} />
      </header>

      <main
        className="main-area"
        onClick={() => {
          if (sidebarOpen) closeSidebar();
        }}
      >
        <div className="main-inner">
          <section className="hero-section">
            <HeroBanner />
          </section>

          <section className="status-row">
            <StatsCards />
          </section>

          <section className="goal-section">
            <GoalProgress />
          </section>

          <section className="food-section">
            <FoodTable />
          </section>
        </div>
      </main>

      <aside className="right-area">
        <div className="right-stack">
          <MySchedule />
          <Goals />
          <UpgradeCard />
        </div>
      </aside>
    </div>
  );
}
