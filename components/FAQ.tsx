"use client";
import { useState } from "react";
import { faq } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          badge="Clarity & Onboarding"
          subtitle={faq.subheading}
          center
        >
          {faq.heading}
        </SectionHeading>

        <div className="space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen ? "border-cyan-500/40 bg-slate-900/90 shadow-lg shadow-cyan-950/20" : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-semibold text-base sm:text-lg text-white group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className={`shrink-0 transition-colors ${isOpen ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-400"}`} />
                    <span className="group-hover:text-cyan-300 transition-colors">{item.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all ${isOpen ? "bg-cyan-500/20 text-cyan-400 rotate-180" : "bg-slate-800 text-slate-400"}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
