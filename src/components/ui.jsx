import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[1000ms] ease-spring ${
        shown ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const tones = {
  white: "bg-white",
  cream: "bg-cream-100",
  ink: "bg-ink-950 text-cream-50",
  glass: "bg-[#0b0b0d] text-cream-50",
};

export function Bezel({ radius = 32, pad = 6, tone, dark = false, className = "", coreClassName = "", children }) {
  const shell = dark ? "bg-white/[0.03] ring-1 ring-white/[0.08]" : "bg-ink-950/[0.035] ring-1 ring-ink-950/[0.06]";
  const depth = dark
    ? "shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]"
    : "shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_30px_60px_-36px_rgba(23,13,10,0.28)]";
  return (
    <div className={`${shell} ${className}`} style={{ borderRadius: radius, padding: pad }}>
      <div
        className={`h-full overflow-hidden ${depth} ${tones[tone ?? (dark ? "glass" : "white")]} ${coreClassName}`}
        style={{ borderRadius: radius - pad }}
      >
        {children}
      </div>
    </div>
  );
}

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex w-fit self-start items-center gap-2 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ring-1 ${
        dark ? "bg-cream-50/10 text-cream-50/75 ring-cream-50/15" : "bg-white/70 text-ink-950/65 ring-ink-950/[0.08]"
      }`}
    >
      <span className="h-1 w-1 rounded-full bg-brand" />
      {children}
    </span>
  );
}

const pillVariants = {
  dark: { shell: "bg-ink-950 text-cream-50 hover:bg-ink-900", knob: "bg-cream-50/10" },
  light: { shell: "bg-white/70 text-ink-950 ring-1 ring-ink-950/10 hover:bg-white", knob: "bg-ink-950/[0.06]" },
  cream: { shell: "bg-cream-50 text-ink-950 hover:bg-white", knob: "bg-ink-950/[0.07]" },
};

export function PillLink({ href, children, icon: Icon = ArrowUpRight, variant = "dark", size = "md", ...rest }) {
  const v = pillVariants[variant];
  const sm = size === "sm";
  return (
    <a
      href={href}
      {...rest}
      className={`group inline-flex shrink-0 items-center rounded-full font-medium transition duration-500 ease-spring active:scale-[0.98] ${
        sm ? "gap-2.5 py-1 pl-4 pr-1 text-[13px]" : "gap-3 py-1.5 pl-6 pr-1.5 text-sm"
      } ${v.shell}`}
    >
      {children}
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105 ${
          sm ? "h-7 w-7" : "h-9 w-9"
        } ${v.knob}`}
      >
        <Icon size={sm ? 13 : 15} weight="light" />
      </span>
    </a>
  );
}
