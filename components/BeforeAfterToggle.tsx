"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

const transformations = [
  {
    brand: "Sarda & Co. Luxury Apparel",
    vertical: "D2C Fashion",
    timeframe: "60 Days of Full-Funnel Scaling",
    metrics: [
      { label: "Blended Account ROAS", before: "2.1X", after: "4.1X", diff: "+95% Lift" },
      { label: "Monthly Gross Revenue", before: "₹18 Lakhs", after: "₹62 Lakhs", diff: "3.4X Scale" },
      { label: "Customer Acquisition Cost", before: "₹920 / order", after: "₹560 / order", diff: "-39% CAC" },
    ],
    summary: "Replaced fatigued generic image ads with 6 weekly UGC video hooks, restructured into Advantage+ shopping campaigns, and tightened UTM attribution.",
  },
  {
    brand: "Promore Cosmetics",
    vertical: "Beauty & Personal Care",
    timeframe: "90 Days of Creative Iteration",
    metrics: [
      { label: "Blended CAC", before: "₹850 / customer", after: "₹465 / customer", diff: "-45% CAC" },
      { label: "Top-of-Funnel ROAS", before: "1.6X", after: "3.6X", diff: "+125% ROAS" },
      { label: "Daily Order Volume", before: "120 orders/day", after: "350 orders/day", diff: "+191% Volume" },
    ],
    summary: "Micro-influencer video whitelisting combined with high-retention before-and-after reels and a high-converting 'Buy 2 Get 1' bundle offer.",
  },
  {
    brand: "Haus of Handmade",
    vertical: "Home Decor & Lifestyle",
    timeframe: "120 Days of CRO & Paid Media",
    metrics: [
      { label: "Store Conversion Rate", before: "1.2%", after: "3.4%", diff: "+183% Yield" },
      { label: "Cart Abandonment Rate", before: "82%", after: "48%", diff: "-34% Dropoff" },
      { label: "Quarterly GMV", before: "₹22 Lakhs", after: "₹92 Lakhs", diff: "+320% YoY" },
    ],
    summary: "Streamlined mobile one-step checkout flow, eliminated checkout form friction, and captured high-intent buyers via Google Search and Pinterest/Meta dynamic catalogs.",
  },
];

export default function BeforeAfterToggle() {
  const [activeTab, setActiveTab] = useState(0);
  const current = transformations[activeTab];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Measurable Transformations"
          subtitle="A transparent before-and-after examination of key unit economics across recent client engagements."
        >
          Before vs After Performance
        </SectionHeading>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {transformations.map((t, idx) => (
            <button
              key={t.brand}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === idx
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25"
                  : "glass-panel text-slate-400 hover:text-white border-slate-800 hover:border-cyan-500/30"
              }`}
            >
              {t.brand.split(" ")[0]} ({t.vertical})
            </button>
          ))}
        </div>

        <Reveal>
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/25 relative overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {current.vertical} · Case Study Highlight
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                  {current.brand}
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-300 bg-purple-950/50 border border-purple-500/30 px-3 py-1.5 rounded-full">
                {current.timeframe}
              </span>
            </div>

            {/* Metrics Comparison Grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {current.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between"
                >
                  <p className="text-xs font-medium text-slate-400 mb-4">{m.label}</p>

                  <div className="grid grid-cols-2 gap-3 items-end">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">Before</span>
                      <span className="font-display font-semibold text-base text-slate-400 line-through">
                        {m.before}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase block mb-1">After</span>
                      <span className="font-display font-bold text-lg text-cyan-300">
                        {m.after}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Impact</span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <TrendingUp size={12} /> {m.diff}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategy Summary */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 mb-1">The Strategic Intervention:</p>
                <p className="text-sm text-slate-300 leading-relaxed">{current.summary}</p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
              >
                <span>Audit My Accounts</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
