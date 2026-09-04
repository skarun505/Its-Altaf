"use client";
import { testimonials } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Quote, Star, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="Executive Endorsements"
          subtitle="What founders and marketing leaders say about partnering with Altaf to scale their paid acquisition channels."
        >
          Founder & Leader Testimonials
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 0.08}>
              <div className="glass-panel-interactive rounded-3xl p-7 flex flex-col justify-between h-full border border-cyan-500/15 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-cyan-500/20 transition-all" />

                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={20} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-display font-bold text-white text-sm shadow-md shadow-cyan-500/20">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm flex items-center gap-1.5">
                        {t.author}
                        <CheckCircle2 size={13} className="text-cyan-400" />
                      </h4>
                      <p className="text-xs text-slate-400">
                        {t.role} · <span className="text-slate-300 font-medium">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
