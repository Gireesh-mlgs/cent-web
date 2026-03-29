import React, { useState, useEffect } from 'react';
import './MarketPrices.css';

const MarketPrices = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // AI Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiData, setAiData] = useState({ symbol: '', response: '' });

  const symbols = ['AAPL', 'MSFT', 'TSLA', 'AMZN', 'GOOGL'];
  const finnhubKey = import.meta.env.VITE_FINNHUB_API_KEY;
  const groqKey = import.meta.env.VITE_GROQ_API_KEY;

  // Static mock data for bonds
  const bondsList = [
    { name: "US 10-Year T-Note", price: "₹8,175.50", change: "+0.12%", vol: "High", mcap: "N/A" },
    { name: "Corporate Bond Index", price: "₹8,731.60", change: "-0.05%", vol: "Med", mcap: "N/A" }
  ];

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      if (!finnhubKey) {
        console.error("Finnhub API key missing. Check .env.local");
        setLoading(false);
        return;
      }
      try {
        const promises = symbols.map(async (sym) => {
          const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=${finnhubKey}`);
          const data = await res.json();
          return {
            symbol: sym,
            name: sym, // Simulating name
            price: data.c ? (data.c * 83).toFixed(2) : '0.00',
            change: data.d ? (data.d > 0 ? `+${(data.d * 83).toFixed(2)}` : (data.d * 83).toFixed(2)) : '0.00',
            percent: data.dp ? (data.dp > 0 ? `+${data.dp.toFixed(2)}%` : `${data.dp.toFixed(2)}%`) : '0.00%'
          };
        });
        const results = await Promise.all(promises);
        setStocks(results);
      } catch (err) {
        console.error("Error fetching from Finnhub", err);
      }
      setLoading(false);
    };

    if (activeTab === 'All') {
      fetchStocks();
    }
  }, [activeTab]);

  const handleAskAI = async (stock) => {
    setAiModalOpen(true);
    setAiLoading(true);
    setAiData({ symbol: stock.symbol, response: '' });

    if (!groqKey) {
      setAiData({ symbol: stock.symbol, response: 'Error: Groq API key missing in .env.local file.' });
      setAiLoading(false);
      return;
    }

    try {
      const prompt = `The stock ${stock.symbol} is currently priced at ₹${stock.price} with a 24h change of ${stock.percent}. Act as a quick and authoritative financial expert and give a 2-sentence summary on whether I should Buy, Hold, or Sell purely based on this short term movement.`;

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }]
        })
      });

      const data = await res.json();

      if (data.error) {
        setAiData({ symbol: stock.symbol, response: `Groq AI Error: ${data.error.message}` });
      } else {
        const answer = data.choices && data.choices[0] ? data.choices[0].message.content : "AI could not generate a response. Please try again.";
        setAiData({ symbol: stock.symbol, response: answer });
      }
    } catch (err) {
      console.error(err);
      setAiData({ symbol: stock.symbol, response: `Network Error generating AI analysis: ${err.message}` });
    }
    setAiLoading(false);
  };

  return (
    <section id="prices" className="market-prices max-w-container">
      <div className="market-inner">
        {/* Left Nav */}
        <div className="vertical-nav-container">
          <div className="sidebar-logo">cent</div>
          <ul className="vertical-nav">
            <li>Invest in portfolio</li>
            <li>Returns</li>
            <li className="active">Market Prices</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="market-content">
          <h2 className="section-title">Market Prices</h2>

          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`}
              onClick={() => setActiveTab('All')}
            >
              All Assets (Live)
            </button>
            <button
              className={`tab-btn ${activeTab === 'Bonds' ? 'active' : ''}`}
              onClick={() => setActiveTab('Bonds')}
            >
              Bonds
            </button>
          </div>

          <div className="table-container">
            {loading && activeTab === 'All' ? (
              <div className="loading-state">Fetching real-time data from Finnhub...</div>
            ) : (
              <table className="prices-table">
                <thead>
                  <tr>
                    <th>Asset</th>
                    <th>Price</th>
                    <th>Change 24h</th>
                    <th>% Change</th>
                    <th>AI Insights</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === 'All' && stocks.map((asset, index) => (
                    <tr key={index}>
                      <td className="asset-name">
                        <span className="coin-icon" style={{ backgroundColor: '#111' }}></span>
                        {asset.name}
                      </td>
                      <td className="font-medium">₹{asset.price}</td>
                      <td className={asset.change.startsWith('-') ? 'text-red' : 'text-green'}>
                        {asset.change}
                      </td>
                      <td className={asset.percent.startsWith('-') ? 'text-red' : 'text-green'}>
                        {asset.percent}
                      </td>
                      <td>
                        <button className="btn btn-outline ai-btn" onClick={() => handleAskAI(asset)}>Ask AI</button>
                      </td>
                    </tr>
                  ))}

                  {activeTab === 'Bonds' && bondsList.map((bond, index) => (
                    <tr key={index}>
                      <td className="asset-name">{bond.name}</td>
                      <td className="font-medium">{bond.price}</td>
                      <td className={bond.change.startsWith('-') ? 'text-red' : 'text-green'}>{bond.change}</td>
                      <td className="text-secondary">{bond.vol}</td>
                      <td className="text-secondary">N/A</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* AI Modal */}
      {aiModalOpen && (
        <div className="ai-modal-overlay">
          <div className="ai-modal-content glass-effect">
            <button className="close-btn" onClick={() => setAiModalOpen(false)}>×</button>
            <h3>AI Analysis: {aiData.symbol}</h3>
            {aiLoading ? (
              <div className="ai-loading">cent AI is analyzing the stock movement...</div>
            ) : (
              <p className="ai-response">{aiData.response}</p>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default MarketPrices;
