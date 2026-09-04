"use client";
import Link from "next/link";
import { site } from "@/data/content";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cyan-500/15 bg-slate-950/70 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Bio & Status */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 font-display font-bold text-2xl text-white">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-mono shadow-md shadow-cyan-500/20">
                A
              </span>
              <span>
                Altaf<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Senior Performance Marketer & Creative Strategist based in Bangalore, India. Engineering full-funnel paid media growth engines that drive profitable unit economics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {site.status}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services & Stack</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies & ROI</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">Interactive ROI Tool</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Creative Vault</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ & Onboarding</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Connect Directly
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Direct
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-purple-400 transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="text-xs font-mono text-slate-500 pt-2">
                Location: Bangalore, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. Built for maximum conversion rate.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
