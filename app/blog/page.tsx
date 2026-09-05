import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import { Sparkles, ArrowRight, Clock, BookOpen, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Insights & Teardowns | Altaf",
  description:
    "Tactical media buying teardowns, creative testing frameworks, and attribution case studies written by Altaf, Senior Performance Marketer in Bangalore.",
  alternates: { canonical: `${site.url}/blog` },
};

const articles = [
  {
    title: "How We Scaled Sarda & Co. from 2.1X to 4.1X ROAS Without Increasing Ad Spend",
    slug: "scaling-sarda-and-co-roas",
    category: "Paid Social Scaling",
    readTime: "6 min read",
    date: "Aug 2026",
    summary:
      "Most media buyers react to declining ROAS by frantically tweaking bids. We broke down the unit economics, isolated 6 weekly UGC hooks, and restructured the account into an Advantage+ consolidated structure.",
    takeaways: [
      "Why horizontal creative testing beats vertical audience scaling",
      "How to set up negative exclusions to protect high-margin bundles",
      "Achieving blended 4.1X ROAS across both Google and Meta",
    ],
  },
  {
    title: "Why Meta Advantage+ Shopping Campaigns Fail Without a Creative Matrix",
    slug: "why-advantage-plus-fails-without-creative-matrix",
    category: "Meta Ads Architecture",
    readTime: "8 min read",
    date: "Jul 2026",
    summary:
      "Advantage+ Shopping Campaigns (ASC) are powered by machine learning algorithms that starve when fed static generic ads. Here is our 5-tier creative matrix to keep ASC campaigns profitable long-term.",
    takeaways: [
      "The 5 creative angles every eCommerce brand must rotate",
      "How to detect algorithmic creative fatigue before CPR doubles",
      "Dynamic creative vs single-ad testing protocols",
    ],
  },
  {
    title: "The 2026 Guide to Server-Side Meta Conversions API (CAPI) & GA4",
    slug: "server-side-capi-and-ga4-guide",
    category: "Attribution & Tracking",
    readTime: "7 min read",
    date: "Jun 2026",
    summary:
      "Third-party cookies and Safari ITP have blinded browser-based pixels. A complete blueprint to deploy server-side CAPI via Google Tag Manager and Cloudflare to restore 9.5+ event match quality.",
    takeaways: [
      "Event deduplication between browser pixel and server event",
      "Passing advanced matching keys safely (hashed email, phone, fbp)",
      "Reclaiming 20-30% lost purchase attribution",
    ],
  },
  {
    title: "Google Performance Max vs Standard Search: Stopping Budget Cannibalization",
    slug: "google-pmax-vs-search-cannibalization",
    category: "Google Ads Strategy",
    readTime: "5 min read",
    date: "May 2026",
    summary:
      "Google PMax is notoriously aggressive at claiming branded search conversions and low-quality display impressions. Here is how we sculpt asset groups and negative keywords to ensure PMax drives incremental revenue.",
    takeaways: [
      "Adding brand exclusions to prevent vanity ROAS inflation",
      "Optimizing Google Merchant Center feeds for high-intent search",
      "Balancing target ROAS bidding with product gross margins",
    ],
  },
];

export default function BlogPage() {
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
            <span className="text-slate-400">Growth Insights & Teardowns</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-4">
              <BookOpen size={13} className="text-cyan-400" />
              Tactical Media Buying Teardowns
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Tested Insights From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                ₹25Cr+ in Live Ad Spend.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              No generic fluff or high-level theory. Practical, in-the-trenches media buying teardowns, creative testing frameworks, and attribution architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="glass-panel-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-cyan-500/15 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                    <span className="text-cyan-400 font-semibold">{art.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {art.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {art.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {art.summary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800 mb-6 bg-slate-900/40 p-3.5 rounded-2xl">
                    <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">Key Frameworks:</p>
                    {art.takeaways.map((t, idx) => (
                      <p key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{t}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    By Altaf · MBA Marketing
                  </span>
                  <a
                    href="/audit"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Audit My Account</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Account Audit CTA Banner */}
      <section className="py-16 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Ready to Implement These Frameworks in Your Brand?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              Get a custom 45-point audit of your active Google and Meta ad accounts. We will pinpoint exact leakages and design a custom ROAS scale plan.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm shadow-md shadow-cyan-500/25 transition-all"
            >
              <span>Claim Free 45-Point Audit</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
