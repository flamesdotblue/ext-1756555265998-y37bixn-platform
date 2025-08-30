import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import TechMaterials from './components/TechMaterials.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <ProductGrid />
        <TechMaterials />
      </main>
      <footer className="border-t border-white/10 py-10 text-sm text-white/60">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Lululemon — Bold Edition (Concept)</p>
          <p className="text-white/40">Designed for the fearless. Built to move.</p>
        </div>
      </footer>
    </div>
  );
}
