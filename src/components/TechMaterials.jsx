import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplet, Gauge } from 'lucide-react';

const features = [
  {
    title: 'NanoWeave Pro',
    desc: 'Ultrafine yarns create a liquid-smooth surface that wicks, breathes, and flexes like skin.',
    icon: Sparkles,
  },
  {
    title: 'Aegis DWR+',
    desc: 'Advanced water-repellent finish that maintains breathability in storm conditions.',
    icon: Droplet,
  },
  {
    title: 'Impact Shielding',
    desc: 'Strategic zones disperse stress and maintain structure during high-output training.',
    icon: Shield,
  },
  {
    title: 'ThermoFlow',
    desc: 'Micro-vent mapping optimizes heat release to keep your edge longer.',
    icon: Gauge,
  },
];

export default function TechMaterials() {
  return (
    <section id="tech" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.25em] text-xs text-white/60 mb-3">Material Science</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Technology that fades away—performance that doesn’t</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              We engineered fabrics to serve movement first. Lighter, cooler, stronger: every thread purposeful, every seam considered. Nothing extra—just extra-ordinary.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" /> Lab-verified. Athlete-obsessed.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-500/0 via-fuchsia-500/0 to-fuchsia-500/10 opacity-0 hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 border border-white/10">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{f.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="community" className="mt-20 rounded-3xl border border-white/10 overflow-hidden">
          <div className="relative p-8 md:p-12 bg-gradient-to-r from-fuchsia-900/10 via-purple-900/10 to-blue-900/10">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_0%,rgba(168,85,247,0.15),transparent)]" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold">Join the Bold Collective</h3>
                <p className="text-white/70 mt-2 max-w-2xl">Early access drops, studio sessions, and product field tests. Built with our community, for our community.</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">Sign up</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 border border-white/10 transition">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
