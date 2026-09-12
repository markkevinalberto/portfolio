import { ArrowUpRight, FileCode } from "@phosphor-icons/react";
import { projects } from "../data";

function CardMedia({ p }) {
  if (p.type === "code") {
    return (
      <div className="flex h-48 flex-col justify-center gap-1.5 bg-ink-900 p-6">
        <div className="mb-2 flex items-center gap-2 text-white/50">
          <FileCode size={14} weight="bold" />
          <span className="font-mono-label text-xs uppercase tracking-wide">
            Apps Script project
          </span>
        </div>
        {p.files.map((f) => (
          <span key={f} className="font-mono-label text-sm text-white/65">
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
      className="h-48 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
  );
}

function ProjectCard({ p }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border-2 border-amber/50 bg-ink-850 shadow-[0_0_0_1px_rgba(242,166,61,0.08)] transition duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-[0_20px_50px_-20px_rgba(242,166,61,0.4)]">
      <div className="overflow-hidden">
        <CardMedia p={p} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono-label text-xs uppercase tracking-wide text-amber">
          {p.kicker}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white">{p.title}</h3>
        <p className="mt-3 flex-1 text-sm text-white/75">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 px-3 py-1 font-mono-label text-xs text-white/75"
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
            className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-white/30 pb-1 font-mono-label text-sm text-white transition hover:border-amber hover:text-amber"
          >
            Visit site
            <ArrowUpRight size={13} weight="bold" />
          </a>
        ) : (
          <span className="mt-5 inline-block font-mono-label text-xs text-white/55">
            {p.type === "code"
              ? "Bound to a private spreadsheet, no public link"
              : "Private app, no public link"}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ProjectAccordion() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} p={p} />
      ))}
    </div>
  );
}
