import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";

const home = import.meta.env.BASE_URL;
const email = "mark.kevin.alberto@jcsgo.org";

export default function CTAFooter() {
  return (
    <>
      <section
        id="contact"
        className="relative z-10 overflow-clip bg-gradient-to-br from-brand to-brand-deep py-24 text-cream-50 md:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cream-50 to-brand-soft opacity-90 shadow-[0_0_140px_50px_rgba(253,248,245,0.28)] md:-right-10 md:h-[520px] md:w-[520px]"
        />

        <div className="wrap relative">
          <p className="font-mono text-xs text-cream-50/70">// got something that needs building?</p>
          <h2 className="mt-4 font-serif text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-tight">
            Let&rsquo;s get it
            <br />
            <span className="italic">running.</span>
          </h2>

          <div className="mt-10 max-w-xl rounded-lg bg-brand-darker/70 px-5 py-4 font-mono text-[13px] leading-relaxed">
            <div>
              <span className="text-brand-soft">$</span> mail {email}
            </div>
            <div className="text-cream-50/80">&#10003; based in Quezon City, Philippines</div>
            <div className="text-cream-50/80">&#10003; websites, web apps, Android, AV systems</div>
            <div>
              <span className="text-brand-soft">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-[blink_1s_steps(1)_infinite] bg-cream-50" />
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg text-cream-50/85">
            Multimedia director at JCSGO by title, the person who ends up building its software by
            necessity. If your organization needs something that has to keep running, tell me
            about it.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 font-mono text-sm font-medium text-brand-deep transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.45)]"
            >
              <EnvelopeSimple size={16} weight="bold" />
              {email}
            </a>
            <a
              href="https://github.com/markkevinalberto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-[1.5px] border-cream-50 px-7 py-3.5 font-mono text-sm font-medium text-cream-50 transition hover:bg-cream-50 hover:text-brand-deep"
            >
              <GithubLogo size={16} weight="bold" />
              github.com/markkevinalberto
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-ink-950/10 bg-cream-50">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-8 font-mono text-xs text-ink-950/60">
          <span>&copy; 2026 Mark Kevin Alberto &middot; Quezon City, PH</span>
          <div className="flex flex-wrap gap-5">
            <a href={`mailto:${email}`} className="transition hover:text-brand">
              Email
            </a>
            <a
              href="https://github.com/markkevinalberto"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand"
            >
              GitHub
            </a>
            <a href={`${home}certificates.html`} className="transition hover:text-brand">
              Certificates
            </a>
            <a href={`${home}resume.html`} className="transition hover:text-brand">
              Resume
            </a>
            <a href="#top" className="transition hover:text-brand">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
