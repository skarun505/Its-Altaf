"use client";
import React from "react";
import { services } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Megaphone,
  Palette,
  Clapperboard,
  SearchCheck,
  TrendingUp,
  Activity,
  FileBarChart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Megaphone,
  Palette,
  Clapperboard,
  SearchCheck,
  TrendingUp,
  Activity,
  FileBarChart,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Core Growth Pillars"
          subtitle="Precision paid media infrastructure, scroll-stopping video creative production, and revenue-maximizing CRO."
        >
          {services.heading}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon] || Megaphone;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="glass-panel-interactive rounded-3xl p-7 flex flex-col justify-between h-full border border-cyan-500/15 group relative overflow-hidden">
                  {/* Subtle top corner gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 via-purple-500/5 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-cyan-500/20 transition-all" />

                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-cyan-300">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {s.desc}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Deliverables:</p>
                      {s.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tool Stack & Metric Highlight */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-500/20">
                        {s.metricHighlight}
                      </span>
                      <a
                        href="#contact"
                        className="text-xs font-medium text-slate-400 hover:text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        Inquire <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
