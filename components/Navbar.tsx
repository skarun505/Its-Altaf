"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl">
          Altaf<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-surface border-t border-line px-6 py-4 flex flex-col gap-4">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
