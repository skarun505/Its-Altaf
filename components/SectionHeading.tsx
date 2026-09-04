import React from "react";

export default function SectionHeading({
  children,
  subtitle,
  badge,
  center = false,
}: {
  children: React.ReactNode;
  subtitle?: string;
  badge?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 backdrop-blur-md shadow-sm shadow-cyan-500/10 ${center ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono text-2xl md:text-3xl align-middle mr-2">//</span>
        {children}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg mt-3.5 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
