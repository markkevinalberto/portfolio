import { toolbox } from "../data";
import { certificateCount } from "../certData";

const tilts = ["-rotate-1", "rotate-[0.8deg]", "-rotate-[0.4deg]", "rotate-1", "-rotate-[0.8deg]", "rotate-[0.5deg]"];
const total = toolbox.reduce((n, g) => n + g.items.length, 0);

export default function Toolbox() {
  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-brand">// What I build with</p>
            <h2 className="mt-3 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight">
              Tools of <span className="italic text-brand">the trade.</span>
            </h2>
          </div>
          <span className="rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-4 py-2 font-mono text-xs">
            stack.length === {total}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-[17px] text-ink-950/70">
          Backed by{" "}
          <a
            href={`${import.meta.env.BASE_URL}certificates.html`}
            className="border-b-[1.5px] border-brand font-semibold text-ink-950 transition hover:text-brand"
          >
            {certificateCount} certificates
          </a>
          , from a 2012 TESDA hardware cert to two Cisco cybersecurity courses in 2026.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {toolbox.map((g, i) => (
            <div
              key={g.group}
              className={`rounded-2xl border-2 border-ink-950 bg-white p-6 shadow-offset transition duration-300 hover:rotate-0 ${tilts[i % tilts.length]}`}
            >
              <p className="font-mono text-xs text-brand">// {g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink-950 px-3 py-1.5 font-mono text-xs"
                  >
                    <span className="h-2 w-2 rounded-[2px] bg-brand" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
