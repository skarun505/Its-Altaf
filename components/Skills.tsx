import { skills } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{skills.heading}</SectionHeading>
        <div className="space-y-8">
          {skills.groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div>
                <p className="font-mono text-accent text-sm mb-3">{g.label}</p>
                <div className="flex flex-wrap gap-2.5">
                  {g.tags.map((t) => (
                    <span key={t} className="border border-line bg-surface rounded-lg px-4 py-2 text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
