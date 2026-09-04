import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BeforeAfterToggle from "@/components/BeforeAfterToggle";
import CaseStudies from "@/components/CaseStudies";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Proven ROAS Results | Altaf Performance Marketer",
  description:
    "Explore in-depth performance marketing case studies across D2C eCommerce, luxury jewellery, cosmetics, and enterprise SaaS. Verified ₹25Cr+ ad spend managed with 3.8X average ROAS.",
  alternates: { canonical: `${site.url}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Dedicated Page Hero */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-slate-400">Case Studies</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 mb-4">
              <Sparkles size={13} className="text-cyan-400" />
              Verified Case Vault
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Real Revenue Impact.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Zero Vanity Metrics.
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-5 leading-relaxed font-normal">
              We don&apos;t celebrate impressions or clicks. We measure success by bottom-line gross profit, blended MER, and sustainable customer acquisition cost.
            </p>
          </div>
        </div>
      </section>

      {/* Before vs After Transformation Section */}
      <BeforeAfterToggle />

      {/* Featured Detailed Case Studies */}
      <CaseStudies />

      {/* Brands Bar */}
      <Brands />

      {/* Creative Artifacts / Proof Vault */}
      <Portfolio />

      {/* Founder Testimonials */}
      <Testimonials />

      {/* Audit Banner CTA */}
      <section className="py-16 relative">
        <div className="max-w-content mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center relative overflow-hidden bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40">
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-4">
              Want Similar Returns for Your Ad Accounts?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Request a confidential 45-point paid media audit. I will review your Google and Meta accounts and identify immediate wasted spend and untapped scaling opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <span>Claim Free 45-Point Audit</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
