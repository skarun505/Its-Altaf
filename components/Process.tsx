"use client";
import { process } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Scientific Scaling Methodology"
          subtitle={process.subheading}
        >
          {process.heading}
        </SectionHeading>

        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-500/20 shadow-sm shadow-cyan-500/20" />

          <div className="space-y-8 md:space-y-10">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.07}>
                <div className="relative md:pl-24 flex flex-col md:flex-row items-start gap-5 group">
                  {/* Step Number Circle on desktop */}
                  <div className="hidden md:flex absolute left-0 top-1 w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 items-center justify-center font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-purple-400 shadow-lg shadow-black/60 group-hover:scale-110 group-hover:border-cyan-400 transition-all z-10">
                    {step.n}
                  </div>

                  {/* Content Glass Card */}
                  <div className="w-full glass-panel-interactive rounded-3xl p-6 sm:p-8 border border-cyan-500/15 group-hover:border-cyan-500/35 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <span className="md:hidden font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                          {step.n}
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 text-purple-300 border border-purple-500/30">
                        {step.phase}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
