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
    <div className="min-h-screen bg-goyim-light text-goyim-dark selection:bg-goyim-red selection:text-white font-sans bg-star-pattern">
      <Navbar />
      <main>
        <Hero />
        <Lore />
        <div className="border-t border-goyim-red/10"></div>
        <MemeGenerator />
        <div className="border-t border-goyim-red/10"></div>
        <About />
        <div className="border-t border-goyim-red/10"></div>
        <Chart />
      </main>
      <Footer />
    </div>
  );
}

export default App;