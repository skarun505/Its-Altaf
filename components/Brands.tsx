"use client";
import { brands } from "@/data/content";
import SectionHeading from "./SectionHeading";

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-2.5">
      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex gap-4 w-max items-center`}>
        {doubled.map((b, i) => (
          <span
            key={i}
            className="whitespace-nowrap glass-panel rounded-2xl px-6 py-3 text-sm font-semibold text-slate-300 border border-cyan-500/15 hover:border-cyan-400 hover:text-white transition-colors flex items-center gap-2.5 shadow-sm shadow-black/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 mb-8">
        <SectionHeading
          badge="Enterprise & D2C Portfolio"
          subtitle={brands.subheading}
          center
        >
          {brands.heading}
        </SectionHeading>
      </div>

      <div className="marquee-wrap">
        <MarqueeRow items={brands.row1} />
        <MarqueeRow items={brands.row2} reverse />
      </div>
    </section>
  );
}
