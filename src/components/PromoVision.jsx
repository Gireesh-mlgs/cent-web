import React from 'react';
import './PromoVision.css';

const PromoVision = () => {
  return (
    <section className="promo-vision max-w-container">
      <div className="promo-inner">
        {/* Left Nav */}
        <div className="vertical-nav-container">
          <div className="sidebar-logo">cent</div>
          <ul className="vertical-nav">
            <li>Invest in portfolio</li>
            <li className="active">Returns</li>
          </ul>
        </div>
        
        {/* Right Content box */}
        <div className="promo-content">
          <div className="promo-box glass-effect">
            <h2 className="promo-title">
              Smarter Investing With AI Forecasts, Strong Security, and Global Assets
            </h2>
            
            <div className="promo-features">
              <div className="feature-item">
                <div className="feature-marker"></div>
                <h4>Pro Trading</h4>
                <p>Trade you portfolio in real time using our advanced interface</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-marker"></div>
                <h4>Better security</h4>
                <p>State-of-the-art security measures to protect your money</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-marker"></div>
                <h4>AI forecasts</h4>
                <p>We use the newest AI tools to actively monitor the market events</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoVision;
