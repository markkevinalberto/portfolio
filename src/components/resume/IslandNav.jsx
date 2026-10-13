import { useEffect, useState } from "react";
import { DownloadSimple } from "@phosphor-icons/react";
import { PillLink } from "../ui";

const home = import.meta.env.BASE_URL;

const sections = [
  { label: "Credentials", href: "#credentials" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const menuLinks = [
  ...sections,
  { label: "Portfolio", href: home },
  { label: "Certificates", href: `${home}certificates.html` },
  { label: "Download PDF", href: `${home}resume.pdf`, external: true },
];

export default function IslandNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
        <nav className="flex w-full max-w-md items-center justify-between gap-3 rounded-full bg-cream-50/80 py-1.5 pl-1.5 pr-1.5 shadow-[0_20px_44px_-26px_rgba(23,13,10,0.4)] ring-1 ring-ink-950/[0.08] backdrop-blur-xl md:w-max md:max-w-none md:gap-7">
          <a href={home} className="flex items-center gap-2.5 pr-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 font-serif text-sm font-semibold text-cream-50">
              K
            </span>
            <span className="text-sm font-medium tracking-tight text-ink-950">Mark Kevin Alberto</span>
          </a>

          <div className="hidden items-center gap-6 text-[13px] text-ink-950/60 md:flex">
            {sections.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <PillLink href={`${home}resume.pdf`} target="_blank" rel="noopener" icon={DownloadSimple} size="sm">
              Resume PDF
            </PillLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="resume-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-950 text-cream-50 transition-transform duration-500 ease-spring active:scale-[0.94] md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-spring ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-500 ease-spring ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="resume-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-cream-50/80 backdrop-blur-3xl transition-opacity duration-700 ease-spring md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-3 px-8">
          {menuLinks.map((l, i) => (
            <li key={l.label} className="overflow-hidden">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
                className={`block font-serif text-[2.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink-950 transition-[opacity,transform] duration-700 ease-spring ${
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
