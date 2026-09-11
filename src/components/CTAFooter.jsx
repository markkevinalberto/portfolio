import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";

export default function CTAFooter() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden px-4 py-32 md:py-44">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[160px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-white">
            Building something a real organization needs to run on?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/55">
            Based in Quezon City, Philippines. Multimedia director at JCSGO by title, the person
            who ends up building its software by necessity.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:markkevinalberto@gmail.com"
              className="flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono-label text-sm font-medium text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(242,166,61,0.6)]"
            >
              <EnvelopeSimple size={16} weight="bold" />
              markkevinalberto@gmail.com
            </a>
            <a
              href="https://github.com/markkevinalberto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-mono-label text-sm font-medium text-white transition hover:border-amber hover:text-amber"
            >
              <GithubLogo size={16} weight="bold" />
              github.com/markkevinalberto
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-7">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <span className="font-mono-label text-xs text-white/35">Mark Kevin Alberto, 2026</span>
          <div className="flex gap-5 font-mono-label text-xs text-white/35">
            <a href="mailto:markkevinalberto@gmail.com" className="transition hover:text-amber">
              Email
            </a>
            <a
              href="https://github.com/markkevinalberto"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-amber"
            >
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="transition hover:text-amber">
              Resume
            </a>
            <a href="#top" className="transition hover:text-amber">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
