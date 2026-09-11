import { techStack } from "../data";

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono-label text-sm uppercase tracking-wide text-white/35"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
