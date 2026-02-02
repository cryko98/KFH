import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chart from './components/Chart';
import About from './components/About';
import Lore from './components/Lore';
import MemeGenerator from './components/MemeGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zion-black text-zion-white selection:bg-zion-gold selection:text-zion-black font-sans bg-star-pattern-dark">
      <Navbar />
      <main>
        <Hero />
        <Lore />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zion-gold/30 to-transparent"></div>
        <MemeGenerator />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zion-gold/30 to-transparent"></div>
        <About />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zion-gold/30 to-transparent"></div>
        <Chart />
      </main>
      <Footer />
    </div>
  );
}

export default App;