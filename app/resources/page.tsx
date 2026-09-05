import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import {
  BookOpen,
  Download,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Performance Marketing Resources, Playbooks & SOPs | Altaf",
  description:
    "Free performance marketing frameworks: Meta Advantage+ creative matrix, 1.5s video hook scriptwriting templates, and server-side CAPI setup checklists.",
  alternates: { canonical: `${site.url}/resources` },
};

const playbooks = [
  {
    title: "The 2026 Meta Advantage+ Creative Testing Matrix",
    tag: "Paid Social SOP",
    desc: "A step-by-step framework to launch, test, and isolate winning creative hooks without burning budget or overlapping audiences.",
    format: "Interactive Guide & Template",
    points: [
      "Dynamic creative vs single-asset ad set isolation",
      "Identifying statistically significant winners within 72 hours",
      "Scaling budgets horizontally without triggering learning phase reset",
    ],
  },
  {
    title: "The 1.5-Second Direct-Response Video Hook Bible",
    tag: "Creative Production",
    desc: "32 proven psychological hook scripts for UGC reels, TikTok ads, and Meta feeds engineered to stop thumb scrolling and drive high click-through rates.",
    format: "Scriptwriting Cheat Sheet",
    points: [
      "Negative constraint hooks & curiosity gaps",
      "Split-screen comparison & before/after hooks",
      "Pacing, caption overlay styling, and sound selection",
    ],
  },
  {
    title: "Server-Side Meta CAPI & GA4 Attribution Blueprint",
    tag: "Tracking & Data",
    desc: "Complete technical architecture for deploying Conversions API (CAPI) via Cloudflare/Stape with full event deduplication and 9.5+ Event Quality score.",
    format: "Technical Architecture Guide",
    points: [
      "Client-side vs server-side event deduplication",
      "Passing advanced customer matching parameters safely",
      "GA4 Enhanced eCommerce data layer setup in GTM",
    ],
  },
  {
    title: "D2C Break-Even ROAS & Unit Economics Model",
    tag: "Finance & Margin",
    desc: "Mathematical spreadsheet model to calculate true contribution margin, target blended MER, and maximum allowable customer acquisition cost.",
    format: "Excel & Google Sheets Model",
    points: [
      "Gross margin vs variable fulfillment cost inputs",
      "Blended Marketing Efficiency Ratio (MER) target thresholds",
      "Repeat purchase rate & 60-day customer LTV adjustments",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">Growth Resources</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-purple-950/60 border border-purple-500/30 text-purple-300 mb-4">
              <BookOpen size={13} className="text-purple-400" />
              Open-Source Growth Playbooks
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Tested Frameworks.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Actionable Playbooks.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              The exact media buying SOPs, video scriptwriting formulas, and tracking checklists I use daily to manage ₹25Cr+ in ad spend and scale 15+ brands.
            </p>
          </div>
        </div>
      </section>

      {/* Playbook Cards Grid */}
      <section className="py-12 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {playbooks.map((pb) => (
              <div
                key={pb.title}
                className="glass-panel-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-cyan-500/15 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      {pb.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pb.format}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {pb.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pb.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800 mb-6">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">What you will learn:</p>
                    {pb.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Sparkles size={12} /> Free Community Edition
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Request Full Package</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-16 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Need Us to Implement These Playbooks For Your Brand?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              Skip the trial-and-error. Partner with Altaf to deploy verified paid media frameworks and direct-response video ad testing directly in your accounts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md shadow-cyan-500/25 transition-all"
              >
                <span>Request 45-Point Audit</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 glass-panel px-6 py-3 rounded-xl text-slate-200 hover:text-white text-sm font-medium border-slate-700"
              >
                <span>Book 30-Min Strategy Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
