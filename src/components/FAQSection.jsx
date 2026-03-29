import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the minimum investment amount?",
      a: "With our simple to understand platform, you can start investing with just a ₹4,000 opening deposit. Trading on our platform doesn't have minimum requirements for stock trades, however options require sufficient capital."
    },
    {
      q: "How does the AI growth forecast work?",
      a: "Our proprietary AI analyzes millions of data points across global markets in real-time to generate probabilistic growth models for various asset classes."
    },
    {
      q: "Are there any consultation fees?",
      a: "No, cent does not charge any consultation fees. Our business model relies on small fractional percentage fees on profitable trades."
    },
    {
      q: "How safe are my investments here?",
      a: "We use bank-level 256-bit encryption and all fiat deposits are insured up to ₹20,000,000. Digital assets are kept in cold storage for maximum security."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section max-w-container">
      <div className="faq-inner">
        {/* Left Nav */}
        <div className="vertical-nav-container">
          <div className="sidebar-logo">cent</div>
          <ul className="vertical-nav">
            <li>Invest in portfolio</li>
            <li>Returns</li>
            <li>Market Prices</li>
            <li>Investor Stories</li>
            <li className="active">FAQ</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="faq-content">
          <h2 className="section-title">Need Help</h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.q}</h3>
                  <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
