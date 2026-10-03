import { ArrowUpRight } from "@phosphor-icons/react";

const home = import.meta.env.BASE_URL;

const links = [
  { label: "Work", href: `${home}#work` },
  { label: "Credentials", href: `${home}#credentials` },
  { label: "Certificates", href: `${home}certificates.html` },
  { label: "Resume", href: `${home}resume.html` },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-950/10 bg-cream-50">
      <nav className="wrap flex h-16 items-center justify-between gap-4">
        <a href={`${home}#top`} className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-serif text-lg font-black leading-none text-cream-50">
            K
          </span>
          <span className="text-[15px] font-bold tracking-tight text-ink-950">
            Mark Kevin <span className="text-brand">Alberto</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-ink-950 md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`${home}#contact`}
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-cream-50 transition hover:bg-brand-deep sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Get in touch
          <ArrowUpRight size={14} weight="bold" className="hidden sm:block" />
        </a>
      </nav>
    </header>
  );
}
