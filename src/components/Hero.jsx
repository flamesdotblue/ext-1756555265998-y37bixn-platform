import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hItYec195M0PYk2X/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black"></div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-white/60 mb-4">Lululemon — Bold Edition</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Move fearlessly.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400">Dress like momentum.</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-xl">
            Performance gear engineered with audacity. Minimal by design, maximal by intent. Fabric tech that bends light and rules.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
              Shop the drop
            </a>
            <a href="#tech" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 border border-white/10 transition">
              Explore technology
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
