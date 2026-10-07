import { GraduationCap, ShieldCheck, ArrowsOut } from "@phosphor-icons/react";
import Nav from "./components/Nav";
import LineGutter from "./components/LineGutter";
import CTAFooter from "./components/CTAFooter";
import { certGroups, certificateCount } from "./certData";

const categoryIcon = {
  Individual: GraduationCap,
  Security: ShieldCheck,
};

function CertCard({ item }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border-2 border-ink-950 bg-white shadow-offset-sm transition duration-300 hover:-translate-y-1 hover:shadow-offset">
      <a
        href={item.image}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center border-b-2 border-ink-950 bg-cream-100 p-3"
      >
        <img
          src={item.image}
          alt={`${item.title} certificate`}
          loading="lazy"
          className="h-44 w-full rounded object-contain object-center"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition group-hover:bg-ink-950/20 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-ink-950 px-3 py-1.5 font-mono text-[11px] text-cream-50">
            <ArrowsOut size={13} weight="bold" />
            View full size
          </span>
        </span>
      </a>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h4 className="text-sm font-bold leading-snug text-ink-950">{item.title}</h4>
        {item.sub && <p className="font-mono text-xs text-ink-950/60">{item.sub}</p>}
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <>
      <Nav />
      <main className="bg-dots relative w-full max-w-full overflow-x-clip">
        <LineGutter />

        <section id="top" className="relative pb-16 pt-14 md:pt-20">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-brand">// on paper, and on file</p>
                <h1 className="mt-3 font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight">
                  Certificates <span className="italic text-brand">&amp; training.</span>
                </h1>
              </div>
              <span className="rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-4 py-2 font-mono text-xs">
                certificates.length === {certificateCount}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-lg text-ink-950/75">
              {certificateCount}, from a TESDA hardware certification in 2012 to three Cisco Networking
              Academy courses in October 2026. Click any certificate to open it full size.
            </p>
          </div>
        </section>

        {certGroups.map((group) => {
          const Icon = categoryIcon[group.category];
          return (
            <section key={group.id} className="relative pb-16 md:pb-24">
              <div className="wrap">
                <div className="mb-8 flex items-start gap-3 border-b-[1.5px] border-ink-950 pb-5">
                  <Icon size={24} weight="duotone" className="mt-1 shrink-0 text-brand" />
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-ink-950">{group.title}</h2>
                    {group.meta && (
                      <p className="mt-1 font-mono text-xs text-ink-950/60">// {group.meta}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <CertCard key={item.title} item={item} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <CTAFooter />
      </main>
    </>
  );
}
