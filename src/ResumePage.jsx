import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  FacebookLogo,
  DownloadSimple,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Certificate,
  Trophy,
} from "@phosphor-icons/react";
import Nav from "./components/Nav";
import profilePhoto from "./assets/profile-photo.jpg";
import { profile, contact, titles, skillGroups, experience, education } from "./resumeData";

gsap.registerPlugin(ScrollTrigger);

const home = import.meta.env.BASE_URL;

function Timeline({ children }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        ".timeline-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 30%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -18 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className="relative pl-9">
      <div className="absolute left-[7px] top-1 bottom-1 w-[2px] bg-ink-950/10">
        <div className="timeline-fill h-full w-full bg-amber" />
      </div>
      {children}
    </div>
  );
}

export default function ResumePage() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from(".hero-in", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    },
    { scope: heroRef }
  );

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-paper-50 text-ink-950">
      <Nav />

      <section ref={heroRef} className="relative overflow-hidden px-4 pt-36 pb-16 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-amber/15 blur-[120px]"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row md:items-end md:text-left">
          <img
            src={profilePhoto}
            alt="Mark Kevin Alberto"
            className="hero-in h-36 w-36 shrink-0 rounded-2xl border-4 border-white object-cover shadow-[0_20px_40px_-12px_rgba(20,20,15,0.25)] md:h-44 md:w-44"
          />
          <div className="flex-1">
            <p className="hero-in font-mono-label text-xs uppercase tracking-wide text-amber-deep">
              {titles.join(" · ")}
            </p>
            <h1 className="hero-in mt-2 text-[clamp(2rem,5vw,3.25rem)] font-black leading-tight tracking-tight">
              Mark Kevin Alberto
            </h1>
            <p className="hero-in mx-auto mt-4 max-w-xl text-ink-950/65 md:mx-0">{profile}</p>

            <div className="hero-in mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono-label text-xs text-ink-950/55 md:justify-start">
              <span className="flex items-center gap-1.5">
                <Phone size={13} weight="bold" /> {contact.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <EnvelopeSimple size={13} weight="bold" /> {contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} weight="bold" /> {contact.address}
              </span>
              <a
                href={`https://${contact.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition hover:text-amber-deep"
              >
                <FacebookLogo size={13} weight="bold" /> {contact.facebook}
              </a>
            </div>

            <div className="hero-in mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={`${home}resume.pdf`}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 font-mono-label text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <DownloadSimple size={15} weight="bold" />
                Download PDF
              </a>
              <a
                href={`${home}`}
                className="flex items-center gap-2 rounded-full border border-ink-950/15 px-6 py-3 font-mono-label text-sm font-medium text-ink-950 transition hover:border-amber-deep hover:text-amber-deep"
              >
                <ArrowLeft size={15} weight="bold" />
                Back to portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-2.5">
            <Briefcase size={20} weight="duotone" className="text-amber-deep" />
            <h2 className="text-xl font-bold">Experience</h2>
          </div>

          <Timeline>
            {experience.map((job) => (
              <div key={job.org} className="timeline-item relative mb-10 last:mb-0">
                <div
                  className={`absolute -left-9 top-1 h-4 w-4 rounded-full border-2 border-paper-50 ${
                    job.featured ? "bg-amber-deep" : "bg-amber"
                  }`}
                />
                <div
                  className={`rounded-2xl p-6 ${
                    job.featured
                      ? "border-2 border-amber bg-white shadow-[0_8px_28px_-6px_rgba(242,166,61,0.35)]"
                      : "border border-ink-950/10 bg-white shadow-[0_2px_12px_rgba(20,20,15,0.04)]"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-bold">{job.org}</h3>
                      {job.featured && (
                        <span className="rounded-full bg-amber px-2.5 py-0.5 font-mono-label text-[10px] font-medium uppercase tracking-wide text-ink-950">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono-label text-xs text-ink-950/45">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-amber-deep">{job.roles}</p>
                  {job.location && (
                    <p className="mt-0.5 font-mono-label text-[11px] text-ink-950/40">
                      {job.location}
                    </p>
                  )}

                  {job.roleDetails ? (
                    <div className="mt-4 flex flex-col gap-3">
                      {job.roleDetails.map((r) => (
                        <div key={r.role}>
                          <p className="text-sm font-bold text-ink-950">{r.role}</p>
                          <p className="mt-0.5 text-sm text-ink-950/70">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-ink-950/70">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-950/30" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.achievements && (
                    <div className="mt-5 rounded-xl bg-amber/10 p-4">
                      <div className="flex items-center gap-2">
                        <Trophy size={16} weight="fill" className="text-amber-deep" />
                        <h4 className="font-mono-label text-xs font-semibold uppercase tracking-wide text-amber-deep">
                          Key Achievements
                        </h4>
                      </div>
                      <ul className="mt-2.5 flex flex-col gap-2">
                        {job.achievements.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-ink-950/75">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Timeline>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-xl font-bold">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.group}>
                <h3 className="font-mono-label text-xs uppercase tracking-wide text-amber-deep">
                  {g.group}
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-paper-100 px-3 py-2 text-sm text-ink-950/75 transition hover:bg-paper-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-2.5">
            <GraduationCap size={20} weight="duotone" className="text-amber-deep" />
            <h2 className="text-xl font-bold">Education</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <div
                key={e.school}
                className="rounded-2xl border border-ink-950/10 bg-white p-5 shadow-[0_2px_12px_rgba(20,20,15,0.04)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-bold">{e.school}</h3>
                  <span className="font-mono-label text-xs text-ink-950/45">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-950/65">{e.program}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-5 rounded-2xl border border-ink-950/10 bg-paper-100 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Certificate size={26} weight="duotone" className="text-amber-deep" />
            <div>
              <h3 className="font-bold">21 certificates on file</h3>
              <p className="text-sm text-ink-950/60">
                Google for Education, TESDA, and two cybersecurity summits.
              </p>
            </div>
          </div>
          <a
            href={`${home}certificates.html`}
            className="flex shrink-0 items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 font-mono-label text-sm font-medium text-white transition hover:-translate-y-0.5"
          >
            View all
          </a>
        </div>
      </section>

      <footer className="border-t border-ink-950/10 px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <span className="font-mono-label text-xs text-ink-950/40">Mark Kevin Alberto, 2026</span>
          <div className="flex gap-5 font-mono-label text-xs text-ink-950/40">
            <a href={`mailto:${contact.email}`} className="transition hover:text-amber-deep">
              Email
            </a>
            <a href={`${home}`} className="transition hover:text-amber-deep">
              Portfolio
            </a>
            <a href={`${home}certificates.html`} className="transition hover:text-amber-deep">
              Certificates
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
