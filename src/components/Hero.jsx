import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "@phosphor-icons/react";
import { requestPortalImage } from "../data";

export default function Hero() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.1 })
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(
          ".hero-float",
          { y: 40, opacity: 0, rotate: 10, duration: 1.1, ease: "power4.out" },
          "-=0.9"
        );
    },
    { scope }
  );

  return (
    <section
      id="top"
      ref={scope}
      className="relative overflow-hidden px-4 pt-40 pb-28 md:pt-48 md:pb-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-amber/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="overflow-hidden">
          <span className="block overflow-hidden">
            <span className="hero-line block text-[clamp(2.75rem,7vw,5rem)] font-black leading-[1.02] tracking-tight text-white">
              Websites, apps, and automations.
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-[clamp(2.75rem,7vw,5rem)] font-black leading-[1.02] tracking-tight text-amber">
              Nine shipped. All real.
            </span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-lg text-white/60">
          I&rsquo;m Kevin, JCSGO&rsquo;s multimedia director. Next.js, Astro, Kotlin, Apps
          Script, whatever a problem actually needs.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="hero-cta flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-mono-label text-sm font-medium text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(242,166,61,0.6)]"
          >
            View the work
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <a
            href="#contact"
            className="hero-cta rounded-full border border-white/15 px-7 py-3.5 font-mono-label text-sm font-medium text-white transition hover:border-amber hover:text-amber"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-float pointer-events-none absolute -bottom-16 right-[4%] hidden w-[360px] rotate-[6deg] rounded-2xl border border-white/10 bg-ink-850 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] lg:block xl:right-[8%] xl:w-[420px]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 font-mono-label text-[10px] text-white/40">
            jcsgo-room-booking.vercel.app
          </span>
        </div>
        <img
          src={requestPortalImage}
          alt="JCSGO Central Request Portal dashboard showing confirmed room bookings"
          className="block h-[240px] w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
