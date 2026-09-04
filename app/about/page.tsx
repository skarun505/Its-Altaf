import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import { Sparkles, CheckCircle2, Award, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Altaf | Performance Marketer & Creative Strategist",
  description:
    "Discover Altaf's professional background, MBA in Marketing, career milestones, media buying philosophy, and proven approach to scaling profitable eCommerce brands.",
  alternates: { canonical: `${site.url}/about` },
};

const milestones = [
  {
    year: "2019 – 2021",
    title: "MBA in Marketing & Early Agency Experience",
    desc: "Mastered core marketing management, consumer psychology, unit economics, and econometric modeling in Bangalore.",
  },
  {
    year: "2021 – 2023",
    title: "Scaling High-Growth D2C & eCommerce Brands",
    desc: "Managed high-velocity paid social and paid search budgets, navigating iOS14 privacy shifts with server-side CAPI implementations.",
  },
  {
    year: "2023 – 2025",
    title: "Senior Growth Lead & Multi-Vertical Media Buyer",
    desc: "Deployed over ₹25 Crores in cumulative ad spend across 15+ brands spanning D2C apparel, luxury retail, B2B SaaS, and FMCG.",
  },
  {
    year: "Present",
    title: "Independent Growth Partner & Creative Strategist",
    desc: "Partnering directly with founders and CMOs to deliver predictable top-line revenue growth, direct-response video ad creative, and full-funnel CRO.",
  },
];

const principles = [
  {
    title: "1. Unit Economics Before Ad Spend",
    desc: "We calculate gross margins, contribution margin, and break-even ROAS before spending a single rupee. If the unit economics are broken, more ad spend only accelerates losses.",
  },
  {
    title: "2. Creative Fatigue Is the #1 CAC Killer",
    desc: "Algorithms have commoditized media buying toggles. The true leverage lies in continuous creative flighting: fresh hooks, real customer UGC reels, and angle testing.",
  },
  {
    title: "3. Server-Side Data Is Non-Negotiable",
    desc: "Browser cookies are dead. We build resilient tracking with Meta Conversions API (CAPI) and GA4 data layers to feed clean conversion signals to machine learning engines.",
  },
  {
    title: "4. Full-Funnel CRO Maximizes Traffic Yield",
    desc: "Driving traffic to a leaky landing page burns cash. We optimize checkout friction, value propositions, and headline clarity to double on-page conversion rates.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Dedicated Page Hero */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">About Altaf</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-4">
              <Sparkles size={13} className="text-cyan-400" />
              The Marketer Behind The Metrics
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Data-Obsessed Media Buyer.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Direct-Response Storyteller.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              Combining the analytical rigor of an MBA in Marketing with hands-on video editing and direct-response creative design to build profitable acquisition engines.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Component with Portrait & Pillars */}
      <About />

      {/* Career Milestones Section */}
      <section className="py-20 md:py-28 relative border-t border-cyan-500/15 bg-slate-950/40">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <Award size={13} />
              Track Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Career Milestones & Growth Trajectory
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Over 5 years of verified performance ownership across high-velocity accounts and dynamic consumer verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="glass-panel rounded-3xl p-7 border border-cyan-500/15 hover:border-cyan-500/35 transition-all">
                <span className="font-mono text-xs text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/20">
                  {m.year}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-3 mb-2">
                  {m.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Growth Principles Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 bg-purple-950/60 border border-purple-500/30 text-purple-300">
              <Lightbulb size={13} />
              Marketing Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              4 Non-Negotiable Media Buying Principles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              The mathematical and creative rules that govern every client campaign I manage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((pr) => (
              <div key={pr.title} className="glass-panel-interactive rounded-3xl p-7 border border-purple-500/20">
                <h3 className="font-display font-bold text-lg text-white mb-2 text-cyan-300">
                  {pr.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <Skills />

      {/* Why Work With Altaf Comparison */}
      <WhyWorkWithMe />

      {/* Founder Testimonials */}
      <Testimonials />

      <Contact />
      <Footer />
    </main>
  );
}
