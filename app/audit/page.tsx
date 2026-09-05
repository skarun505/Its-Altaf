"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Sparkles,
  Zap,
  Lock,
  Clock,
} from "lucide-react";

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const [platforms, setPlatforms] = useState<string[]>(["Meta Ads (FB/IG)"]);
  const [spend, setSpend] = useState("₹2,00,000 – ₹5,00,000 / mo");
  const [bottlenecks, setBottlenecks] = useState<string[]>([
    "Creative Fatigue (Ads stop working quickly)",
  ]);
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const togglePlatform = (p: string) => {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const toggleBottleneck = (b: string) => {
    setBottlenecks((prev) =>
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">Free 45-Point Audit</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-4">
              <Zap size={13} className="text-cyan-400" />
              100% Free & Confidential Account Audit
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Uncover Wasted Ad Spend.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Double Your ROAS.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              Most ad accounts waste 20% to 35% of their budget on overlapping audiences, fatigued creatives, and broken attribution. Complete the 60-second diagnostic below to receive a custom 45-point audit.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Audit Wizard */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/25 relative overflow-hidden shadow-2xl">
            {/* Step Progress Indicators */}
            <div className="flex items-center justify-between pb-8 border-b border-slate-800 mb-8">
              {[
                { n: 1, label: "Platforms" },
                { n: 2, label: "Spend & Bottlenecks" },
                { n: 3, label: "Brand Details" },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all ${
                      step >= s.n
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25"
                        : "bg-slate-900 border border-slate-800 text-slate-500"
                    }`}
                  >
                    {s.n}
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-medium ${
                      step >= s.n ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Audit Request Confirmed!
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                  Altaf is preparing your preliminary 45-point audit report for{" "}
                  <span className="text-cyan-300 font-semibold">{website || "your brand"}</span>. You will receive a Loom video walkthrough and tactical action checklist within 24 hours at{" "}
                  <span className="text-white font-medium">{email}</span>.
                </p>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/20 max-w-md mx-auto text-left text-xs space-y-2 text-slate-300 mt-6">
                  <p className="text-cyan-400 font-mono font-semibold uppercase">What to expect next:</p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" /> Review of audience overlap and creative fatigue
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" /> Pixel match rate and server-side CAPI validation
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400" /> 3 custom video ad hook concepts for your product
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    Return to Homepage <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Platforms */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                        Which paid ad channels are you currently running?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Select all platforms where you are actively deploying ad budget.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {[
                        "Meta Ads (FB/IG)",
                        "Google Ads (Search/PMax)",
                        "LinkedIn Ads (B2B)",
                        "YouTube Ads",
                        "Amazon Sponsored Ads",
                        "Other / Not yet advertising",
                      ].map((p) => {
                        const isSelected = platforms.includes(p);
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => togglePlatform(p)}
                            className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                              isSelected
                                ? "bg-cyan-950/40 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-950/40"
                                : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                            }`}
                          >
                            <span>{p}</span>
                            <div
                              className={`w-5 h-5 rounded-lg border flex items-center justify-center text-xs ${
                                isSelected
                                  ? "bg-cyan-500 border-cyan-400 text-black font-bold"
                                  : "border-slate-700"
                              }`}
                            >
                              {isSelected && "✓"}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-md shadow-cyan-500/20"
                      >
                        <span>Next: Spend & Challenges</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Spend & Bottlenecks */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                        What is your monthly ad spend & biggest challenge?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        This helps us benchmark your metrics against similar brands in our portfolio.
                      </p>
                    </div>

                    {/* Spend Bracket */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Monthly Ad Budget:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          "Under ₹1L / mo",
                          "₹1L – ₹3L / mo",
                          "₹3L – ₹10L / mo",
                          "₹10L+ / mo",
                        ].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSpend(s)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono font-medium border text-center transition-all ${
                              spend === s
                                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottlenecks */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Top Bottlenecks (Select all that apply):
                      </label>
                      <div className="space-y-2">
                        {[
                          "Creative Fatigue (Ads stop working after a few days)",
                          "High CAC / Declining ROAS week over week",
                          "Broken Tracking / iOS attribution blindspots",
                          "Scaling Ceiling (Spend increases, but profit drops)",
                          "Poor Lead Quality / Unqualified inquires",
                        ].map((b) => {
                          const isSelected = bottlenecks.includes(b);
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => toggleBottleneck(b)}
                              className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${
                                isSelected
                                  ? "bg-purple-950/40 border-purple-400 text-purple-200"
                                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-300"
                              }`}
                            >
                              <span>{b}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                                  isSelected
                                    ? "bg-purple-500 border-purple-400 text-black font-bold"
                                    : "border-slate-700"
                                }`}
                              >
                                {isSelected && "✓"}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-md shadow-cyan-500/20"
                      >
                        <span>Next: Final Step</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Brand Details */}
                {step === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                        Where should we send your 45-Point Audit?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Altaf will personally review your domain and ad presence.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Website / Store URL *
                        </label>
                        <input
                          placeholder="e.g. brand.com or shopbrand.in"
                          required
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          placeholder="e.g. Rohit Mehta"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Work Email (Audit delivered here) *
                        </label>
                        <input
                          type="email"
                          placeholder="rohit@brand.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          WhatsApp / Phone (For video link)
                        </label>
                        <input
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-center gap-3">
                      <Lock size={16} className="text-cyan-400 shrink-0" />
                      <span>
                        Strict Confidentiality Guaranteed. We never share your account information or store metrics.
                      </span>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3.5 px-8 rounded-xl text-sm shadow-lg shadow-cyan-500/25 transition-all"
                      >
                        <span>Generate & Send My 45-Point Audit</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Audit Checklist Overview */}
      <section className="py-16 relative border-t border-cyan-500/15 bg-slate-950/40">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl font-bold text-white">
              What the 45-Point Audit Examines
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              A comprehensive breakdown of structural, creative, and tracking efficiencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-display font-bold text-lg text-cyan-300 mb-3">
                1. Structural Efficiency
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Audience overlap & budget cannibalization</li>
                <li>• Advantage+ Shopping Campaign configuration</li>
                <li>• Bid strategy vs margin thresholds</li>
                <li>• Negative keyword sculpting in Google Search</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-purple-500/20">
              <h3 className="font-display font-bold text-lg text-purple-300 mb-3">
                2. Creative & Hook Performance
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• 3-second hook retention & dropoff rates</li>
                <li>• UGC angle variety vs fatigue rates</li>
                <li>• Direct-response offer clarity & friction</li>
                <li>• Mobile vertical 9:16 feed readability</li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-emerald-500/20">
              <h3 className="font-display font-bold text-lg text-emerald-300 mb-3">
                3. Technical Tracking & CRO
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Meta CAPI server-side event match quality</li>
                <li>• GA4 Enhanced eCommerce data layer</li>
                <li>• Mobile checkout speed & cart dropoff points</li>
                <li>• UTM taxonomy & multi-touch attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
