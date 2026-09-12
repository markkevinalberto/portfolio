import { GraduationCap, ShieldCheck, ArrowsOut } from "@phosphor-icons/react";
import Nav from "./components/Nav";
import CTAFooter from "./components/CTAFooter";
import { certGroups, certificateCount } from "./certData";

const categoryIcon = {
  Individual: GraduationCap,
  Security: ShieldCheck,
};

function CertCard({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850">
      <a
        href={item.image}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-paper-100 p-3"
      >
        <img
          src={item.image}
          alt={`${item.title} certificate`}
          className="h-44 w-full rounded object-contain object-center shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition group-hover:bg-ink-950/30 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 font-mono-label text-[11px] text-white">
            <ArrowsOut size={13} weight="bold" />
            View full size
          </span>
        </span>
      </a>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h4 className="text-sm font-bold leading-snug text-white">{item.title}</h4>
        {item.sub && <p className="font-mono-label text-xs text-white/60">{item.sub}</p>}
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-ink-950">
      <Nav />

      <section id="top" className="relative overflow-hidden px-4 pt-40 pb-16 md:pt-48">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-amber/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-black leading-[1.05] tracking-tight text-white">
            Certificates and training.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            {certificateCount}, from a TESDA hardware certification in 2012 to a Christian
            Educators' Network convention this September. Click any certificate to open it full
            size.
          </p>
        </div>
      </section>

      {certGroups.map((group) => {
        const Icon = categoryIcon[group.category];
        return (
          <section key={group.id} className="px-4 pb-16 md:pb-20">
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 flex items-start gap-3 border-b border-white/10 pb-5">
                <Icon size={22} weight="duotone" className="mt-0.5 shrink-0 text-amber" />
                <div>
                  <h2 className="text-xl font-bold text-white">{group.title}</h2>
                  {group.meta && (
                    <p className="mt-1 font-mono-label text-xs text-white/60">{group.meta}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <CertCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="pb-12" />

      <CTAFooter />
    </main>
  );
}
