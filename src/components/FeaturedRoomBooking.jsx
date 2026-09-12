import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import akeriusImg from "../assets/akeriussms.jpg";
import requestPortal from "../assets/request-portal.png";
import RoomGridDemo from "./RoomGridDemo";

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPH =
  "Every request from the church website, the SEED DOME court page, and a spare Android phone running AkeriusSMS all pass through the same Postgres rule before anyone gets a text back.";

export default function FeaturedRoomBooking() {
  const scope = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        imgRef.current,
        { scale: 0.86, opacity: 0.4 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
      gsap.to(imgRef.current, {
        opacity: 0.25,
        scale: 0.94,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "bottom 45%",
          end: "bottom 5%",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray(".scrub-word").forEach((word) => {
        gsap.fromTo(
          word,
          { opacity: 0.12 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: "top 80%",
              end: "top 55%",
              scrub: true,
            },
          }
        );
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="mx-auto max-w-5xl px-4 py-8">
      <p className="max-w-3xl text-2xl font-medium leading-snug text-white/90 md:text-3xl">
        {PARAGRAPH.split(" ").map((w, i) => (
          <span key={i} className="scrub-word mr-[0.28em] inline-block">
            {w}
          </span>
        ))}
        <img
          src={akeriusImg}
          alt=""
          aria-hidden
          className="ml-2 inline-block h-9 w-9 translate-y-1 rounded-full border-2 border-amber/60 object-cover align-middle"
        />
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 font-mono-label text-xs text-white/60">
              jcsgo-room-booking.vercel.app
            </span>
          </div>
          <img
            ref={imgRef}
            src={requestPortal}
            alt="JCSGO Central Request Portal admin bookings dashboard"
            className="block h-[420px] w-full object-cover object-top will-change-transform"
          />
        </div>

        <div>
          <span className="font-mono-label text-xs uppercase tracking-wide text-amber">
            Featured &middot; Booking platform
          </span>
          <h3 className="mt-3 text-3xl font-bold text-white">JCSGO Central Request Portal</h3>
          <p className="mt-4 text-white/75">
            A Next.js 16 app for reserving any of JCSGO&rsquo;s 40 rooms across 5 buildings, no
            login required to send a request. Every request gets checked against a Postgres
            constraint that makes double-booking impossible, not just discouraged.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Next.js 16", "Prisma", "PostgreSQL", "JWT auth", "Capacitor / Android"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3 py-1 font-mono-label text-xs text-white/75"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <span className="font-mono-label text-xs uppercase tracking-wide text-amber">
              Try it &middot; the constraint, live
            </span>
            <div className="mt-4">
              <RoomGridDemo />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 font-mono-label text-xs text-white/60">
            <span>
              Constraint:{" "}
              <span className="text-white/75">EXCLUDE USING gist (room_id WITH =, during WITH &amp;&amp;)</span>
            </span>
            <a
              href="https://jcsgo-room-booking.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 transition hover:text-amber"
            >
              Open the request portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
