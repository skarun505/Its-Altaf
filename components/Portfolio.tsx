"use client";
import { useState } from "react";
import Image from "next/image";
import { portfolio } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { X, Sparkles, ZoomIn, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof portfolio.items)[0] | null>(null);

  const items =
    active === "All"
      ? portfolio.items
      : portfolio.items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Creative Vault"
          subtitle={portfolio.subheading}
        >
          {portfolio.heading}
        </SectionHeading>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {portfolio.categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                active === c
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25 border-transparent"
                  : "glass-panel text-slate-400 hover:text-white border-slate-800 hover:border-cyan-500/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Reveal key={item.title + idx} delay={idx * 0.05}>
              <button
                type="button"
                onClick={() => setLightboxItem(item)}
                className="w-full text-left group rounded-3xl overflow-hidden glass-panel border border-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full shadow-lg"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Top Category Badge */}
                  <span className="absolute top-3.5 left-3.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-cyan-300">
                    {item.category}
                  </span>

                  {/* Zoom indicator on hover */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} />
                  </div>

                  {/* Metric Tag at bottom */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      <Sparkles size={12} className="text-emerald-400" />
                      {item.metric}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400">
                    <span>View Case Assets</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-5 right-5 text-white hover:text-cyan-400 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
            aria-label="Close preview"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="relative md:w-3/5 h-64 md:h-auto bg-black flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-slate-950">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {lightboxItem.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1 mb-3">
                  {lightboxItem.title}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium mb-4">
                  <Sparkles size={13} />
                  {lightboxItem.metric}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {lightboxItem.desc}
                </p>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <span className="text-white font-semibold">Production Note:</span> Custom-crafted for high-converting direct response media campaigns, optimized for mobile thumb-stopping feeds.
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <a
                  href="#contact"
                  onClick={() => setLightboxItem(null)}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md shadow-cyan-500/25 hover:from-cyan-400 hover:to-purple-500 transition-all"
                >
                  <span>Commission Creative Flight</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
