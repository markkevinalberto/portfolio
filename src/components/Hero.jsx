import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowUpRight,
  ArrowDown,
  VideoCamera,
  ChatCircleText,
  CalendarCheck,
  GitBranch,
} from "@phosphor-icons/react";
import profilePhoto from "../assets/profile-photo.jpg";

const K = ({ children }) => <span className="text-brand">{children}</span>;
const S = ({ children }) => <span className="text-ok">{children}</span>;
const N = ({ children }) => <span className="text-brand-deep">{children}</span>;
const C = ({ children }) => <span className="italic text-ink-950/40">{children}</span>;

const code = [
  <><K>const</K> kevin = {"{"}</>,
  <>{"  "}role: <S>"Multimedia Director"</S>,</>,
  <>{"  "}org: <S>"JCSGO"</S>,</>,
  <>{"  "}basedIn: <S>"Quezon City, PH"</S>,</>,
  <>{"  "}builds: [<S>"web"</S>, <S>"apps"</S>, <S>"android"</S>, <S>"automation"</S>],</>,
  <>{"  "}shipped: <N>9</N>,</>,
  <>{"};"}</>,
  <>{" "}</>,
  <><C>// idea in, something that keeps running out</C></>,
  <><K>function</K> startProject(idea) {"{"}</>,
  <>{"  "}<K>return</K> ship(build(idea));</>,
  <>{"}"}</>,
];

function CodeWindow() {
  return (
    <div className="hero-in overflow-hidden rounded-xl border-[1.5px] border-ink-950 bg-white shadow-offset-lg">
      <div className="flex items-center gap-2 bg-brand px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-cream-50/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream-50/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream-50/50" />
        <span className="ml-3 font-mono text-xs text-cream-50">kevin.ts</span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-wider text-cream-50/80">TypeScript</span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12px] leading-[1.8] text-ink-950 sm:text-[13px]">
        <code>
          {code.map((line, i) => (
            <div key={i} className="flex whitespace-pre">
              <span className="w-7 shrink-0 select-none pr-4 text-right text-ink-950/25">{i + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

function Chip({ className, delay, children }) {
  return (
    <div
      className={`absolute flex animate-[float_6s_ease-in-out_infinite] items-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink-950 bg-white px-3 py-2 font-mono text-[11px] text-ink-950 shadow-offset-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function HeroArt() {
  return (
    <div className="hero-art relative mx-auto aspect-square w-full max-w-[400px] lg:max-w-[540px]">
      <div className="absolute inset-0 rounded-full bg-brand/10" />
      <div className="absolute inset-[10%] rounded-full bg-brand/15" />
      <div className="absolute inset-[22%] rounded-full bg-gradient-to-br from-brand to-brand-deep shadow-[0_30px_80px_-20px_rgba(168,22,15,0.55)]" />

      <div className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2 -rotate-3">
        <div className="relative rounded-[1.6rem] border-[3px] border-ink-950 bg-cream-50 p-2 shadow-offset">
          <img
            src={profilePhoto}
            alt="Mark Kevin Alberto"
            className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
          />
          <span className="absolute -left-3 -top-3 flex items-center gap-1.5 rounded-full border-2 border-ink-950 bg-white px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Rec
          </span>
        </div>
      </div>

      <Chip className="left-0 top-[12%]" delay="0s">
        <VideoCamera size={15} weight="bold" className="text-brand" />
        Live: Sunday service
      </Chip>
      <Chip className="right-0 top-[27%]" delay="-2s">
        <ChatCircleText size={15} weight="bold" className="text-brand" />
        SMS sent &#10003;
      </Chip>
      <Chip className="bottom-[17%] left-[1%]" delay="-4s">
        <CalendarCheck size={15} weight="bold" className="text-brand" />
        B3-101 &middot; 9am booked
      </Chip>
      <Chip className="bottom-[5%] right-[3%]" delay="-3s">
        <GitBranch size={15} weight="bold" className="text-brand" />
        deployed &#10003;
      </Chip>

      <span aria-hidden className="absolute left-[18%] top-[1%] font-mono text-xl text-brand">{"{ }"}</span>
      <span aria-hidden className="absolute right-[16%] top-[6%] font-mono text-lg text-ink-950">&lt;/&gt;</span>
      <span aria-hidden className="absolute left-[5%] top-[50%] font-mono text-lg text-ink-950/70">01</span>
      <span aria-hidden className="absolute right-[1%] top-[58%] font-mono text-xl text-brand">=&gt;</span>
      <span aria-hidden className="absolute bottom-[1%] left-[40%] font-mono text-2xl text-brand">;</span>
    </div>
  );
}

export default function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from(".hero-in", { y: 16, opacity: 0, duration: 0.7, stagger: 0.07 }, 0.15)
        .from(".hero-art", { scale: 0.92, opacity: 0, duration: 1.1 }, 0.1);
    },
    { scope }
  );

  return (
    <section id="top" ref={scope} className="relative overflow-clip pb-20 pt-10 md:pt-16">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr]">
          <div className="relative z-10">
            <span className="hero-in inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-950">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Open to projects &middot; Web, apps &amp; AV
            </span>

            <p className="hero-in mt-10 font-serif text-[1.9rem] italic text-brand md:text-4xl">I&rsquo;m</p>
            <h1
              className="mt-1 font-serif font-black leading-[0.9] tracking-[-0.025em] text-ink-950"
              style={{ fontSize: "clamp(3.25rem, 7vw, 6rem)" }}
            >
              <span className="hero-line block">Mark Kevin</span>
              <span className="hero-line block">
                <span className="italic text-brand">Alberto</span>.
                <span
                  aria-hidden
                  className="ml-2 inline-block w-[0.07em] animate-[blink_1.05s_steps(1)_infinite] bg-brand align-[-0.08em]"
                  style={{ height: "0.78em" }}
                />
              </span>
            </h1>

            <p className="hero-in mt-8 max-w-xl text-lg leading-snug text-ink-950 md:text-[1.35rem]">
              Websites. Web apps. Automations.{" "}
              <span className="font-serif font-semibold italic text-brand">
                Built for an organization that runs on them.
              </span>
            </p>
          </div>

          <HeroArt />
        </div>

        <div className="mt-14 grid gap-12 border-t-[1.5px] border-ink-950 pt-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="hero-in max-w-lg text-[17px] leading-relaxed text-ink-950/80">
              I&rsquo;m JCSGO&rsquo;s multimedia director, and the person who ends up building its
              software: room bookings, volunteer schedules, an SMS gateway on a spare Android phone,
              and the website that ties them together. Plus the cameras, livestreams, and sound
              behind Sunday service.
            </p>
            <div className="hero-in mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Get in touch
                <ArrowUpRight size={15} weight="bold" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-7 py-3.5 font-mono text-sm text-ink-950 transition hover:bg-ink-950 hover:text-cream-50"
              >
                See what I&rsquo;ve shipped
                <ArrowDown size={15} weight="bold" />
              </a>
            </div>
          </div>

          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
