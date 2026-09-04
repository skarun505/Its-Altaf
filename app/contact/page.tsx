import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Performance Marketing Retainers - Altaf",
  description:
    "Schedule a complimentary 30-minute growth consultation or request a confidential 45-point account audit with Altaf in Bangalore.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-12">
        <p className="text-xs font-mono text-cyan-400 mb-2">
          <a href="/" className="hover:underline">Home</a> &gt; Contact
        </p>
      </div>
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
