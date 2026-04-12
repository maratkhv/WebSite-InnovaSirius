import React from 'react';
import './OfflineScreen.css';

import logo from '../assets/svg/Logo.svg'; 

export default function OfflineScreen() {
  
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="offline-screen">
      {/* Шапка с логотипом */}
      <header className="offline-header">
        <div className="offline-header__content">
          <img src={logo} alt="Logo" className="offline-logo" />
        </div>
        <div className="offline-line"></div>
      </header>
      <main className="offline-main">
        <div className="offline-content">
          <h1 className="offline-title">Кажется, произошла ошибка...</h1>
          <button className="offline-btn" onClick={handleReload}>
            Обновить страницу
          </button>
        </div>
      </main>
    </div>
  );
}