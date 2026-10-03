import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@phosphor-icons/react";
import akeriusImg from "../assets/akeriussms.jpg";
import requestPortal from "../assets/request-portal.png";
import RoomGridDemo from "./RoomGridDemo";
import { flagshipStats } from "../data";

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPH =
  "Every request from the church website, the SEED DOME court page, and a spare Android phone running AkeriusSMS all pass through the same Postgres rule before anyone gets a text back.";

const CHIPS = ["Next.js 16", "Prisma", "PostgreSQL", "JWT auth", "Capacitor / Android"];

export default function FeaturedRoomBooking() {
  const scope = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        imgRef.current,
        { scale: 0.9, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: imgRef.current, start: "top 90%", end: "top 40%", scrub: 0.6 },
        }
      );

      gsap.utils.toArray(".scrub-word").forEach((word) => {
        gsap.fromTo(
          word,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: word, start: "top 85%", end: "top 60%", scrub: true },
          }
        );
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative z-10 bg-ink-950 py-24 text-cream-50 md:py-32">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-brand-soft">// 09 / the flagship</p>
            <h2 className="mt-3 font-serif text-[clamp(2.25rem,5.5vw,4.25rem)] font-black leading-[0.98] tracking-tight">
              JCSGO Central <span className="italic text-brand">Request Portal.</span>
            </h2>
          </div>
          <a
            href="https://jcsgo-room-booking.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream-50 px-5 py-2.5 font-mono text-xs transition hover:bg-cream-50 hover:text-ink-950"
          >
            Open the portal
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </div>

        <p className="mt-12 max-w-4xl font-serif text-[1.6rem] font-medium leading-snug md:text-[2.1rem]">
          {PARAGRAPH.split(" ").map((w, i) => (
            <span key={i} className="scrub-word mr-[0.28em] inline-block">
              {w}
            </span>
          ))}
          <img
            src={akeriusImg}
            alt=""
            aria-hidden
            className="ml-1 inline-block h-9 w-9 translate-y-1 rounded-full border-2 border-brand object-cover align-middle"
          />
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {flagshipStats.map((s) => (
            <div key={s.label} className="rounded-xl border border-cream-50/15 bg-ink-900 px-6 py-5">
              <div className="font-serif text-5xl font-black text-brand">{s.num}</div>
              <div className="mt-2 font-mono text-xs text-cream-50/70">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-xl border-[1.5px] border-cream-50/25 bg-ink-900">
            <div className="flex items-center gap-2 bg-brand px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cream-50/50" />
              <span className="ml-3 font-mono text-xs text-cream-50">jcsgo-room-booking.vercel.app</span>
            </div>
            <img
              ref={imgRef}
              src={requestPortal}
              alt="JCSGO Central Request Portal admin bookings dashboard"
              className="block h-[420px] w-full object-cover object-top will-change-transform"
            />
          </div>

          <div>
            <p className="text-[17px] leading-relaxed text-cream-50/80">
              A Next.js 16 app for reserving any of JCSGO&rsquo;s 40 rooms across 5 buildings, no
              login required to send a request. Every request gets checked against a Postgres
              constraint that makes double-booking impossible, not just discouraged.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border-[1.5px] border-cream-50/40 px-3 py-1 font-mono text-xs text-cream-50/90"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-cream-50/15 bg-ink-900 px-5 py-4 font-mono text-[13px] leading-relaxed">
              <div className="text-cream-50/45">-- the rule every request passes through</div>
              <div className="text-brand-soft">EXCLUDE USING gist (room_id WITH =, during WITH &amp;&amp;)</div>
            </div>

            <p className="mt-10 font-mono text-xs text-brand-soft">// try it: click a slot that&rsquo;s already booked</p>
            <div className="mt-4">
              <RoomGridDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
