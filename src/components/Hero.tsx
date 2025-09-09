"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-starfield relative">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="container-px min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-black tracking-[0.25em]"
        >
          P <span className="opacity-80">RARTES</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl opacity-90"
        >
          Daydreaming Today, Shaping Art Tomorrow
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a href="#services" className="px-5 py-2 rounded-2xl bg-white text-black text-sm font-semibold">
            Explore Work
          </a>
          <a href="#contact" className="px-5 py-2 rounded-2xl border border-white/40 text-sm">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
