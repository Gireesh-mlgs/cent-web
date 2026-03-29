import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header max-w-container">
      <div className="header-inner">
        <div className="logo">
          <h1>cent</h1>
        </div>
        <nav className="nav-links">
          <a href="#invest">Invest</a>
          <a href="#features">Features</a>
          <a href="#growth">Growth</a>
          <a href="#about">About us</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-outline">Start for free</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
