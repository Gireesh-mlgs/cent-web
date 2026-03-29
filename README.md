# cent - Smart Finance Platform

<div align="center">
  <img src="./public/icons.svg" alt="cent logo" width="120" />
</div>

<br />

**cent** is a hyper-modern, interactive frontend finance dashboard built as a masterclass in dynamic React architectures and Vanilla CSS animations. It connects real-time stock data pipelines and leverages ultra-low latency Large Language Models (LLMs) to provide automated market insights.

## ✨ Key Features

- **Live Market Data:** Integrates directly with the **Finnhub Websocket API** to trace and retrieve live market indicators (AAPL, MSFT, TSLA, AMZN, GOOGL).
- **Embedded AI Analyst:** Replaces static table data with intelligent logic via the **Groq API** (Llama-3.3-70b-versatile). Users can click *Ask AI* directly on market rows to receive instant, 2-sentence "Buy/Hold/Sell" strategies.
- **Antigravity Particle Engine:** Ditches heavy background libraries for a blazing fast, natively coded HTML5 WebGL `<canvas>` layer. Floating neon particles map to your browser's mouse events, instantly generating anti-gravity repulsion fields interacting smoothly behind the DOM.
- **Fluid Morphing Dashboards:** Charts do not just remount on click; CSS `cubic-bezier` height transitions organically morph data layers and slide into completely new layouts in response to dynamic mock state logic!
- **Fully Localized:** Custom logic scales raw USD values onto real-time ~83 INR exchange rates and formats the currency globally as Indian Rupees (₹) seamlessly.

## 🛠 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Highly modular Vanilla CSS variables (No external CSS frameworks required)
- **APIs:** 
  - `Finnhub` (Websocket Quotations)
  - `Groq` (AI Inference)

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gireesh-mlgs/cent-web.git
   cd cent-web
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the core root directory of the project and add your two secure API keys:
   ```env
   VITE_FINNHUB_API_KEY=your_finnhub_key_here
   VITE_GROQ_API_KEY=your_groq_key_here
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```

## 🎨 Architecture & Aesthetics
This layout is focused entirely on **premium glassmorphic data visualization** instead of crowded generic layouts.
- **Custom `ScrambleText` Hook:** Number nodes rapidly iterate raw `0123456789,.-` string literals on render to generate high-end matrix/cyberpunk styled terminal boots before resolving to their exact data strings.
- **Global Smooth Scrolling:** CSS attributes lock standard browser jerks into smooth slides matching modern anchor linking behavior.

---
> **Disclaimer:** cent is a technical template demonstrating React UI mechanics, generative AI integration, and CSS animations. It does not provide real financial or trading advice, and real money should not be used on the platform. All mock data (outside of the Finnhub keys) is theoretical.
