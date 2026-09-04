"use client";
import React from "react";
import { whyMe } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  BarChart3,
  Target,
  Clapperboard,
  TrendingUp,
  ShieldCheck,
  Workflow,
  Check,
  X,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  BarChart3,
  Target,
  Clapperboard,
  TrendingUp,
  ShieldCheck,
  Workflow,
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Competitive Advantage"
          subtitle={whyMe.subheading}
        >
          {whyMe.heading}
        </SectionHeading>

        {/* Agency Comparison Table */}
        <Reveal>
          <div className="glass-panel rounded-3xl overflow-hidden border border-cyan-500/20 mb-14 shadow-xl">
            <div className="p-6 sm:p-8 bg-slate-900/60 border-b border-slate-800">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Altaf Direct Partnership vs Traditional Agency Model
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Why modern high-growth brands prefer senior direct ownership over bloated retainers.
              </p>
            </div>

            <div className="divide-y divide-slate-800/80">
              {whyMe.comparison.map((item) => (
                <div
                  key={item.feature}
                  className="grid sm:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-slate-900/40 transition-colors"
                >
                  <div className="sm:col-span-3 font-display font-semibold text-white text-sm">
                    {item.feature}
                  </div>

                  {/* Altaf Column */}
                  <div className="sm:col-span-5 flex items-start gap-2.5 text-xs sm:text-sm text-cyan-200 bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20">
                    <Check size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item.altaf}</span>
                  </div>

                  {/* Traditional Agency Column */}
                  <div className="sm:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                    <X size={16} className="text-rose-400 shrink-0 mt-0.5" />
                    <span>{item.agency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 6 Core Strength Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyMe.points.map((p, i) => {
            const Icon = icons[p.icon] || BarChart3;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="glass-panel-interactive rounded-2xl p-6 h-full border border-cyan-500/15 group">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-md group-hover:shadow-cyan-500/20 transition-all">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
