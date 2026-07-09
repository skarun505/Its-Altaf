"use client";
import { useState } from "react";
import { about } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { User } from "lucide-react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[320px_1fr] gap-12 items-start">
        <Reveal>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-line bg-surface">
            {imgError ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted gap-3">
                <User size={64} strokeWidth={1} />
                <span className="text-xs font-mono text-center px-4">Replace with<br/>/public/altaf.webp</span>
              </div>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/altaf.webp"
                alt="Altaf, performance marketer in Bangalore"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>{about.heading}</SectionHeading>
          <p className="text-muted text-lg leading-relaxed -mt-6">{about.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
