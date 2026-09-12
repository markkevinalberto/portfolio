import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Briefcase, MapPin } from "@phosphor-icons/react";
import profilePhoto from "../assets/profile-photo.jpg";
import { titles, skillGroups, experience, stats } from "../resumeData";

gsap.registerPlugin(ScrollTrigger);

const home = import.meta.env.BASE_URL;
const previewSkills = skillGroups[0].skills.slice(0, 3);
const previewJobs = experience.slice(0, 2);
const previewStats = [stats[1], stats[0]];

export default function ResumePreview() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        ".resume-preview-frame",
        { y: 40, opacity: 0, rotate: -2 },
        {
          y: 0,
          opacity: 1,
          rotate: -1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: scope.current, start: "top 75%" },
        }
      );
    },
    { scope }
  );

  return (
    <section ref={scope} className="px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="font-mono-label text-xs uppercase tracking-wide text-amber">
            The full picture
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-white">
            Every role, org, and skill, laid out for whoever's hiring.
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            {titles[0]} at JCSGO since 2015, with the full history behind it: five
            organizations, seventeen years, and the skills picked up along the way.
          </p>

          <div className="mt-6 flex gap-8">
            {previewStats.map((s) => (
              <div key={s.label}>
                <span className="text-3xl font-black text-amber">{s.num}</span>
                <p className="mt-1 max-w-[16ch] text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href={`${home}resume.html`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono-label text-sm font-medium text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(242,166,61,0.6)]"
          >
            View full resume
            <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>

        <a
          href={`${home}resume.html`}
          className="resume-preview-frame block -rotate-1 overflow-hidden rounded-2xl border border-white/10 bg-paper-50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] transition hover:rotate-0"
        >
          <div className="flex items-center gap-1.5 border-b border-ink-950/10 bg-ink-850 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 font-mono-label text-xs text-white/60">resume.html</span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4">
              <img
                src={profilePhoto}
                alt=""
                aria-hidden
                className="h-16 w-16 rounded-xl border-2 border-amber-deep/30 object-cover"
              />
              <div>
                <p className="font-mono-label text-[11px] uppercase tracking-wide text-amber-deep">
                  {titles[0]}
                </p>
                <h3 className="text-lg font-bold text-ink-950">Mark Kevin Alberto</h3>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {previewSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-paper-200 px-2.5 py-1 text-[11px] font-medium text-ink-950/70"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-ink-950/10 pt-4">
              {previewJobs.map((job) => (
                <div key={job.org} className="flex items-start gap-2">
                  <Briefcase size={14} weight="bold" className="mt-0.5 shrink-0 text-ink-950/40" />
                  <div>
                    <p className="text-sm font-semibold text-ink-950">{job.org}</p>
                    <p className="flex items-center gap-1 text-xs text-ink-950/50">
                      {job.location && (
                        <>
                          <MapPin size={11} />
                          {job.location} ·{" "}
                        </>
                      )}
                      {job.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
