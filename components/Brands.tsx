import { brands } from "@/data/content";
import SectionHeading from "./SectionHeading";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex gap-4 w-max`}>
        {doubled.map((b, i) => (
          <span
            key={i}
            className="whitespace-nowrap border border-line bg-surface rounded-full px-6 py-2.5 text-sm text-muted"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-surface/40">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading>{brands.heading}</SectionHeading>
      </div>
      <div className="marquee-wrap">
        <Row items={brands.row1} />
        <Row items={brands.row2} reverse />
      </div>
    </section>
  );
}
