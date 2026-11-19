import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { claudeVideos } from "../data";

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL;
const CLAUDE_ORANGE = "#d97757";

// A twelve-ray spark in Claude's terracotta, drawn here rather than copied from a logo.
function Spark({ className = "" }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="-3.4"
          y="-47"
          width="6.8"
          height={i % 2 ? 28 : 38}
          rx="3.4"
          transform={`rotate(${i * 30})`}
          fill="currentColor"
        />
      ))}
      <circle r="8" fill="currentColor" />
    </svg>
  );
}

const session = [
  { kind: "prompt", text: "make a promo video for Declare" },
  { kind: "done", text: "wrote the scenes in Remotion (React)" },
  { kind: "done", text: "synced the voice-over" },
  { kind: "done", text: "rendered declare-promo.mp4" },
  { kind: "prompt", text: "/free247editor edit this sermon" },
  { kind: "done", text: "transcribed the Tagalog sermon" },
  { kind: "done", text: "cut it to the strongest minute" },
  { kind: "done", text: "captions, zoom-ins, motion graphics" },
  { kind: "done", text: "rendered 9:16 for Reels" },
];

function ClaudeTerminal() {
  return (
    <div className="relative">
      <Spark className="absolute -right-6 -top-10 z-10 h-28 w-28 animate-[spin_28s_linear_infinite] text-[#d97757] motion-reduce:animate-none md:-right-10 md:h-36 md:w-36" />
      <div className="relative overflow-hidden rounded-2xl border-[2.5px] border-ink-950 bg-ink-950 shadow-offset-lg">
        <div className="flex items-center gap-2 border-b border-cream-50/10 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-brand" />
          <span className="h-3 w-3 rounded-full bg-brand-soft" />
          <span className="h-3 w-3 rounded-full bg-cream-200" />
          <span className="ml-3 font-mono text-xs text-cream-50/60">claude ~/videos</span>
        </div>
        <div className="space-y-1.5 px-5 py-5 font-mono text-[13px] leading-relaxed md:px-6 md:text-sm">
          <div className="cl-line flex items-center gap-2 text-cream-50/50">
            <Spark className="h-4 w-4 text-[#d97757]" />
            <span>Claude Code</span>
          </div>
          {session.map((l, i) =>
            l.kind === "prompt" ? (
              <div key={i} className={`cl-line text-cream-50 ${i > 0 ? "pt-3" : "pt-1"}`}>
                <span style={{ color: CLAUDE_ORANGE }}>&gt;</span> {l.text}
              </div>
            ) : (
              <div key={i} className="cl-line pl-4 text-brand-soft">
                &#10003; {l.text}
              </div>
            )
          )}
          <div className="cl-line pt-3 text-cream-50">
            <span style={{ color: CLAUDE_ORANGE }}>&gt;</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-[blink_1s_steps(1)_infinite] bg-cream-50 motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ v, n }) {
  return (
    <article className="claude-card border-[2.5px] border-ink-950 bg-white p-3 shadow-offset-lg">
      <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-ink-950/70">
        <span>{String(n).padStart(2, "0")} /</span>
        <span className="text-brand">{v.kind}</span>
      </div>
      <div className={`overflow-hidden border-2 border-ink-950 bg-ink-950 ${v.aspect}`}>
        <video
          className="h-full w-full object-contain"
          src={v.video ? `${base}${v.video}` : `${base}videos/claude/${v.id}.mp4`}
          poster={`${base}videos/claude/${v.id}.jpg`}
          controls
          preload="none"
          playsInline
        />
      </div>
      <div className="px-1 pb-1 pt-4">
        <h3 className="font-serif text-2xl font-black leading-tight tracking-tight">{v.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-950/70">{v.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {v.chips.map((c) => (
            <span key={c} className="rounded-full border-[1.5px] border-ink-950 px-3 py-1 font-mono text-xs">
              {c}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const steps = [
  { n: "01", t: "Prompt", d: "I describe the video in plain words." },
  { n: "02", t: "Code", d: "Claude writes the scenes in Remotion." },
  { n: "03", t: "Voice", d: "ElevenLabs, sometimes my own cloned voice." },
  { n: "04", t: "Render", d: "Out to MP4 for Reels, YouTube, or a pitch." },
];

const editSteps = [
  "The raw video goes in the inbox folder.",
  "I say “edit this.”",
  "Claude transcribes, cuts, captions, and adds motion graphics.",
  "I give notes in Taglish until it's final.",
];

export default function MadeWithClaude() {
  const scope = useRef(null);
  const [promo, demo, explainer, reel, devotional] = claudeVideos;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".cl-line", {
        opacity: 0,
        y: 8,
        duration: 0.35,
        stagger: 0.22,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cl-line", start: "top 80%" },
      });
      gsap.utils.toArray(".claude-card").forEach((card) => {
        gsap.from(card, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });
    },
    { scope }
  );

  return (
    <section id="claude" ref={scope} className="relative py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs text-brand">// Made with Claude</p>
              <span className="rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-3 py-1 font-mono text-[11px]">
                videos.length === {claudeVideos.length}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight">
              Directed by me, <span className="italic text-brand">built with Claude.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-950/70">
              Some of the videos I make by directing Claude. The app promos and demos are written as
              React code in Remotion, and the sermon clips are edited by Claude Code running
              free247editor, an open-source editing skill: drop in a raw video, say “edit this,” and
              give notes until it's final.
            </p>
            <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-xl border-[1.5px] border-ink-950 bg-white p-3">
                  <span className="font-mono text-[11px] text-brand">{s.n}</span>
                  <p className="mt-1 font-serif text-lg font-black leading-none">{s.t}</p>
                  <p className="mt-2 text-[13px] leading-snug text-ink-950/65">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <ClaudeTerminal />
          </div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2">
          <VideoCard v={promo} n={1} />
          <VideoCard v={demo} n={2} />
        </div>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
          <VideoCard v={explainer} n={3} />
          <VideoCard v={reel} n={4} />
          <div className="flex flex-col gap-10 md:col-span-2 lg:col-span-1">
            <VideoCard v={devotional} n={5} />
            <div className="claude-card rounded-2xl border-[2.5px] border-ink-950 bg-ink-950 p-6 text-cream-50 shadow-offset-lg">
              <div className="flex items-center gap-2">
                <Spark className="h-5 w-5 text-[#d97757]" />
                <p className="font-mono text-xs text-brand-soft">// How a sermon edit happens</p>
              </div>
              <ol className="mt-4 space-y-3">
                {editSteps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-snug text-cream-50/85">
                    <span className="font-mono text-xs leading-6 text-[#d97757]">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
