import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top max-w-container">
        <div className="footer-cta">
          <h2>Join us today for smarter trading</h2>
          <p>Invest smarter right now. Subscribe to our newsletter for the latest market insights.</p>
        </div>
        
        <div className="footer-subscribe">
          {!subscribed ? (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="submit-btn">→</button>
            </form>
          ) : (
            <div className="subscribe-success animate-fade-in">
              <span className="success-icon">✓</span>
              <p>Thank you! You are now subscribed.</p>
            </div>
          )}
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <a href="#">Home</a>
            <a href="#">Security</a>
            <a href="#portfolio">Investments</a>
          </div>
          <div className="link-column">
            <a href="#">Company</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <h1 className="footer-brand">cent</h1>
      </div>
    </footer>
  );
};

export default Footer;
