import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "About Altaf | Senior Performance Marketer & Creative Strategist",
  description:
    "Learn about Altaf, an MBA graduate in Marketing and Senior Performance Marketer based in Bangalore with ₹25Cr+ ad spend managed and proven results across Google & Meta Ads.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-12">
        <p className="text-xs font-mono text-cyan-400 mb-2">
          <a href="/" className="hover:underline">Home</a> &gt; About
        </p>
      </div>
      <About />
      <Skills />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
