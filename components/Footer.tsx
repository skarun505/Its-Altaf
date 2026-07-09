import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with data-driven precision.</p>
      </div>
    </footer>
  );
}
