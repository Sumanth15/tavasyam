// // App.jsx
// import React, { useState } from 'react';
// import './App.css';

// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import HeroBanner from './components/HeroBanner';
// import StatsCards from './components/StatsCards';
// import GoalProgress from './components/GoalProgress';
// import FoodTable from './components/FoodTable';
// import MySchedule from './components/MySchedule';
// import Goals from './components/Goals';
// import UpgradeCard from './components/UpgradeCard';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     console.log('toggleSidebar ->', !sidebarOpen); // debug log
//     setSidebarOpen((s) => !s);
//   };
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="app-shell">
//       <aside className={`sidebar-area ${sidebarOpen ? 'open' : ''}`} aria-hidden={!sidebarOpen}>
//         <Sidebar onClose={closeSidebar} />
//       </aside>

//       <header className="header-area">
//         {/* pass toggleSidebar to Header */}
//         <Header onToggleSidebar={toggleSidebar} />
//       </header>

//       <main className="main-area" onClick={() => sidebarOpen && closeSidebar()}>
//         <div className="main-inner">
//           <section className="hero-section"><HeroBanner /></section>
//           <section className="status-row"><StatsCards /></section>
//           <section className="goal-section"><GoalProgress /></section>
//           <section className="food-section"><FoodTable /></section>
//         </div>
//       </main>

//       <aside className="right-area">
//         <div className="right-stack">
//           <MySchedule />
//           <Goals />
//           <UpgradeCard />
//         </div>
//       </aside>
//     </div>
//   );
// }

// export default App;





// src/App.jsx
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
    // debug: uncomment if you want logs
    // console.log('toggleSidebar', !sidebarOpen);
    setSidebarOpen((s) => !s);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Force a light reflow + dispatch a resize event when the window is resized.
  // This helps libraries (charts, canvases) and CSS layouts recalc immediately
  // instead of only on full page reload.
  useEffect(() => {
    const onResize = () => {
      // set a CSS var (cheap) so the browser recalculates layout
      document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
      // dispatch a global resize event so third-party libs react
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('resize', onResize);
    // initialize once
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="app-shell">
      {/* Sidebar (overlay on small screens) */}
      <aside
        className={`sidebar-area ${sidebarOpen ? 'open' : ''}`}
        aria-hidden={!sidebarOpen}
      >
        <Sidebar onClose={closeSidebar} />
      </aside>

      {/* Header (hamburger toggles sidebar) */}
      <header className="header-area">
        <Header onToggleSidebar={(e) => { 
          // defensive: stop propagation if header passes event
          if (e && e.stopPropagation) e.stopPropagation();
          toggleSidebar();
        }} />
      </header>

      {/* Main area: clicking here closes sidebar on small screens */}
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

      {/* Right column (stacks under main on small screens) */}
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
