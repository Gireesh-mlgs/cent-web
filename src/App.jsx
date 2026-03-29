import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioOverview from './components/PortfolioOverview';
import SmartGrowth from './components/SmartGrowth';
import PromoVision from './components/PromoVision';
import MarketPrices from './components/MarketPrices';
import InvestorStories from './components/InvestorStories';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AntigravityBackground from './components/AntigravityBackground';

function App() {
  useEffect(() => {
    // Elegant reveal on scroll using Vanilla JS IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <AntigravityBackground />
      <div className="app-container">
        <Header />
        <main>
          <div className="reveal-on-scroll"><Hero /></div>
          <div className="reveal-on-scroll"><PortfolioOverview /></div>
          <div className="reveal-on-scroll"><SmartGrowth /></div>
          <div className="reveal-on-scroll"><PromoVision /></div>
          <div className="reveal-on-scroll"><MarketPrices /></div>
          <div className="reveal-on-scroll"><InvestorStories /></div>
          <div className="reveal-on-scroll"><FAQSection /></div>
        </main>
        <div className="reveal-on-scroll"><Footer /></div>
      </div>
    </>
  );
}

export default App;
