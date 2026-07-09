"use client";
import { useState } from "react";
import { faq } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading>{faq.heading}</SectionHeading>
        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div key={item.q} className="border border-line rounded-xl bg-surface overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium"
                aria-expanded={open === i}
              >
                {item.q}
                <ChevronDown
                  className={`shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
              {open === i && <p className="px-6 pb-5 text-muted text-sm leading-relaxed">{item.a}</p>}
            </div>
          ))}
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
