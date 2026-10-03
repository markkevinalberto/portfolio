import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, DownloadSimple, Briefcase, MapPin } from "@phosphor-icons/react";
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
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".resume-frame", {
        y: 40,
        opacity: 0,
        rotate: 6,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 75%" },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative py-20 md:py-28">
      <div className="wrap grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-brand">// the paper version</p>
          <h2 className="mt-3 font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-black leading-[0.98] tracking-tight">
            Every role, <span className="italic text-brand">on one page.</span>
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-950/75">
            At JCSGO since 2015 and now its {titles[0].toLowerCase()}, with the full history behind
            it: five organizations, seventeen years, and the skills picked up along the way.
          </p>

          <div className="mt-8 flex gap-10">
            {previewStats.map((s) => (
              <div key={s.label}>
                <span className="font-serif text-5xl font-black text-brand">{s.num}</span>
                <p className="mt-1 max-w-[16ch] font-mono text-xs text-ink-950/70">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`${home}resume.html`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              View full resume
              <ArrowUpRight size={15} weight="bold" />
            </a>
            <a
              href={`${home}resume.pdf`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-7 py-3.5 font-mono text-sm text-ink-950 transition hover:bg-ink-950 hover:text-cream-50"
            >
              Download PDF
              <DownloadSimple size={15} weight="bold" />
            </a>
          </div>
        </div>

        <a
          href={`${home}resume.html`}
          className="resume-frame block rotate-2 transition duration-300 hover:rotate-0"
        >
          <div className="overflow-hidden rounded-xl border-[2.5px] border-ink-950 bg-white shadow-offset-lg">
            <div className="flex items-center gap-2 bg-brand px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/50" />
              <span className="ml-3 font-mono text-xs text-cream-50">resume.html</span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={profilePhoto}
                  alt=""
                  aria-hidden
                  className="h-16 w-16 rounded-xl border-2 border-ink-950 object-cover"
                />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-brand">{titles[0]}</p>
                  <h3 className="font-serif text-xl font-black text-ink-950">Mark Kevin Alberto</h3>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {previewSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border-[1.5px] border-ink-950 px-2.5 py-1 font-mono text-[11px] text-ink-950"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 space-y-3 border-t-[1.5px] border-ink-950/80 pt-4">
                {previewJobs.map((job) => (
                  <div key={job.org} className="flex items-start gap-2">
                    <Briefcase size={14} weight="bold" className="mt-0.5 shrink-0 text-brand" />
                    <div>
                      <p className="text-sm font-semibold text-ink-950">{job.org}</p>
                      <p className="flex items-center gap-1 font-mono text-xs text-ink-950/55">
                        {job.location && (
                          <>
                            <MapPin size={11} />
                            {job.location} &middot;{" "}
                          </>
                        )}
                        {job.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
