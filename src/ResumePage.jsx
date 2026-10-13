import {
  ArrowLeft,
  ArrowUp,
  DownloadSimple,
  EnvelopeSimple,
  FacebookLogo,
  MapPin,
  Phone,
  Trophy,
} from "@phosphor-icons/react";
import IslandNav from "./components/resume/IslandNav";
import { Bezel, Eyebrow, PillLink, Reveal } from "./components/resume/ui";
import { badges } from "./badges";
import { certificateCount } from "./certData";
import profilePhoto from "./assets/profile-photo.jpg";
import { profile, contact, titles, skillGroups, experience, education } from "./resumeData";

const home = import.meta.env.BASE_URL;

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const H2 = "mt-6 font-serif text-[clamp(2.25rem,4.2vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink-950";
const LEAD = "mt-6 max-w-sm text-[17px] leading-relaxed text-ink-950/65";

const years = new Date().getFullYear() - 2009;
const facts = [
  { num: String(years), label: "years working, since 2009" },
  { num: String(experience[0].roleDetails.length), label: "roles at one organization" },
  { num: String(experience.length), label: "organizations" },
  { num: String(certificateCount), label: "certificates on file" },
];

const issuers = [...new Set(badges.map((b) => b.issuer))];
const issuersList =
  issuers.length > 1 ? `${issuers.slice(0, -1).join(", ")} and ${issuers[issuers.length - 1]}` : issuers[0];

const contactRows = [
  { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: EnvelopeSimple, label: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: contact.address },
  { icon: FacebookLogo, label: contact.facebook, href: `https://${contact.facebook}`, external: true },
];

function SplitSection({ id, eyebrow, title, lead, children, tone = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 py-24 md:px-8 md:py-36 ${tone}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="min-w-0 md:col-span-5">
          <div className="md:sticky md:top-32">
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
        </div>
        <div className="min-w-0 md:col-span-7">{children}</div>
      </div>
    </section>
  );
}

function BadgeTile({ badge }) {
  if (badge.kind === "credly") {
    return (
      <Bezel radius={28} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
        <div className="p-2">
          <iframe
            title={`${badge.title}, verified achievement on Credly`}
            src={`https://www.credly.com/embedded_badge/${badge.id}`}
            width="150"
            height="270"
            loading="lazy"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            className="block"
          />
        </div>
      </Bezel>
    );
  }

  return (
    <a href={badge.verifyUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Bezel radius={28} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
        <div className="flex h-[286px] w-[166px] flex-col p-2">
          <div className="flex h-[150px] items-center justify-center rounded-[18px] bg-cream-100 p-3">
            <img src={badge.image} alt={`${badge.title} badge`} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex flex-1 flex-col px-1.5 pt-3">
            <p className="text-[13px] font-semibold leading-snug text-ink-950">{badge.title}</p>
            <p className="mt-1 text-[11px] text-ink-950/55">{badge.issuer}</p>
            {badge.note && <p className="mt-1 text-[11px] text-ink-950/45">{badge.note}</p>}
            <p className="mt-auto pb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand">View credential</p>
          </div>
        </div>
      </Bezel>
    </a>
  );
}

function JobCard({ job }) {
  return (
    <Bezel radius={32} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
      <div className="p-7 md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-950/50">{job.period}</span>
          {job.featured && (
            <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream-50">
              Current
            </span>
          )}
        </div>
        <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink-950 md:text-[2rem]">
          {job.org}
        </h3>
        <p className="mt-2 text-sm text-brand">{job.roles}</p>
        {job.location && <p className="mt-1 text-[13px] text-ink-950/50">{job.location}</p>}

        {job.roleDetails ? (
          <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {job.roleDetails.map((r) => (
              <div key={r.role}>
                <p className="text-sm font-semibold text-ink-950">{r.role}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-950/65">{r.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {job.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-950/70">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {job.achievements && (
          <div className="mt-10 rounded-[22px] bg-brand/[0.045] p-6 ring-1 ring-brand/10 md:p-8">
            <div className="flex items-center gap-2.5 text-brand">
              <Trophy size={18} weight="light" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Key achievements</span>
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              {job.achievements.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink-950/80">
                  <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Bezel>
  );
}

export default function ResumePage() {
  return (
    <>
      <IslandNav />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.045]"
        style={{ backgroundImage: NOISE }}
      />

      <main className="relative w-full max-w-full overflow-x-clip text-ink-950">
        <section id="top" className="relative flex min-h-[100dvh] items-center px-4 pb-24 pt-36 md:px-8 md:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_80%_18%,rgba(212,41,29,0.09),transparent_70%),radial-gradient(45%_40%_at_8%_75%,rgba(126,146,116,0.12),transparent_70%)] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>Resume &middot; 2026</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 font-serif text-[clamp(3.25rem,8vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-ink-950">
                  Mark Kevin
                  <br />
                  <span className="italic text-brand">Alberto.</span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-ink-950/50">
                  {titles.join(" · ")}
                </p>
              </Reveal>
              <Reveal delay={210}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-950/70">{profile}</p>
              </Reveal>
              <Reveal delay={270}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <PillLink href={`${home}resume.pdf`} target="_blank" rel="noopener" icon={DownloadSimple}>
                    Download PDF
                  </PillLink>
                  <PillLink href={home} variant="light" icon={ArrowLeft}>
                    Back to portfolio
                  </PillLink>
                </div>
              </Reveal>
              <Reveal delay={330}>
                <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-950/[0.08] pt-8 sm:grid-cols-4">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <dt className="font-serif text-4xl font-semibold tracking-[-0.03em] text-ink-950">{f.num}</dt>
                      <dd className="mt-1.5 text-[12px] leading-snug text-ink-950/55">{f.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={180}>
                <div className="mx-auto max-w-sm">
                  <Bezel radius={40} pad={8} className="md:rotate-[1.5deg]">
                    <img src={profilePhoto} alt="Mark Kevin Alberto" className="aspect-[4/5] w-full object-cover" />
                  </Bezel>
                  <Bezel radius={28} pad={6} className="relative mt-5 md:-mt-16 md:ml-10 md:-rotate-[1.5deg]">
                    <ul className="divide-y divide-ink-950/[0.06] px-5 py-2">
                      {contactRows.map(({ icon: Icon, label, href, external }) => {
                        const inner = (
                          <>
                            <Icon size={16} weight="light" className="mt-0.5 shrink-0 text-brand" />
                            <span className="min-w-0 break-words">{label}</span>
                          </>
                        );
                        return (
                          <li key={label} className="text-[13px] text-ink-950/75">
                            {href ? (
                              <a
                                href={href}
                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="flex gap-3 py-3 transition-colors duration-500 ease-spring hover:text-ink-950"
                              >
                                {inner}
                              </a>
                            ) : (
                              <span className="flex gap-3 py-3">{inner}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </Bezel>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <SplitSection
          id="credentials"
          eyebrow="Verified credentials"
          title={
            <>
              Badges you can <span className="italic text-brand">check.</span>
            </>
          }
          lead={`${badges.length} badges from ${issuersList}. Each opens its public verification page.`}
        >
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-10 [scrollbar-width:none] md:mx-0 md:flex-wrap md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
            {badges.map((b, i) => (
              <Reveal key={b.id ?? b.verifyUrl} delay={i * 60} className="shrink-0 snap-start">
                <BadgeTile badge={b} />
              </Reveal>
            ))}
          </div>
        </SplitSection>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <Reveal>
            <p className="mx-auto max-w-4xl text-center font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.025em] text-ink-950">
              Built by
              <img
                src={profilePhoto}
                alt=""
                aria-hidden
                className="mx-3 inline-block h-[0.85em] w-[1.7em] rounded-full object-cover align-[-0.08em] ring-1 ring-ink-950/10"
              />
              one person who never stayed in <span className="italic text-brand">just one role.</span>
            </p>
          </Reveal>
        </section>

        <SplitSection
          id="skills"
          eyebrow="Skills"
          title={
            <>
              What I <span className="italic text-brand">bring.</span>
            </>
          }
          lead="Leadership in media and production, hands-on IT, and the tools that hold it together."
        >
          <div className="flex flex-col gap-6">
            {skillGroups.map((g, i) => (
              <Reveal key={g.group} delay={i * 80}>
                <Bezel radius={32} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
                  <div className="p-7 md:p-9">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink-950">{g.group}</h3>
                      <span className="text-[11px] font-medium tracking-[0.2em] text-ink-950/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-cream-100 px-4 py-2 text-sm text-ink-950/80 ring-1 ring-ink-950/[0.05]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Bezel>
              </Reveal>
            ))}
          </div>
        </SplitSection>

        <SplitSection
          id="experience"
          eyebrow="Experience"
          title={
            <>
              Five organizations, <span className="italic text-brand">one that stuck.</span>
            </>
          }
          lead={`${years} years of work, from a printing press in Lingayen to running the media team at JCSGO.`}
        >
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <Reveal key={job.org}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </SplitSection>

        <SplitSection
          id="education"
          eyebrow="Education"
          title={
            <>
              Where it <span className="italic text-brand">started.</span>
            </>
          }
          lead="From Pangasinan classrooms to a TESDA hardware certification."
        >
          <Reveal>
            <Bezel radius={32} pad={6}>
              <ul className="divide-y divide-ink-950/[0.06] px-7 md:px-10">
                {education.map((e) => (
                  <li key={e.school} className="grid gap-2 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                    <span className="pt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-950/45">
                      {e.period}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold tracking-[-0.015em] text-ink-950">{e.school}</h3>
                      <p className="mt-1 text-sm text-ink-950/65">{e.program}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </SplitSection>

        <section className="px-4 py-24 md:px-8 md:py-32">
          <Reveal className="mx-auto max-w-5xl">
            <Bezel radius={40} pad={8} tone="ink">
              <div className="flex flex-col items-start gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-14">
                <div>
                  <Eyebrow dark>On file</Eyebrow>
                  <h2 className="mt-6 font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                    {certificateCount} certificates, <span className="italic text-brand-soft">all viewable.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream-50/65">
                    Google for Education, Cisco Networking Academy, TESDA, and two cybersecurity summits.
                  </p>
                </div>
                <PillLink href={`${home}certificates.html`} variant="cream">
                  View all
                </PillLink>
              </div>
            </Bezel>
          </Reveal>
        </section>

        <footer className="px-4 pb-12 pt-4 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-ink-950/[0.08] pt-8 text-[13px] text-ink-950/50">
            <span>&copy; 2026 Mark Kevin Alberto &middot; Quezon City, PH</span>
            <div className="flex flex-wrap items-center gap-6">
              <a href={`mailto:${contact.email}`} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                Email
              </a>
              <a href={home} className="transition-colors duration-500 ease-spring hover:text-ink-950">
                Portfolio
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
