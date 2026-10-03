import { badges } from "../badges";

function CredlyBadge({ badge }) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-ink-950 bg-white p-2 shadow-offset-sm">
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
  );
}

function ImageBadge({ badge }) {
  return (
    <a
      href={badge.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-[170px] flex-col overflow-hidden rounded-xl border-2 border-ink-950 bg-white p-2 shadow-offset-sm transition hover:-translate-y-1"
    >
      <div className="flex h-[150px] items-center justify-center rounded-lg bg-cream-100 p-3">
        <img src={badge.image} alt={`${badge.title} badge`} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="px-1 pb-1 pt-2">
        <p className="text-xs font-semibold leading-snug text-ink-950">{badge.title}</p>
        <p className="mt-0.5 text-[11px] italic text-ink-950/55">Issuer: {badge.issuer}</p>
        <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-brand">
          View credential &#8599;
        </p>
      </div>
    </a>
  );
}

export default function VerifiedBadges() {
  const issuers = [...new Set(badges.map((b) => b.issuer))];
  const issuersList =
    issuers.length > 1
      ? `${issuers.slice(0, -1).join(", ")} and ${issuers[issuers.length - 1]}`
      : issuers[0];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-brand">// verified, not just claimed</p>
          <h2 className="mt-3 font-serif text-[clamp(2.25rem,5.5vw,4rem)] font-black leading-[0.98] tracking-tight">
            Badges you can <span className="italic text-brand">check.</span>
          </h2>
        </div>
        <span className="rounded-full border-[1.5px] border-ink-950 bg-cream-50 px-4 py-2 font-mono text-xs">
          badges.length === {badges.length}
        </span>
      </div>
      <p className="mt-5 max-w-2xl text-[17px] text-ink-950/70">
        {issuersList}. Click any badge to open its public verification page.
      </p>

      <div className="mt-10 flex flex-wrap items-start gap-6">
        {badges.map((b) =>
          b.kind === "credly" ? (
            <CredlyBadge key={b.id} badge={b} />
          ) : (
            <ImageBadge key={b.verifyUrl} badge={b} />
          )
        )}
      </div>
    </div>
  );
}
