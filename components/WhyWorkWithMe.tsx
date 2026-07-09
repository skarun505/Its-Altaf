import React from "react";
import { whyMe } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  BarChart3, Target, Lightbulb, Workflow, Palette, FileBarChart, FlaskConical, Building2,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  BarChart3, Target, Lightbulb, Workflow, Palette, FileBarChart, FlaskConical, Building2,
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-28 bg-surface/40">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{whyMe.heading}</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyMe.points.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="bg-surface border border-line rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform">
                  <Icon className="text-accent mb-4" size={26} />
                  <h3 className="font-medium">{p.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
