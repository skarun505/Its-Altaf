"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { ArrowRight, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const tickerItems = [...hero.ticker, ...hero.ticker];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-purple-600/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-purple-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-content mx-auto px-6 w-full">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 backdrop-blur-md shadow-sm shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            {hero.badge}
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {hero.statusBadge}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-5xl text-white"
        >
          {hero.headlineStart}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
            {hero.headlineGradient}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-300 text-lg sm:text-xl mt-6 max-w-3xl font-normal leading-relaxed"
        >
          {hero.subheading}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mt-9"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2.5 glass-panel-interactive px-6 py-3.5 rounded-xl text-slate-200 hover:text-white font-medium text-base hover:border-cyan-500/40 transition-all"
          >
            <span>{hero.ctaSecondary}</span>
          </a>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 ml-2">
            <ShieldCheck size={16} className="text-cyan-400" />
            <span>Zero Long-Term Lock-in</span>
          </div>
        </motion.div>

        {/* 4 Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-14 pt-8 border-t border-cyan-500/15"
        >
          {hero.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-panel rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-cyan-500/35 transition-colors"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-cyan-500/20 transition-all" />
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white tracking-tight">
                {stat.value}
              </p>
              <h3 className="font-semibold text-slate-200 text-sm mt-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                {stat.label}
              </h3>
              <p className="text-slate-400 text-xs mt-1 font-mono">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="marquee-wrap mt-14 border-y border-cyan-500/15 py-3.5 overflow-hidden bg-slate-950/40 backdrop-blur-md">
        <div className="marquee-track flex gap-8 w-max items-center">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="font-mono text-slate-300 text-xs sm:text-sm whitespace-nowrap flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              <span className="font-medium">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
