import { useState } from "react";
import { ArrowUpRight, FileCode } from "@phosphor-icons/react";
import { projects } from "../data";

function ProjectDetails({ p }) {
  return (
    <>
      <span className="font-mono-label text-xs uppercase tracking-wide text-amber">
        {p.kicker}
      </span>
      <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{p.title}</h3>
      <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/15 px-3 py-1 font-mono-label text-[11px] text-white/60"
          >
            {c}
          </span>
        ))}
      </div>
      {p.link ? (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-white/30 pb-1 font-mono-label text-sm text-white transition hover:border-amber hover:text-amber"
        >
          Visit site
          <ArrowUpRight size={13} weight="bold" />
        </a>
      ) : p.type === "code" ? (
        <span className="mt-5 inline-block font-mono-label text-xs text-white/35">
          Bound to a private spreadsheet, no public link
        </span>
      ) : null}
    </>
  );
}

function CardMedia({ p, isActive, mobile }) {
  if (p.type === "code") {
    return (
      <div
        className={`absolute inset-0 flex flex-col justify-center gap-1.5 bg-ink-900 p-6 transition-opacity duration-700 ${
          mobile ? "" : isActive ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="mb-2 flex items-center gap-2 text-white/30">
          <FileCode size={14} weight="bold" />
          <span className="font-mono-label text-[10px] uppercase tracking-wide">
            Apps Script project
          </span>
        </div>
        {p.files.map((f) => (
          <span key={f} className="font-mono-label text-sm text-white/45">
            {f}
          </span>
        ))}
      </div>
    );
  }

  return (
    <img
      src={p.image}
      alt=""
      aria-hidden
      className={
        mobile
          ? "h-44 w-full object-cover object-top"
          : `absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ${
              isActive ? "scale-100 opacity-35" : "scale-110 opacity-0"
            }`
      }
    />
  );
}

function DesktopAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto hidden h-[520px] max-w-6xl gap-2 px-4 md:flex">
      {projects.map((p, i) => {
        const isActive = i === active;
        return (
          <button
            key={p.id}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-expanded={isActive}
            className={`group relative flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 text-left transition-[flex-basis,flex-grow] duration-700 ease-out ${
              isActive ? "flex-[8]" : "flex-[1]"
            }`}
            style={{ minWidth: isActive ? undefined : 52 }}
          >
            <CardMedia p={p} isActive={isActive} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20" />

            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono-label text-xs font-medium tracking-wide text-white/50 [writing-mode:vertical-rl] group-hover:text-white">
                  {p.title}
                </span>
              </div>
            )}

            {isActive && (
              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <ProjectDetails p={p} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

function MobileStack() {
  return (
    <div className="flex flex-col gap-4 px-4 md:hidden">
      {projects.map((p) => (
        <div key={p.id} className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850">
          <div className="relative h-44">
            <CardMedia p={p} mobile />
          </div>
          <div className="p-5">
            <ProjectDetails p={p} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectAccordion() {
  return (
    <>
      <DesktopAccordion />
      <MobileStack />
    </>
  );
}
