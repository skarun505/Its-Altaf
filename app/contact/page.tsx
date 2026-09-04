import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import { Sparkles, Clock, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Call & Account Audit | Altaf",
  description:
    "Schedule a complimentary 30-minute growth consultation or request a confidential 45-point paid ad account audit with Altaf in Bangalore.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Dedicated Page Hero */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">Book a Strategy Call</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Accepting 2 Brands for Q3/Q4 Retainers
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Customer Acquisition?
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              Schedule a 30-minute growth consultation or request a complimentary 45-point paid media audit. I will review your unit economics, ad spend allocation, and outline immediate ROAS expansion opportunities.
            </p>
          </div>

          {/* Value Badges Strip */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-cyan-500/20">
              <Clock className="text-cyan-400 shrink-0" size={20} />
              <div>
                <p className="font-semibold text-xs text-white">Guaranteed 24h Response</p>
                <p className="text-[11px] text-slate-400 font-mono">Bangalore Time (IST)</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-purple-500/20">
              <ShieldCheck className="text-purple-400 shrink-0" size={20} />
              <div>
                <p className="font-semibold text-xs text-white">Strict Mutual NDA</p>
                <p className="text-[11px] text-slate-400 font-mono">Your data is 100% confidential</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-emerald-500/20">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
              <div>
                <p className="font-semibold text-xs text-white">Actionable Audit Roadmap</p>
                <p className="text-[11px] text-slate-400 font-mono">No generic fluff or sales pitch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Touchpoints */}
      <Contact />

      {/* Onboarding FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
