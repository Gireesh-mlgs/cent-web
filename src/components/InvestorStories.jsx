import React from 'react';
import './InvestorStories.css';
import portraitImg from '../assets/portrait.png';

const InvestorStories = () => {
  return (
    <section className="investor-stories max-w-container">
      <div className="investor-inner">
        {/* Left Nav */}
        <div className="vertical-nav-container">
          <div className="sidebar-logo">cent</div>
          <ul className="vertical-nav">
            <li>Invest in portfolio</li>
            <li>Returns</li>
            <li>Market Prices</li>
            <li className="active">Investor Stories</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="investor-content">
          <h2 className="section-title">Investor Stories</h2>

          <div className="stories-grid">

            <div className="story-card floating-animation" style={{ animationDelay: '0s' }}>
              <div className="story-image">
                <img src="/1_3.jpeg" alt="Investor 1" className="blend-img" />
              </div>
              <div className="story-info">
                <span className="quote">"I love investing with cent."</span>
                <span className="author">Alex Doe</span>
              </div>
            </div>

            <div className="story-card floating-animation" style={{ animationDelay: '2s' }}>
              <div className="story-image">
                <img src="/1_3.jpeg" alt="Investor 2" className="blend-img" />
              </div>
              <div className="story-info">
                <span className="quote">"Better than my bank."</span>
                <span className="author">John Smith</span>
              </div>
            </div>

            <div className="story-card floating-animation" style={{ animationDelay: '4s' }}>
              <div className="story-image">
                <img src="/1_3.jpeg" alt="Investor 3" className="blend-img" />
              </div>
              <div className="story-info">
                <span className="quote">"High yields, low stress."</span>
                <span className="author">Sarah Jane</span>
              </div>
            </div>

            <div className="story-card floating-animation" style={{ animationDelay: '1s' }}>
              <div className="story-image">
                <img src="/1_3.jpeg" alt="Investor 4" className="blend-img" />
              </div>
              <div className="story-info">
                <span className="quote">"Great community."</span>
                <span className="author">Mike Row</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InvestorStories;
