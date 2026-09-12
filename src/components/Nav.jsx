import { ArrowUpRight } from "@phosphor-icons/react";

const home = import.meta.env.BASE_URL;

export default function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-white/10 bg-ink-900 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <a href={`${home}#top`} className="flex items-center gap-2 pl-2 pr-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber/40 bg-ink-850 font-mono-label text-[10px] font-semibold text-amber">
            MKA
          </span>
          <span className="hidden text-sm font-medium text-white sm:inline">Mark Kevin Alberto</span>
        </a>
        <div className="hidden items-center gap-4 font-mono-label text-xs text-white/80 md:flex">
          <a href={`${home}#work`} className="transition hover:text-white">Work</a>
          <a href={`${home}#stack`} className="transition hover:text-white">Stack</a>
          <a href={`${home}certificates.html`} className="transition hover:text-white">Certificates</a>
          <a href={`${home}resume.html`} className="transition hover:text-white">Resume</a>
          <a href={`${home}#contact`} className="transition hover:text-white">Contact</a>
        </div>
        <a
          href={`${home}#contact`}
          className="flex items-center gap-1 rounded-full bg-amber px-4 py-2 font-mono-label text-xs font-medium text-ink-950 transition hover:bg-amber-soft"
        >
          Get in touch
          <ArrowUpRight size={13} weight="bold" />
        </a>
      </nav>
    </header>
  );
}
