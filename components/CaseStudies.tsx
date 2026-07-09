import { caseStudies } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{caseStudies.heading}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-5">
          {caseStudies.items.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.06}>
              <article className="bg-surface border border-line rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform">
                <p className="font-mono text-warm text-2xl font-medium">{c.metric}</p>
                <h3 className="font-display font-semibold text-xl mt-3">{c.brand}</h3>
                <p className="text-muted mt-2 leading-relaxed">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
