import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data";

gsap.registerPlugin(ScrollTrigger);

const drips = [
  { left: "4%", w: 16, h: 46 },
  { left: "13%", w: 9, h: 20 },
  { left: "27%", w: 20, h: 58 },
  { left: "39%", w: 11, h: 28 },
  { left: "53%", w: 22, h: 66 },
  { left: "64%", w: 12, h: 24 },
  { left: "77%", w: 18, h: 50 },
  { left: "90%", w: 10, h: 30 },
];

export default function Services() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".service-card", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
    },
    { scope }
  );

  return (
    <section
      id="services"
      ref={scope}
      className="relative z-10 bg-gradient-to-b from-brand-deep to-brand-darker pb-24 pt-32 text-cream-50 md:pb-28"
    >
      <div className="wrap">
        <p className="font-mono text-xs text-cream-50/60">// what I build</p>
        <div className="mt-6 grid gap-y-4 md:grid-cols-2 md:gap-y-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card border-t border-cream-50/20 pt-8 first:border-t-0 md:border-t-0 md:pt-0 ${
                i % 2 === 1 ? "md:border-l md:border-cream-50/25 md:pl-12" : "md:pr-12"
              }`}
            >
              <p className="font-mono text-xs text-cream-50/60">{String(i + 1).padStart(2, "0")} /</p>
              <h3 className="mt-3 font-serif text-3xl font-bold md:text-[2.1rem]">{s.title}</h3>
              <p className="mt-3 font-mono text-[13px] leading-relaxed text-cream-50/85">
                {s.lines[0]}
                <br />
                {s.lines[1]}
              </p>
              <span className="mt-5 inline-flex rounded-md border border-cream-50/40 px-3 py-1.5 font-mono text-xs text-cream-50">
                {s.tags.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-0">
        {drips.map((d, i) => (
          <span
            key={i}
            className="absolute -top-px rounded-b-full bg-brand-darker"
            style={{ left: d.left, width: d.w, height: d.h }}
          />
        ))}
      </div>
    </section>
  );
}
