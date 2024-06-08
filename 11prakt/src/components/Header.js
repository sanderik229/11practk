import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <p className="PROMO-TITEL-RU">
        <span className="text-wrapper-2">PROMO. </span>
        <span className="span">T</span>
        <span className="text-wrapper-2">ITEL.RU</span>
      </p>
      <div className="navbar">
        <div className="text-wrapper-4">Главная</div>
        <div className="text-wrapper-4">0 сервере</div>
        <div className="text-wrapper-4">Новости</div>
        <div className="text-wrapper-4">Магазин</div>
      </div>
    </header>
  );
};

export default Header;
