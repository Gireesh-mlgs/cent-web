import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [fundsTotal, setFundsTotal] = useState('₹82,750');

  const handleFundChange = (e) => {
    setFundsTotal(e.target.value);
  };

  return (
    <section className="hero max-w-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Invest Smarter<br />
          with Tools Built<br />
          for Clarity
        </h1>
        <p className="hero-subtitle">
          Get unique insights, boost your portfolios,<br />
          and make smart data-driven investment decisions.        </p>
        <div className="hero-actions">
          <button className="btn btn-outline">Request Demo</button>
          <button className="btn btn-primary">Get the App</button>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-card stat-card floating-animation" style={{ animationDelay: '0s' }}>
          <div className="stat-header">
            <span>Portfolio Value</span>
            <span className="badge">All</span>
          </div>
          <div className="stat-value">₹1,350</div>
        </div>

        <div className="floating-card chart-card yellow-card floating-animation" style={{ animationDelay: '1s' }}>
          <div className="chart-title">In 2026</div>
          <div className="chart-visual mock-line-chart">
            <svg viewBox="0 0 100 30" className="mock-svg">
              <path d="M0,25 Q10,15 20,20 T40,10 T60,15 T80,5 T100,0" fill="none" stroke="#1a1a1a" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="floating-card bar-card floating-animation" style={{ animationDelay: '2s' }}>
          <div className="chart-title">Total Invests</div>
          <div className="mock-bar-chart">
            <div className="bar" style={{ height: '30%' }}></div>
            <div className="bar" style={{ height: '50%' }}></div>
            <div className="bar" style={{ height: '40%' }}></div>
            <div className="bar" style={{ height: '80%' }}></div>
            <div className="bar yellow-bar" style={{ height: '100%' }}></div>
            <div className="bar" style={{ height: '60%' }}></div>
          </div>
        </div>

        <div className="floating-card select-card floating-animation" style={{ animationDelay: '0.5s' }}>
          <span>Funds Total</span>
          <select value={fundsTotal} onChange={handleFundChange}>
            <option value="₹82,750">₹82,750</option>
            <option value="₹150,000">₹150,000</option>
            <option value="₹500,000">₹500,000</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Hero;
