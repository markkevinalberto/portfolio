import { GraduationCap, HardDrives, ShieldCheck, Medal } from "@phosphor-icons/react";
import Nav from "./components/Nav";
import CTAFooter from "./components/CTAFooter";
import { certificates } from "./certData";

const categoryIcon = {
  "Education & AI": GraduationCap,
  "Hardware & Networking": HardDrives,
  Security: ShieldCheck,
  Recognition: Medal,
};

export default function CertificatesPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-ink-950">
      <Nav />

      <section id="top" className="relative overflow-hidden px-4 pt-40 pb-20 md:pt-48">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-black leading-[1.05] tracking-tight text-white">
            Certificates and training.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Nine, from a TESDA hardware certification in 2012 to a Google AI course in 2025.
            Some have since expired; they still happened.
          </p>
        </div>
      </section>

      <section className="px-4 pb-28 md:pb-36">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {certificates.map((c) => {
            const Icon = categoryIcon[c.category];
            return (
              <div
                key={c.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-ink-850 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon size={22} weight="duotone" className="text-amber" />
                  <span className="rounded-full border border-white/15 px-3 py-1 font-mono-label text-[10px] uppercase tracking-wide text-white/45">
                    {c.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <p className="font-mono-label text-xs text-white/40">
                  {c.issuer} &middot; {c.date}
                </p>
                <p className="text-sm text-white/60">{c.note}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
