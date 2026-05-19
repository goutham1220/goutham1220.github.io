"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary-light/90" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl font-bold tracking-tight text-text-inverse md:text-7xl"
        >
          Goutham Swaminathan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-lg text-text-inverse/80 md:text-xl"
        >
          Data Science · Photography · Cinematography · Public Health
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-text-inverse/40 px-6 py-3 text-sm font-medium text-text-inverse transition-all hover:border-text-inverse hover:bg-text-inverse/10"
          >
            Learn More
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
