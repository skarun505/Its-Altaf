import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import RoiCalculator from "@/components/RoiCalculator";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Services & Retainer Pricing | Altaf",
  description:
    "Comprehensive growth marketing solutions: Google Ads Search & PMax, Meta Advantage+, in-house video creative production, server-side CAPI attribution, and landing page CRO.",
  alternates: { canonical: `${site.url}/services` },
};

const retainerTiers = [
  {
    name: "Growth Starter",
    badge: "Emerging Brands",
    spendRange: "Ad spend ₹1L – ₹3L / mo",
    description: "Ideal for brands wanting to fix broken attribution, stabilize erratic ROAS, and establish a repeatable customer acquisition channel.",
    features: [
      "Dedicated Google Ads Search & Shopping management",
      "Meta Ads prospecting & Advantage+ retargeting",
      "Server-side GA4 & Meta Conversions API (CAPI) setup",
      "2 in-house video ad cuts & 4 static creatives / mo",
      "24/7 live Looker Studio executive dashboard",
      "Weekly performance check-in & bi-weekly sync call",
    ],
    highlight: false,
  },
  {
    name: "Performance Scale",
    badge: "Most Popular",
    spendRange: "Ad spend ₹3L – ₹12L / mo",
    description: "For established eCommerce and D2C brands ready to scale monthly spend aggressively while defending unit economics and lowering CAC.",
    features: [
      "Full-funnel Google Ads (Search, Performance Max, YouTube)",
      "Aggressive Meta Ads Manager scaling (Advantage+ & Reels)",
      "High-velocity creative flight (4 video edits + 8 statics / mo)",
      "Landing page CRO audit & mobile checkout optimization",
      "Audience whitelisting & micro-influencer ad integration",
      "Private WhatsApp channel & weekly strategic growth reviews",
    ],
    highlight: true,
  },
  {
    name: "Omnichannel Enterprise",
    badge: "Market Leaders",
    spendRange: "Ad spend ₹12L+ / mo",
    description: "Complete end-to-end paid media department takeover for multi-brand or high-ticket enterprises requiring zero-latency execution.",
    features: [
      "Multi-platform media buying (Google, Meta, LinkedIn ABM)",
      "Unlimited creative iterations & dedicated scriptwriting",
      "Custom server-side data warehouse & multi-touch attribution",
      "Full A/B landing page design and rapid deployment",
      "Direct daily Slack communication with Altaf",
      "Executive quarterly growth roadmap & margin forecasting",
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Dedicated Services Hero */}
      <section className="pt-20 pb-14 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">Services & Capabilities</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-4">
              <Sparkles size={13} className="text-cyan-400" />
              Full-Stack Growth Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              High-Precision Media Buying{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Meets Direct Creative Production.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              Most brands struggle because their media buyers do not understand creative hooks, and their designers don&apos;t understand ad bidding. I bridge both worlds to deliver consistent, profitable ROAS.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Cards */}
      <Services />

      {/* Retainer Models Section */}
      <section className="py-20 md:py-28 relative border-t border-cyan-500/15 bg-slate-950/40">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 bg-purple-950/60 border border-purple-500/30 text-purple-300">
              <ShieldCheck size={13} />
              Transparent Engagements
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Flexible Monthly Retainer Models
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Zero long-term contract lock-ins. I earn your partnership every 30 days through provable revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {retainerTiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass-panel rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.highlight
                    ? "border-cyan-400/50 bg-slate-900/90 shadow-2xl shadow-cyan-950/40 -translate-y-2"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[11px] font-mono font-bold px-3.5 py-1 rounded-full shadow-md shadow-cyan-500/30 uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-2xl text-white">{tier.name}</h3>
                    {!tier.highlight && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-cyan-300 mb-4">{tier.spendRange}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Included Deliverables:
                    </p>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
                      tier.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-purple-500"
                        : "bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/40"
                    }`}
                  >
                    <span>Check Availability</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tool & Framework */}
      <RoiCalculator />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
