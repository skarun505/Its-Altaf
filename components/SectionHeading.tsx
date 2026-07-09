export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-primary">
      <span className="text-accent font-mono text-lg align-middle mr-3">//</span>
      {children}
    </h2>
  );
}
