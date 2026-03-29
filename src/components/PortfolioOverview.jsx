import React, { useState, useEffect } from 'react';
import './PortfolioOverview.css';

// Glitch/Scramble effect for numbers giving it a modern terminal or high-tech finance feel
const ScrambledNumber = ({ value }) => {
  const [displayText, setDisplayText] = useState(value);

  useEffect(() => {
    let iteration = 0;
    const chars = "₹0123456789,.-";
    const interval = setInterval(() => {
      setDisplayText(
        value.split('').map((char, index) => {
          if (index < iteration) return char;
          // Don't scramble spaces
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (iteration >= value.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{displayText}</span>;
}

const PortfolioOverview = () => {
  const [activeTag, setActiveTag] = useState('Crypto');
  const [hoverIndex, setHoverIndex] = useState(null);

  // Interactive mock data simulating portfolio switches
  const portfolioData = {
    'Alpha': { balance: '8 400', worth: '₹32,105.00', invested: '₹20,000.00', earned: '₹12,105.00', bars: [10, 15, 20, 25, 30, 35, 40, 45, 50, 60] },
    'Beta': { balance: '1 250', worth: '₹15,200.50', invested: '₹14,000.00', earned: '₹1,200.50', bars: [20, 22, 24, 26, 28, 30, 32, 28, 26, 30] },
    'Crypto': { balance: '3 000', worth: '₹27,051.42', invested: '₹44,577.10', earned: '-₹17,525.68', bars: [10, 20, 15, 35, 20, 40, 55, 30, 45, 60] },
    'Equity': { balance: '12 500', worth: '₹142,000.00', invested: '₹100,000.00', earned: '₹42,000.00', bars: [5, 12, 18, 25, 35, 42, 50, 58, 65, 75] },
    'Bonds': { balance: '55 000', worth: '₹56,100.00', invested: '₹55,000.00', earned: '₹1,100.00', bars: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39] }
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const currentData = portfolioData[activeTag];

  return (
    <section id="portfolio" className="portfolio max-w-container">
      <div className="portfolio-inner">
        {/* Left Sidebar */}
        <div className="portfolio-sidebar">
          <div className="sidebar-logo">cent</div>
          <div className="balance-container">
            <span className="currency">₹</span>
            <span className="amount">
              <ScrambledNumber value={currentData.balance} />
            </span>
          </div>
          
          <div className="tags">
            {Object.keys(portfolioData).map(tag => (
              <span 
                key={tag}
                className={`tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="portfolio-desc">
            A simple overview of your {activeTag.toLowerCase()} investments across all
            categories in terms of performance vs cost and
            tax liabilities / deductions in the current
            portfolio strategy.
          </p>
        </div>

        {/* Right Main Content */}
        <div className="portfolio-main floating-animation" style={{ animationDelay: '0s' }}>
          {/* Mock Stats Header */}
          <div className="portfolio-stats">
            <div className="stat-group">
              <span className="label">Total worth</span>
              <span className="value">
                 <ScrambledNumber value={currentData.worth} />
              </span>
            </div>
            <div className="stat-group">
              <span className="label">Total invested</span>
              <span className="value">
                 <ScrambledNumber value={currentData.invested} />
              </span>
            </div>
            <div className="stat-group">
              <span className="label">Earned interest</span>
              <span className="value" style={{ color: currentData.earned.startsWith('-') ? '#ef4444' : 'inherit' }}>
                 <ScrambledNumber value={currentData.earned} />
              </span>
            </div>
          </div>

          {/* Yellow Chart Container */}
          <div className="chart-container interactive-chart-glass">
            <div className="chart-header">
              <h3>INVEST IN GROWTH</h3>
              <div className="chart-legend">
                <span className="legend-item"><span className="dot dot-dark pulse-dot"></span> Launch timeline</span>
                <span className="legend-item"><span className="dot dot-white pulse-dot" style={{animationDelay: "0.5s"}}></span> Initial capital</span>
                <span className="legend-item"><span className="dot dot-black pulse-dot" style={{animationDelay: "1s"}}></span> Launch balance</span>
              </div>
            </div>

            <div className="chart-area">
              <div className="y-axis">
                <span>25M</span>
                <span>20M</span>
                <span>15M</span>
                <span>10M</span>
                <span>5M</span>
                <span>0</span>
              </div>
              <div className="bar-wrapper">
                {/* Fixed key so elements morph heights fluidly instead of remounting */}
                {currentData.bars.map((height, index) => (
                  <div 
                    key={index} 
                    className="stacked-bar-col hoverable-bar-col"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {/* Floating Tooltip */}
                    <div className={`chart-tooltip ${hoverIndex === index ? 'show-tooltip' : ''}`}>
                       <div><span className="tooltip-dot dot-dark"></span> <strong>{Math.floor(height * 2.5)}%</strong></div>
                       <div><span className="tooltip-dot dot-white"></span> <strong>{Math.floor(height * 1.5)}%</strong></div>
                       <div><span className="tooltip-dot dot-black"></span> <strong>{height}%</strong></div>
                    </div>

                    <div className={`stacked-bar ${hoverIndex !== null && hoverIndex !== index ? 'dimmed-bar' : ''}`}>
                      {/* Fluid cubic bezier transitions applied to height via CSS */}
                      <div className="bar-segment top" style={{ height: `${height}%` }}></div>
                      <div className="bar-segment middle" style={{ height: `${height * 1.5}%` }}></div>
                      <div className="bar-segment bottom" style={{ height: `${height * 2}%` }}></div>
                    </div>
                    <span className={`x-label ${hoverIndex === index ? 'active-label' : ''}`}>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
