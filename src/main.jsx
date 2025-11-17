// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import TestApp from './TestApp';
import App from './App';
import DebugApp from './DebudApp';
import './index.css'; // optional but keep if you have it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <DebugApp /> */}
    {/* <TestApp /> */}
  </React.StrictMode>
);
