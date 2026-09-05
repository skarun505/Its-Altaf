"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  Eye,
  CheckCircle2,
  ArrowRight,
  Smartphone,
} from "lucide-react";

const reels = [
  {
    id: 1,
    title: "D2C Luxury Apparel Hook Reel",
    brand: "Sarda & Co.",
    vertical: "Fashion & Lifestyle",
    hook: "'Stop buying polyester ethnic wear that wrinkles in 10 minutes...'",
    metric: "4.1X ROAS Verified",
    hookRate: "52% 3-Sec Hook Rate",
    watchTime: "16.8s Avg Watch Time",
    img: "/portfolio/p1.jpg",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Split-Screen Problem vs Solution",
    brand: "Promore Cosmetics",
    vertical: "Beauty & Personal Care",
    hook: "'Why your regular serum stops working after 2 weeks — dermatological proof.'",
    metric: "-45% Lower CAC",
    hookRate: "48% 3-Sec Hook Rate",
    watchTime: "18.2s Avg Watch Time",
    img: "/portfolio/p5.jpg",
    accent: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "High-Ticket Retail Showroom VIP Invite",
    brand: "Bhima Jewellers",
    vertical: "Fine Jewellery & Retail",
    hook: "'Unlock the private festive preview code before doors open to the public.'",
    metric: "65,000+ Store Visits",
    hookRate: "56% 3-Sec Hook Rate",
    watchTime: "21.4s Avg Watch Time",
    img: "/portfolio/p3.jpg",
    accent: "from-amber-500 to-orange-600",
  },
];

export default function ReelsShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const current = reels[activeIdx];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          badge="High-Retention Creative Direction"
          subtitle="Stop the scroll in under 1.5 seconds. Custom direct-response video ads, UGC compilations, and dynamic reels edited for maximum paid feed conversions."
        >
          High-Velocity Video Ad Reels
        </SectionHeading>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mobile Smartphone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal>
              <div className="relative w-[300px] sm:w-[330px] aspect-[9/18.5] rounded-[44px] p-3 bg-slate-950 border-4 border-slate-700/80 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
                {/* Top Notch Speaker */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>

                {/* Inner Screen Content */}
                <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-slate-900 flex flex-col justify-between p-4">
                  {/* Background Mockup Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={current.img}
                      alt={current.title}
                      fill
                      sizes="340px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/60" />
                  </div>

                  {/* Top Overlay Badge */}
                  <div className="relative z-10 pt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                      Altaf Creative Edit
                    </span>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                      aria-label="Toggle audio"
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-cyan-400" />}
                    </button>
                  </div>

                  {/* Central Play/Pause Animation indicator */}
                  <div className="relative z-10 flex justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg"
                      aria-label="Toggle play"
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                    </button>
                  </div>

                  {/* Bottom Video Meta & Hook */}
                  <div className="relative z-10 space-y-2">
                    <div className="p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 space-y-1.5">
                      <p className="text-[11px] font-mono text-cyan-300 uppercase font-semibold">
                        Opening 1.5s Hook:
                      </p>
                      <p className="text-xs text-white font-medium italic leading-snug">
                        {current.hook}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                      <span className="flex items-center gap-1">
                        <Sparkles size={11} /> {current.metric}
                      </span>
                      <span>{current.hookRate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Reel Selector & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Select Reel Concept:
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Engineered For Engagement & Low CPR
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {reels.map((reel, idx) => (
                  <button
                    key={reel.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      activeIdx === idx
                        ? "bg-slate-900/90 border-cyan-400/60 shadow-lg shadow-cyan-950/30"
                        : "glass-panel border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-cyan-400">{reel.brand}</span>
                        <span className="text-xs text-slate-500">·</span>
                        <span className="text-xs text-slate-400">{reel.vertical}</span>
                      </div>
                      <h4 className="font-display font-semibold text-base text-white">
                        {reel.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="font-display font-bold text-sm text-emerald-400 block">
                          {reel.metric}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {reel.hookRate}
                        </span>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                          activeIdx === idx ? "bg-cyan-500 text-black font-bold" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        ▶
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-semibold">Production Guarantee:</span> All video cuts are edited in Adobe Premiere Pro and After Effects, formatted for 9:16 mobile feeds with custom sound design, captions, and conversion triggers.
              </div>

              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Order Video Creative Flight</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
