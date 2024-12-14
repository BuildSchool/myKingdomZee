import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default App;