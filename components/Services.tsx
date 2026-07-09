import React from "react";
import { services } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Megaphone, Palette, Clapperboard, SearchCheck, TrendingUp, Activity,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Megaphone, Palette, Clapperboard, SearchCheck, TrendingUp, Activity,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{services.heading}</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-surface border border-line rounded-2xl p-7 h-full hover:border-accent/50 transition-colors">
                  <Icon className="text-accent mb-5" size={28} />
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
