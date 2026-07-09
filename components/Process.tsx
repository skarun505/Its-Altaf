import { process } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-surface/40">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{process.heading}</SectionHeading>
        <ol className="relative border-l border-line ml-3 space-y-10">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <li className="pl-8 relative">
                <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-bg border border-accent flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-warm text-sm">{step.n}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{step.title}</h3>
                <p className="text-muted text-sm mt-1">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
