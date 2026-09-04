import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Brands from "@/components/Brands";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Case Studies & Verified ROAS Results | Altaf Performance Marketer",
  description:
    "Explore verified performance marketing case studies across eCommerce, luxury apparel, retail, and B2B SaaS. Proven 3.8X average ROAS and 42% CAC reduction.",
  alternates: { canonical: `${site.url}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-12">
        <p className="text-xs font-mono text-cyan-400 mb-2">
          <a href="/" className="hover:underline">Home</a> &gt; Case Studies
        </p>
      </div>
      <CaseStudies />
      <Brands />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
