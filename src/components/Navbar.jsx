import React from 'react';
import { Menu, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <button aria-label="Menu" className="p-2 rounded-full hover:bg-white/10 transition">
                <Menu className="w-5 h-5" />
              </button>
              <a href="#" className="inline-flex items-center gap-2">
                <span className="text-xs tracking-widest text-white/60">LULULEMON</span>
                <span className="text-white font-semibold">BOLD</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#shop" className="text-white/80 hover:text-white transition">Shop</a>
              <a href="#tech" className="text-white/80 hover:text-white transition">Technology</a>
              <a href="#community" className="text-white/80 hover:text-white transition">Community</a>
            </nav>
            <div className="flex items-center gap-2">
              <button aria-label="Account" className="p-2 rounded-full hover:bg-white/10 transition">
                <User className="w-5 h-5" />
              </button>
              <button aria-label="Bag" className="p-2 rounded-full hover:bg-white/10 transition">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
