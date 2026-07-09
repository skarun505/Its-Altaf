"use client";
import { useState } from "react";
import { portfolio } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { X, ImageIcon } from "lucide-react";

function PortfolioCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="relative aspect-[4/5] rounded-xl overflow-hidden border border-line bg-surface group hover:border-accent transition-colors duration-300"
    >
      {imgError ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted group-hover:text-accent transition-colors">
          <ImageIcon size={36} strokeWidth={1} />
          <span className="text-xs font-mono">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
    </button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items =
    active === "All" ? portfolio.items : portfolio.items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-surface/40">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{portfolio.heading}</SectionHeading>
        <div className="flex flex-wrap gap-2 mb-10">
          {portfolio.categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                active === c
                  ? "bg-accent border-accent text-white"
                  : "border-line text-muted hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <PortfolioCard
              key={item.src}
              src={item.src}
              alt={item.alt}
              onClick={() => setLightbox(item.src)}
            />
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
            aria-label="Close lightbox"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            <X size={28} />
          </button>
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-surface rounded-xl flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox} alt="Portfolio item enlarged" className="max-w-full max-h-[90vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
