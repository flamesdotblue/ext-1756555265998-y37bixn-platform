import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Wind, Dumbbell } from 'lucide-react';

const products = [
  {
    title: 'Surge Tight // Photon',
    price: '$138',
    tagline: 'Reflective micro-sheen, night-ready.',
    accent: 'from-fuchsia-500 to-purple-500',
    icon: Flame,
  },
  {
    title: 'AeroShell Jacket',
    price: '$228',
    tagline: 'Stormproof, weightless, unstoppable.',
    accent: 'from-cyan-400 to-blue-500',
    icon: Wind,
  },
  {
    title: 'HydraFlex Bra',
    price: '$78',
    tagline: 'Sculpted support with cool-to-touch knit.',
    accent: 'from-emerald-400 to-teal-500',
    icon: Droplets,
  },
  {
    title: 'CoreLift Short 7"',
    price: '$88',
    tagline: 'Power stretch. Zero distraction.',
    accent: 'from-amber-400 to-red-500',
    icon: Dumbbell,
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">The Bold Capsule</h2>
            <p className="mt-2 text-white/70">Iconic silhouettes reimagined with future-forward materials.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm rounded-full border border-white/10 px-4 py-2 hover:bg-white/10 transition">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xs uppercase tracking-widest text-white/50">Performance</span>
                  <p.icon className="w-5 h-5 text-white/70" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{p.tagline}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-white/90 font-semibold">{p.price}</span>
                    <button className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition">Add</button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
