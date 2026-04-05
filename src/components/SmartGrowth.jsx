import React from 'react';
import './SmartGrowth.css';

const SmartGrowth = () => {
  return (
    <section id="growth" className="smart-growth max-w-container">
      <div className="growth-inner">
        
        {/* Left Nav */}
        <div className="vertical-nav-container">
          <div className="sidebar-logo">cent</div>
          <ul className="vertical-nav">
            <li className="active">Invest in portfolio</li>
            <li>Returns</li>
          </ul>
        </div>
        
        {/* Right Content */}
        <div className="growth-content">
          <h2 className="section-title">Smart Growth</h2>
          
          <div className="stats-list">
            
            <div className="stat-row">
              <div className="stat-number">10K+</div>
              <div className="stat-text">Active investors trust us with building wealth and diversifying their portfolios</div>
              <div className="stat-icon">&#8594;</div>
            </div>
            
            <div className="stat-row">
              <div className="stat-number">50M</div>
              <div className="stat-text">Funds under management securely hosted and distributed for best growth</div>
              <div className="stat-icon">&#8594;</div>
            </div>
            
            <div className="stat-row">
              <div className="stat-number">12%</div>
              <div className="stat-text">Average annual return over the life span of the platform, beating standard market indexes</div>
              <div className="stat-icon">&#8594;</div>
            </div>
            
            <div className="stat-row">
              <div className="stat-number">100+</div>
              <div className="stat-text">Countries globally where our platform is supported and actively used</div>
              <div className="stat-icon">&#8594;</div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartGrowth;
