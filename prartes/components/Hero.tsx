"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-screen overflow-hidden">
      {/* Video fills the entire viewport */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {/* Optional secondary source */}
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Contrast overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Centered text */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white drop-shadow-md text-5xl sm:text-7xl font-light tracking-[0.2em]"
          >
            PRARTES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/90 drop-shadow text-base sm:text-xl"
          >
            Daydreaming Today, Shaping Art Tomorrow
          </motion.p>
        </div>
      </div>
    </section>
  );
}
