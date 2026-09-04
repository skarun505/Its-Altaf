"use client";
import { useState } from "react";
import { caseStudies } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TrendingUp, ArrowUpRight, X, CheckCircle2, ChevronRight, Award } from "lucide-react";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<(typeof caseStudies.items)[0] | null>(null);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Verified ROI & Results"
          subtitle="Real brands, real budgets, and verified financial outcomes. We turn chaotic ad accounts into predictable profit engines."
        >
          {caseStudies.heading}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.items.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.06}>
              <article className="glass-panel-interactive rounded-3xl p-7 flex flex-col justify-between h-full border border-cyan-500/15 group relative overflow-hidden">
                <div>
                  {/* Top Category and Period */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                    <span className="text-cyan-400">{c.category}</span>
                    <span>{c.period}</span>
                  </div>

                  {/* Primary Metric Banner */}
                  <div className="mb-4">
                    <p className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 tracking-tight">
                      {c.metric}
                    </p>
                    <p className="text-xs font-mono text-emerald-400 mt-1">{c.metricSub}</p>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {c.brand}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {c.strategy}
                  </p>

                  {/* Results preview */}
                  <div className="space-y-1.5 mb-5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
                    <p className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Award size={12} /> Key Achievement
                    </p>
                    <p className="text-xs text-slate-200 font-medium">
                      {c.results[0]}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Strategy Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(c)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                  >
                    <span>Read Full Breakdown</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>{selectedCase.category}</span>
              <span>·</span>
              <span>{selectedCase.period}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
              {selectedCase.brand}
            </h3>

            {/* Metric pill */}
            <div className="inline-flex items-center gap-3 bg-cyan-950/60 border border-cyan-500/30 px-4 py-2 rounded-xl mb-6">
              <span className="font-display font-black text-2xl text-cyan-300">
                {selectedCase.metric}
              </span>
              <span className="text-xs font-mono text-emerald-400">
                {selectedCase.metricSub}
              </span>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  The Problem & Challenge:
                </h4>
                <p className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                  Execution & Strategy:
                </h4>
                <p className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 leading-relaxed">
                  {selectedCase.strategy}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  Quantifiable Outcomes & Impact:
                </h4>
                <div className="space-y-2">
                  {selectedCase.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-200"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedCase.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20"
              >
                <span>Scale Similar Strategy</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
