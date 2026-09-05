"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/data/content";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "ROI Tool", href: "/#calculator" },
  { label: "Free Audit", href: "/audit", badge: "Free" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Update live IST time
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setIstTime(`${timeStr} IST`);
      } catch {
        setIstTime("Bangalore, IN");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 py-3 sm:px-6">
      <div
        className={`max-w-content mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-xl border border-cyan-500/20 shadow-lg shadow-black/50 py-2.5 px-5 sm:px-7"
            : "bg-surface/50 backdrop-blur-md border border-white/5 py-3 px-4 sm:px-6"
        } flex items-center justify-between`}
      >
        {/* Logo & Live Time indicator */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display font-bold text-xl tracking-tight text-white"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-mono shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              A
            </span>
            <span className="group-hover:text-cyan-400 transition-colors">
              Altaf<span className="text-cyan-400">.</span>
            </span>
          </Link>

          {istTime && (
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-slate-900/80 border border-slate-700/60 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{istTime}</span>
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 flex items-center gap-1.5 group"
            >
              <span>{l.label}</span>
              {l.badge && (
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  {l.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles size={14} className="text-cyan-200" />
            <span>Book Consultation</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden mt-2 max-w-content mx-auto rounded-2xl bg-surface/95 backdrop-blur-2xl border border-cyan-500/20 p-5 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{l.label}</span>
                {l.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
