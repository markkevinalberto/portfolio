import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  FileCode,
  GithubLogo,
  LockSimple,
} from "@phosphor-icons/react";
import IslandNav from "./components/resume/IslandNav";
import { Bezel, Eyebrow, PillLink, Reveal } from "./components/ui";
import BadgeTile from "./components/BadgeTile";
import FeaturedRoomBooking from "./components/FeaturedRoomBooking";
import { projects, toolbox } from "./data";
import { badges } from "./badges";
import { certificateCount } from "./certData";
import profilePhoto from "./assets/profile-photo.jpg";

const home = import.meta.env.BASE_URL;
const email = "mark.kevin.alberto@jcsgo.org";
const shipped = projects.length + 1;
const years = new Date().getFullYear() - 2009;

const sections = [
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
const menuLinks = [
  ...sections,
  { label: "Resume", href: `${home}resume.html` },
  { label: "Certificates", href: `${home}certificates.html` },
  { label: "Version 1", href: home },
];
const cta = { label: "Get in touch", href: "#contact", icon: ArrowUpRight };

const heroStack = ["jcsgo", "readora", "shofr"].map((id) => projects.find((p) => p.id === id)).filter(Boolean);
const heroPlacement = [
  "hidden md:block md:absolute md:right-0 md:top-0 md:w-[74%] md:rotate-[6deg]",
  "hidden md:block md:absolute md:left-0 md:top-[20%] md:w-[74%] md:-rotate-[4deg]",
  "relative md:absolute md:bottom-0 md:right-[7%] md:w-[72%] md:rotate-[1.5deg]",
];

const facts = [
  { num: shipped, label: "systems shipped" },
  { num: 40, label: "rooms in the request portal" },
  { num: certificateCount, label: "certificates on file" },
  { num: badges.length, label: "verified badges" },
];

const issuers = [...new Set(badges.map((b) => b.issuer))];
const issuersList =
  issuers.length > 1 ? `${issuers.slice(0, -1).join(", ")} and ${issuers[issuers.length - 1]}` : issuers[0];

const badgeTilts = ["md:-rotate-[2deg]", "md:rotate-[1.5deg] md:translate-y-6", "md:-rotate-[1deg]", "md:rotate-[2deg] md:translate-y-6"];

const H2 = "mt-6 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[0.92] tracking-[-0.045em] text-ink-950";
const LEAD = "mt-6 max-w-xl text-[17px] leading-relaxed text-ink-950/60";
const CHIP = "rounded-full bg-[#f3f3f1] px-3 py-1.5 text-[12px] text-ink-950/75 ring-1 ring-ink-950/[0.05]";

function HeroCard({ p, className }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block transition-transform duration-700 ease-spring hover:z-30 md:hover:-translate-y-3 md:hover:rotate-0 ${className}`}
    >
      <Bezel radius={30} pad={6} className="shadow-[0_50px_100px_-50px_rgba(23,13,10,0.45)]">
        <img src={p.image} alt={`${p.title} screenshot`} className="aspect-[4/3] w-full object-cover object-top" />
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="truncate text-[13px] font-semibold text-ink-950">{p.title}</span>
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-950/45">{p.kicker}</span>
        </div>
      </Bezel>
    </a>
  );
}

function WorkCard({ p, i }) {
  const n = String(i + 1).padStart(2, "0");
  const linkProps = p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {};
  const Wrapper = p.link ? "a" : "div";

  return (
    <Wrapper
      {...linkProps}
      className={`group block transition-transform duration-700 ease-spring hover:-translate-y-2 md:hover:rotate-0 ${
        i % 2 ? "md:rotate-[1.2deg]" : "md:-rotate-[1.2deg]"
      }`}
    >
      <Bezel radius={36} pad={7} className="shadow-[0_40px_80px_-50px_rgba(23,13,10,0.4)]">
        <div className="overflow-hidden">
          {p.type === "code" ? (
            <div className="flex aspect-[16/10] flex-col justify-center gap-2 bg-[#f3f3f1] px-10">
              <div className="mb-2 flex items-center gap-2 text-brand">
                <FileCode size={18} weight="light" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Apps Script project</span>
              </div>
              {p.files.map((f) => (
                <span key={f} className="font-mono text-sm text-ink-950/70">
                  {f}
                </span>
              ))}
            </div>
          ) : (
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-spring group-hover:scale-[1.03]"
            />
          )}
        </div>

        <div className="p-7 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-950/45">
              {n} &middot; {p.kicker}
            </span>
            {p.link ? (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-950 text-cream-50 transition-transform duration-500 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
                <ArrowUpRight size={15} weight="light" />
              </span>
            ) : (
              <span className="flex shrink-0 items-center gap-1.5 text-[11px] text-ink-950/45">
                <LockSimple size={13} weight="light" /> Private
              </span>
            )}
          </div>
          <h3 className="mt-4 font-display text-[1.9rem] font-black leading-[1.02] tracking-[-0.04em] text-ink-950">
            {p.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-950/65">{p.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.chips.map((c) => (
              <span key={c} className={CHIP}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </Bezel>
    </Wrapper>
  );
}

function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={H2}>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={140}>
          <p className={LEAD}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

export default function HomeV2() {
  return (
    <>
      <IslandNav sections={sections} menuLinks={menuLinks} cta={cta} surface="bg-white/75" brandHref="#top" />

      <main className="relative w-full max-w-full overflow-x-clip bg-[#f3f3f1] text-ink-950">
        <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-36 md:px-8 md:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_72%_35%,#ffffff,transparent_72%),radial-gradient(35%_35%_at_10%_85%,rgba(255,255,255,0.8),transparent_70%)]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <Reveal>
                <Eyebrow>Multimedia Director &middot; JCSGO</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 font-display text-[clamp(3.25rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.055em]">
                  I build what a church <span className="whitespace-nowrap text-brand">runs on.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-950/60">
                  Websites, web apps, Android tools, and automations for Jesus Christ Saves Global Outreach in
                  Quezon City, plus the cameras and livestreams behind Sunday service.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <PillLink href="#work" icon={ArrowDown}>
                    See the work
                  </PillLink>
                  <PillLink href={`${home}resume.html`} variant="light">
                    Read the resume
                  </PillLink>
                </div>
              </Reveal>
              <Reveal delay={290}>
                <a
                  href={home}
                  className="mt-8 inline-flex items-center gap-2 text-[13px] text-ink-950/45 transition-colors duration-500 ease-spring hover:text-ink-950"
                >
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ring-1 ring-ink-950/[0.08]">
                    v2
                  </span>
                  Prefer the original? View version 1
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-6">
              <Reveal delay={180}>
                <div className="relative md:h-[560px]">
                  {heroStack.map((p, i) => (
                    <HeroCard key={p.id} p={p} className={heroPlacement[i]} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <Reveal className="mx-auto max-w-6xl">
            <Bezel radius={36} pad={7} className="shadow-[0_40px_80px_-56px_rgba(23,13,10,0.35)]">
              <dl className="grid grid-cols-2 gap-y-10 px-7 py-9 md:grid-cols-4 md:px-12 md:py-12">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-display text-5xl font-black tracking-[-0.05em] md:text-6xl">{f.num}</dt>
                    <dd className="mt-2 max-w-[18ch] text-[13px] leading-snug text-ink-950/55">{f.label}</dd>
                  </div>
                ))}
              </dl>
            </Bezel>
          </Reveal>
        </section>

        <section id="work" className="scroll-mt-28 px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow={`Work · ${shipped} systems`}
              title={
                <>
                  {shipped} systems, <span className="text-ink-950/30">mostly one church.</span>
                </>
              }
              lead="Most are for JCSGO, a church running services, rentals, and events across five buildings. A few are classroom tools for reading, recitation, and grading. The request portal gets its own section below."
            />

            <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14 md:pb-28">
              {projects.map((p, i) => (
                <div key={p.id} className={i % 2 ? "md:translate-y-28" : ""}>
                  <Reveal>
                    <WorkCard p={p} i={i} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeaturedRoomBooking />

        <section id="credentials" className="scroll-mt-28 px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Verified credentials"
              title={
                <>
                  Credentials, <span className="text-ink-950/30">not claims.</span>
                </>
              }
              lead={`${badges.length} badges from ${issuersList}. Each one opens its public verification page.`}
            />
            <div className="-mx-4 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-10 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:px-0 md:pb-12 [&::-webkit-scrollbar]:hidden">
              {badges.map((b, i) => (
                <div key={b.id ?? b.verifyUrl} className={`shrink-0 snap-start ${badgeTilts[i % badgeTilts.length]}`}>
                  <Reveal delay={i * 60}>
                    <BadgeTile badge={b} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="scroll-mt-28 px-4 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Stack"
              title={
                <>
                  The tools, <span className="text-ink-950/30">plainly.</span>
                </>
              }
              lead={
                <>
                  What the systems above actually run on, backed by{" "}
                  <a
                    href={`${home}certificates.html`}
                    className="font-medium text-ink-950 underline decoration-brand/50 underline-offset-4 transition-colors duration-500 ease-spring hover:text-brand"
                  >
                    {certificateCount} certificates
                  </a>
                  .
                </>
              }
            />
            <Reveal className="mt-16">
              <Bezel radius={36} pad={7} className="shadow-[0_40px_80px_-56px_rgba(23,13,10,0.35)]">
                <ul className="divide-y divide-ink-950/[0.06] px-7 md:px-12">
                  {toolbox.map((g) => (
                    <li key={g.group} className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                      <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-ink-950">{g.group}</h3>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((item) => (
                          <span key={item} className={CHIP}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Bezel>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <Bezel radius={36} pad={7} className="h-full shadow-[0_40px_80px_-56px_rgba(23,13,10,0.35)]">
                <div className="flex h-full flex-col gap-8 p-8 sm:flex-row sm:items-start md:p-10">
                  <img
                    src={profilePhoto}
                    alt="Mark Kevin Alberto"
                    className="h-28 w-28 shrink-0 rounded-[24px] object-cover ring-1 ring-ink-950/[0.06]"
                  />
                  <div>
                    <Eyebrow>Resume</Eyebrow>
                    <h3 className="mt-5 font-display text-3xl font-black leading-[1] tracking-[-0.04em] md:text-4xl">
                      Every role, on one page.
                    </h3>
                    <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-950/60">
                      {years} years of work across five organizations, from a printing press in Lingayen to
                      running the media team at JCSGO.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <PillLink href={`${home}resume.html`}>View resume</PillLink>
                      <PillLink href={`${home}resume.pdf`} target="_blank" rel="noopener" variant="light" icon={DownloadSimple}>
                        PDF
                      </PillLink>
                    </div>
                  </div>
                </div>
              </Bezel>
            </Reveal>
            <Reveal className="md:col-span-5" delay={100}>
              <Bezel radius={36} pad={7} tone="ink" className="h-full">
                <div className="flex h-full flex-col justify-between gap-10 p-8 md:p-10">
                  <Eyebrow dark>On file</Eyebrow>
                  <div>
                    <div className="font-display text-7xl font-black tracking-[-0.05em]">{certificateCount}</div>
                    <p className="mt-2 text-[15px] text-cream-50/60">
                      certificates, from TESDA in 2012 to Cisco Networking Academy in 2026.
                    </p>
                    <div className="mt-7">
                      <PillLink href={`${home}certificates.html`} variant="cream">
                        View all
                      </PillLink>
                    </div>
                  </div>
                </div>
              </Bezel>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-4 py-32 text-center md:px-8 md:py-48">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-[-0.055em]">
                Let&rsquo;s build something <span className="text-ink-950/30">that keeps running.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ink-950/60">
                Based in Quezon City, Philippines. Multimedia director at JCSGO by title, the person who ends up
                building its software by necessity.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
                <PillLink href={`mailto:${email}`} icon={EnvelopeSimple}>
                  {email}
                </PillLink>
                <PillLink href="https://github.com/markkevinalberto" target="_blank" rel="noopener noreferrer" variant="light" icon={GithubLogo}>
                  GitHub
                </PillLink>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="px-4 pb-12 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-ink-950/[0.08] pt-8 text-[13px] text-ink-950/50">
            <span>&copy; 2026 Mark Kevin Alberto &middot; Quezon City, PH</span>
            <div className="flex flex-wrap items-center gap-6">
              <a href={home} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                Version 1
              </a>
              <a href={`${home}resume.html`} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                Resume
              </a>
              <a href={`${home}certificates.html`} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                Certificates
              </a>
              <a href="#top" className="inline-flex items-center gap-1.5 transition-colors duration-500 ease-spring hover:text-ink-950">
                Back to top <ArrowUp size={13} weight="light" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
