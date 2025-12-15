import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Chart from './components/Chart';
import About from './components/About';
import Lore from './components/Lore';
import MemeGenerator from './components/MemeGenerator';
import MemeGallery from './components/MemeGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dojo-cream text-dojo-ink selection:bg-dojo-red selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Chart />
        <Lore />
        <div className="border-t border-dojo-charcoal/10"></div>
        <MemeGenerator />
        <div className="border-t border-dojo-charcoal/10"></div>
        <MemeGallery />
        <div className="border-t border-dojo-charcoal/10"></div>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;