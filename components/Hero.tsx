"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const tickerItems = [...hero.ticker, ...hero.ticker];
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-content mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-accent text-sm mb-4"
        >
          Bangalore, India · MBA in Marketing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Performance Marketer <span className="text-accent">|</span> Creative Strategist{" "}
          <span className="text-accent">|</span> Video Editor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted text-lg md:text-xl mt-6 max-w-2xl"
        >
          {hero.subheading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            {hero.ctaPrimary} <ArrowRight size={18} />
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 rounded-xl text-primary hover:bg-surface transition-colors"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
      {/* Metrics ticker */}
      <div className="marquee-wrap mt-20 border-y border-line py-4 overflow-hidden">
        <div className="marquee-track flex gap-12 w-max">
          {tickerItems.map((item, i) => (
            <span key={i} className="font-mono text-warm text-sm whitespace-nowrap">
              {item} <span className="text-muted mx-4">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
