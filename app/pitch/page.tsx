import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, caseStudies } from "@/data/content";
import {
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Altaf | Performance Marketing Executive Pitch & Proof",
  description:
    "60-second executive summary, verified performance metrics, case studies, and direct WhatsApp contact for prospective brand partners.",
};

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-bg text-primary py-8 px-4 sm:px-6 selection:bg-cyan-500/30 selection:text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Top Header & Fast Action */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/25 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-display font-bold text-white shadow-md shadow-cyan-500/20">
                A
              </span>
              <div>
                <h1 className="font-display font-bold text-xl text-white">Altaf</h1>
                <p className="text-xs font-mono text-cyan-400">Senior Performance Marketer · MBA</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available Now</span>
            </div>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
            Scaling Brands With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Predictable Ad ROAS.
            </span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            I partner directly with founders and marketing heads to engineer profitable paid acquisition across Google Ads and Meta Ads, paired with in-house video ad editing.
          </p>

          {/* Core Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {[
              { val: "₹25Cr+", label: "Ad Spend Deployed" },
              { val: "3.8X", label: "Average ROAS" },
              { val: "15+", label: "Brands Scaled" },
              { val: "-42%", label: "Average CAC Cut" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-center">
                <p className="font-display font-bold text-lg text-cyan-300">{stat.val}</p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Immediate Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all"
            >
              <PhoneCall size={16} />
              <span>Book a 20-Min Call</span>
            </Link>
          </div>
        </div>

        {/* 3 Featured Case Studies */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-lg text-white px-2">
            Verified Results Snapshot
          </h3>

          {caseStudies.items.slice(0, 3).map((cs) => (
            <div key={cs.brand} className="glass-panel rounded-2xl p-5 border border-cyan-500/15 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase">{cs.category}</span>
                  <h4 className="font-display font-bold text-base text-white">{cs.brand}</h4>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-xl text-emerald-400">{cs.metric}</p>
                  <p className="text-[10px] text-slate-400 font-mono">{cs.metricSub}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span className="text-white font-semibold">Strategy:</span> {cs.strategy}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Direct Partnership */}
        <div className="glass-panel rounded-3xl p-6 border border-purple-500/20 space-y-3">
          <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
            <ShieldCheck size={18} className="text-purple-400" />
            Zero Agency Bloat. Direct Senior Ownership.
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            When you partner with me, you work directly with a senior marketer holding an MBA in Marketing. No junior interns handling your ad accounts, no bureaucratic delays, and zero long-term lock-in traps.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-cyan-400" /> Weekly Creative Refreshes
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-cyan-400" /> 24/7 Live Looker Dashboard
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-cyan-400" /> Server-Side CAPI Tracking
            </span>
          </div>
        </div>

        {/* Bottom Fast CTA */}
        <div className="text-center py-6 space-y-3">
          <p className="text-xs text-slate-400">
            Interested in a free account audit or scaling retainer?
          </p>
          <div className="flex justify-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:underline"
            >
              <MessageCircle size={14} /> Send WhatsApp Message
            </a>
            <span className="text-slate-600">·</span>
            <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline">
              View Full Portfolio <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
