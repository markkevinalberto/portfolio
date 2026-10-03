import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileCode } from "@phosphor-icons/react";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

function Shot({ p, n }) {
  const media =
    p.type === "code" ? (
      <div className="flex aspect-[4/3] flex-col justify-center gap-2 bg-cream-100 px-8">
        <div className="mb-2 flex items-center gap-2 text-brand">
          <FileCode size={16} weight="bold" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Apps Script project</span>
        </div>
        {p.files.map((f) => (
          <span key={f} className="font-mono text-sm text-ink-950/75">
            {f}
          </span>
        ))}
      </div>
    ) : (
      <img
        src={p.image}
        alt={`${p.title} screenshot`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
      />
    );

  const frame = (
    <div className="border-[2.5px] border-ink-950 bg-white p-3 shadow-offset-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[16px_16px_0_#f4b4a9]">
      <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-ink-950/70">
        <span>{n} /</span>
        <span className="text-brand">{p.kicker}</span>
      </div>
      <div className="overflow-hidden border-2 border-ink-950">{media}</div>
      <div className="mt-2 text-right font-mono text-[11px] uppercase tracking-[0.14em] text-ink-950">
        {p.link ? "Visit site ↗" : "Private build"}
      </div>
    </div>
  );

  return p.link ? (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block">
      {frame}
    </a>
  ) : (
    <div className="group">{frame}</div>
  );
}

function ProjectRow({ p, i }) {
  const n = String(i + 1).padStart(2, "0");
  const flip = i % 2 === 1;

  return (
    <article className="work-row grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={flip ? "rotate-1 md:order-2" : "-rotate-1"}>
        <Shot p={p} n={n} />
      </div>

      <div>
        <p className="font-mono text-xs text-brand">
          // {n} / {p.kicker}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] font-black leading-[1.02] tracking-tight">
          {p.title}
        </h3>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-950/75">{p.description}</p>

        <div className="mt-6 rounded-lg bg-ink-950 px-5 py-4 font-mono text-[13px] leading-relaxed">
          <div className="text-cream-50">
            <span className="text-brand">{p.term.prompt ?? "$"}</span> {p.term.cmd}
          </div>
          {p.term.lines.map((line) => (
            <div key={line} className="text-brand-soft">
              &#10003; {line}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t-[1.5px] border-ink-950 pt-5">
          <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand">Built with</span>
          {p.chips.map((c) => (
            <span key={c} className="rounded-full border-[1.5px] border-ink-950 px-3 py-1 font-mono text-xs">
              {c}
            </span>
          ))}
        </div>

        {p.link ? (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            Visit site
            <ArrowUpRight size={14} weight="bold" />
          </a>
        ) : (
          <p className="mt-7 font-mono text-xs text-ink-950/55">
            {p.type === "code"
              ? "Bound to a private spreadsheet, no public link."
              : "Private app, no public listing."}
          </p>
        )}
      </div>
    </article>
  );
}

export default function ShippedWork() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray(".work-row").forEach((row) => {
        gsap.from(row, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 85%" },
        });
      });
    },
    { scope }
  );

  return (
    <section id="work" ref={scope} className="relative pb-28 pt-32 md:pt-40">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-brand">// {projects.length + 1} systems, mostly one church.</p>
            <h2 className="mt-3 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight">
              Shipped, and <span className="italic text-brand">still running.</span>
            </h2>
          </div>
          <span className="rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-4 py-2 font-mono text-xs">
            shipped.length === {projects.length + 1}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-[17px] text-ink-950/70">
          Most of these are for Jesus Christ Saves Global Outreach (JCSGO), a church running
          services, rentals, and events across five buildings. A few are classroom tools, for
          reading, recitation, and grading.
        </p>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
