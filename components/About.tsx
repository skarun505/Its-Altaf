"use client";
import { useState } from "react";
import Image from "next/image";
import { about, site } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Award, GraduationCap, Check, ArrowRight } from "lucide-react";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Background & Expertise"
          subtitle="A rare blend of MBA business discipline, mathematical media buying, and direct-response creative editing."
        >
          {about.heading}
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait & Quick Facts */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 border border-cyan-500/25 group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  {!imgError ? (
                    <Image
                      src="/altaf.webp"
                      alt="Altaf - Senior Performance Marketer and Creative Strategist in Bangalore"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-950">
                      <GraduationCap size={48} className="text-cyan-400 mb-2" />
                      <p className="font-display font-bold text-white text-lg">{site.name}</p>
                      <p className="text-xs font-mono text-cyan-400">MBA Marketing · Bangalore</p>
                    </div>
                  )}
                  {/* Bottom overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent">
                    <p className="font-display font-bold text-white text-base sm:text-lg">{site.name}</p>
                    <p className="text-xs font-mono text-cyan-300">Senior Performance Marketer · MBA</p>
                  </div>
                </div>
              </div>

              {/* Verified Certifications Pill Card */}
              <div className="mt-5 glass-panel rounded-2xl p-5 border border-purple-500/20">
                <p className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Award size={14} className="text-purple-400" />
                  Industry Certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium bg-slate-900/80 border border-slate-700/60 text-slate-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                    >
                      <Check size={12} className="text-cyan-400" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio Narrative & Strategic Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                {about.bioHeadline}
              </h3>
            </Reveal>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {about.paragraphs.map((p, idx) => (
                <Reveal key={idx} delay={0.15 + idx * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Strategic Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {about.highlights.map((h, i) => (
                <Reveal key={h.title} delay={0.25 + i * 0.05}>
                  <div className="glass-panel rounded-2xl p-5 border border-cyan-500/15 hover:border-cyan-500/35 transition-colors h-full">
                    <span className="font-mono text-xs text-cyan-400 font-semibold">{h.number}</span>
                    <h4 className="font-display font-semibold text-white text-base mt-1.5 mb-1">{h.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Quick CTA */}
            <Reveal delay={0.4}>
              <div className="pt-3 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white group"
                >
                  <span>Learn more about my media buying workflow</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
