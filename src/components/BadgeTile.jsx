import { Bezel } from "./ui";

export default function BadgeTile({ badge }) {
  if (badge.kind === "credly") {
    return (
      <Bezel radius={28} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
        <div className="p-2">
          <iframe
            title={`${badge.title}, verified achievement on Credly`}
            src={`https://www.credly.com/embedded_badge/${badge.id}`}
            width="150"
            height="270"
            loading="lazy"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            className="block"
          />
        </div>
      </Bezel>
    );
  }

  return (
    <a href={badge.verifyUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Bezel radius={28} pad={6} className="transition-transform duration-700 ease-spring hover:-translate-y-1">
        <div className="flex min-h-[286px] w-[166px] flex-col p-2">
          <div className="flex h-[130px] items-center justify-center rounded-[18px] bg-cream-100 p-3">
            <img src={badge.image} alt={`${badge.title} badge`} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex flex-1 flex-col px-1.5 pt-3">
            <p className="text-[13px] font-semibold leading-snug text-ink-950">{badge.title}</p>
            <p className="mt-1 text-[11px] text-ink-950/55">{badge.issuer}</p>
            {badge.note && <p className="mt-1 text-[11px] text-ink-950/45">{badge.note}</p>}
            <p className="mt-auto pb-1 pt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-brand">View credential</p>
          </div>
        </div>
      </Bezel>
    </a>
  );
}
