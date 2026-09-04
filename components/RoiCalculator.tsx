"use client";
import { useState } from "react";
import { roiCalculator } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Calculator, ArrowRight, Sparkles, TrendingUp, DollarSign, Users } from "lucide-react";

export default function RoiCalculator() {
  const [budget, setBudget] = useState(roiCalculator.defaultBudget);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} L`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const expectedRevenue = budget * roiCalculator.benchmarks.avgRoas;
  const highRevenue = budget * roiCalculator.benchmarks.highRoas;
  const estimatedOrders = Math.round(budget / roiCalculator.benchmarks.avgCpl);

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Interactive ROI Tool"
          subtitle="Simulate potential revenue, order volume, and ROAS uplift based on verified benchmark performance across our client portfolio."
          center
        >
          {roiCalculator.title}
        </SectionHeading>

        <Reveal>
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/25 relative overflow-hidden shadow-2xl shadow-cyan-950/20">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Budget Slider */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Calculator size={16} className="text-cyan-400" />
                      Planned Monthly Ad Spend
                    </label>
                    <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {formatCurrency(budget)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={roiCalculator.minBudget}
                    max={roiCalculator.maxBudget}
                    step={roiCalculator.stepBudget}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                  />
                  <div className="flex justify-between text-xs font-mono text-slate-400 mt-2">
                    <span>₹50K/mo</span>
                    <span>₹5L/mo</span>
                    <span>₹10L/mo</span>
                    <span>₹20L+/mo</span>
                  </div>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-slate-400 self-center mr-1">Quick Select:</span>
                  {[100000, 250000, 500000, 1000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBudget(preset)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all ${
                        budget === preset
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/20"
                          : "bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-white"
                      }`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                  <span className="text-cyan-300 font-semibold">Attribution Note:</span> Projections assume full-funnel media execution with dedicated creative iteration, landing page CRO, and verified server-side CAPI tracking.
                </div>
              </div>

              {/* Right Column: Projected Returns Box */}
              <div className="md:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 uppercase font-medium">
                    <Sparkles size={13} />
                    Projected Outcomes
                  </span>
                  <span className="text-xs font-mono bg-cyan-950/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                    3.8X Avg ROAS
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Target Monthly Revenue</p>
                    <p className="font-display font-bold text-3xl text-white">
                      {formatCurrency(expectedRevenue)}
                    </p>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">
                      Up to {formatCurrency(highRevenue)} with creative scale
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Users size={12} className="text-purple-400" />
                        Est. Orders / Leads
                      </p>
                      <p className="font-mono font-bold text-lg text-white mt-1">
                        ~{estimatedOrders.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <TrendingUp size={12} className="text-cyan-400" />
                        Target CAC Yield
                      </p>
                      <p className="font-mono font-bold text-lg text-cyan-300 mt-1">
                        -42% vs Baseline
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Request Scale Plan</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
