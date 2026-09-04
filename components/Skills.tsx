"use client";
import React from "react";
import { skills } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Megaphone,
  Activity,
  Palette,
  TrendingUp,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Megaphone,
  Activity,
  Palette,
  TrendingUp,
  Workflow,
};

export default function Skills() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Tooling & Stack"
          subtitle={skills.subheading}
        >
          {skills.heading}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.groups.map((g, i) => {
            const Icon = categoryIcons[g.icon] || Megaphone;
            return (
              <Reveal key={g.label} delay={i * 0.06}>
                <div className="glass-panel-interactive rounded-3xl p-6 sm:p-7 h-full border border-cyan-500/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display font-bold text-white text-base sm:text-lg">
                        {g.label}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono font-medium px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircle2 size={11} className="text-cyan-400 shrink-0" />
                          {t}
                        </span>
                      ))}
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
