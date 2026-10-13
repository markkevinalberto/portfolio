import {
  Basketball,
  Buildings,
  Database,
  DeviceMobile,
  DoorOpen,
  Globe,
  ShieldCheck,
  TreeStructure,
} from "@phosphor-icons/react";
import akeriusImg from "../assets/akeriussms.jpg";
import requestPortal from "../assets/request-portal.png";
import RoomGridDemo from "./RoomGridDemo";
import { Bezel, Eyebrow, PillLink, Reveal } from "./ui";
import { flagshipStats, projects } from "../data";

const PORTAL = "https://jcsgo-room-booking.vercel.app/welcome";
const CHIPS = ["Next.js 16", "Prisma", "PostgreSQL", "JWT auth", "Capacitor / Android"];
const SENTENCE =
  "Every request from the church website, the SEED DOME court page, and a spare Android phone running AkeriusSMS all pass through the same Postgres rule before anyone gets a text back.";
const SOURCES = [
  { icon: Globe, label: "jcsgo.org" },
  { icon: Basketball, label: "SEED DOME court page" },
  { icon: DeviceMobile, label: "AkeriusSMS", img: akeriusImg },
];

const K = ({ children }) => <span className="text-[#ff8a6b]">{children}</span>;
const S = ({ children }) => <span className="text-[#7fe0a8]">{children}</span>;
const C = ({ children }) => <span className="text-cream-50/35">{children}</span>;

const SQL = [
  <C key="c">-- Hard stop at the database level</C>,
  <><K>ALTER TABLE</K> <S>"Booking"</S></>,
  <>{"  "}<K>ADD CONSTRAINT</K> <S>"Booking_no_overlap"</S></>,
  <>{"  "}<K>EXCLUDE USING</K> gist (</>,
  <>{"    "}<S>"roomId"</S> <K>WITH</K> =,</>,
  <>{"    "}tsrange(<S>"startsAt"</S>, <S>"endsAt"</S>)</>,
  <>{"      "}<K>WITH</K> &amp;&amp;</>,
  <>{"  "})</>,
  <>{"  "}<K>WHERE</K> (status = <S>'CONFIRMED'</S>);</>,
];

const statIcons = [DoorOpen, Buildings, ShieldCheck];

function Stat({ stat, icon: Icon }) {
  return (
    <Bezel dark className="h-full transition-transform duration-700 ease-spring hover:-translate-y-1">
      <div className="flex h-full min-h-[200px] flex-col justify-between gap-10 p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] ring-1 ring-white/[0.08]">
          <Icon size={20} weight="light" className="text-brand-soft" />
        </span>
        <div>
          <div className="font-display text-7xl font-black leading-none tracking-[-0.05em]">{stat.num}</div>
          <div className="mt-3 text-sm text-cream-50/55">{stat.label}</div>
        </div>
      </div>
    </Bezel>
  );
}

export default function FeaturedRoomBooking() {
  const n = String(projects.length + 1).padStart(2, "0");

  return (
    <section className="relative z-10 overflow-clip bg-[#050505] px-4 py-24 text-cream-50 md:px-8 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_32%_at_12%_8%,rgba(212,41,29,0.24),transparent_70%),radial-gradient(34%_28%_at_92%_58%,rgba(35,147,90,0.14),transparent_70%),radial-gradient(38%_26%_at_45%_100%,rgba(212,41,29,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow dark>{n} / The flagship</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-7 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] font-black leading-[0.92] tracking-[-0.045em]">
                JCSGO Central
                <br />
                <span className="bg-gradient-to-r from-[#ff8a6b] via-brand to-brand-soft bg-clip-text text-transparent">
                  Request Portal.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={160}>
              <p className="max-w-md text-[17px] leading-relaxed text-cream-50/65">
                Reserve any of JCSGO&rsquo;s 40 rooms across 5 buildings, no login required.
                Double-booking isn&rsquo;t discouraged here; the database makes it impossible.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8">
                <PillLink href={PORTAL} target="_blank" rel="noopener noreferrer" variant="cream">
                  Open the portal
                </PillLink>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-flow-dense lg:grid-cols-12">
          <Reveal className="md:col-span-2 lg:col-span-8 lg:row-span-2">
            <a href={PORTAL} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <Bezel dark className="h-full transition-transform duration-700 ease-spring group-hover:-translate-y-1">
                <div className="flex h-full flex-col">
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <span className="truncate rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-cream-50/55 ring-1 ring-white/[0.06]">
                      jcsgo-room-booking.vercel.app/welcome
                    </span>
                    <span className="ml-auto flex shrink-0 items-center gap-1.5 text-[11px] text-[#7fe0a8]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7fe0a8] opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7fe0a8]" />
                      </span>
                      Live
                    </span>
                  </div>
                  <div className="relative mx-2 mb-2 flex-1 overflow-hidden rounded-[20px] lg:min-h-[440px]">
                    <img
                      src={requestPortal}
                      alt="JCSGO Central Request Portal admin bookings dashboard"
                      className="h-[260px] w-full object-cover object-top transition-transform duration-[1400ms] ease-spring group-hover:scale-[1.03] md:h-[400px] lg:absolute lg:inset-0 lg:h-full"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0b0d] to-transparent" />
                  </div>
                </div>
              </Bezel>
            </a>
          </Reveal>

          {flagshipStats.slice(0, 2).map((s, i) => (
            <Reveal key={s.label} className="lg:col-span-4" delay={80 + i * 80}>
              <Stat stat={s} icon={statIcons[i]} />
            </Reveal>
          ))}

          <Reveal className="md:col-span-2 lg:col-span-7 lg:row-span-2">
            <Bezel dark className="h-full">
              <div className="p-6 md:p-9">
                <Eyebrow dark>Try it</Eyebrow>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                  The constraint, live.
                </h3>
                <p className="mt-2 text-sm text-cream-50/55">Sample bookings across six rooms. Red slots are taken.</p>
                <div className="mt-7">
                  <RoomGridDemo />
                </div>
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={80}>
            <Bezel dark className="h-full transition-transform duration-700 ease-spring hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2.5 text-cream-50/45">
                  <Database size={17} weight="light" className="text-brand-soft" />
                  <span className="text-[11px]">prisma/migrations &middot; booking_no_overlap</span>
                </div>
                <pre className="mt-5 overflow-x-auto [scrollbar-color:rgba(255,255,255,0.18)_transparent] [scrollbar-width:thin] font-mono text-[12px] leading-[1.75] text-cream-50/85">
                  <code>
                    {SQL.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        {line}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={140}>
            <Stat stat={flagshipStats[2]} icon={statIcons[2]} />
          </Reveal>

          <Reveal className="md:col-span-2 lg:col-span-8">
            <Bezel dark className="h-full transition-transform duration-700 ease-spring hover:-translate-y-1">
              <div className="flex h-full flex-col justify-between gap-8 p-7 md:p-10">
                <div className="flex items-center gap-2.5 text-brand-soft">
                  <TreeStructure size={18} weight="light" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em]">One rule, every entry point</span>
                </div>
                <p className="font-display text-[clamp(1.35rem,2.5vw,2rem)] font-medium leading-snug tracking-[-0.02em] text-cream-50/90">
                  {SENTENCE}
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOURCES.map(({ icon: Icon, label, img }) => (
                    <span
                      key={label}
                      className="flex items-center gap-2 rounded-full bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 text-[13px] text-cream-50/80 ring-1 ring-white/[0.08]"
                    >
                      {img ? (
                        <img src={img} alt="" aria-hidden className="h-6 w-6 rounded-full object-cover" />
                      ) : (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06]">
                          <Icon size={13} weight="light" />
                        </span>
                      )}
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </Bezel>
          </Reveal>

          <Reveal className="md:col-span-2 lg:col-span-4" delay={80}>
            <Bezel dark className="h-full transition-transform duration-700 ease-spring hover:-translate-y-1">
              <div className="flex h-full flex-col p-7 md:p-8">
                <Eyebrow dark>Built with</Eyebrow>
                <p className="mt-5 text-sm leading-relaxed text-cream-50/60">
                  Requests need no login. Approvals happen in an admin dashboard, and the same app ships to
                  Android through Capacitor.
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {CHIPS.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[12px] text-cream-50/80 ring-1 ring-white/[0.08]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Bezel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
