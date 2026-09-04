import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import RoiCalculator from "@/components/RoiCalculator";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Performance Marketing Services | Google Ads, Meta Ads & Video Creative - Altaf",
  description:
    "Comprehensive growth marketing services including Meta Advantage+ campaigns, Google Ads Search & PMax, video ad production, and server-side tracking.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg text-primary pt-16">
      <Navbar />
      <div className="max-w-content mx-auto px-6 pt-12">
        <p className="text-xs font-mono text-cyan-400 mb-2">
          <a href="/" className="hover:underline">Home</a> &gt; Services
        </p>
      </div>
      <Services />
      <RoiCalculator />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
