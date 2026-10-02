import { SealCheck } from "@phosphor-icons/react";
import { badges } from "../badges";

function CredlyBadge({ badge }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]">
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
      className="flex w-[150px] flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5"
    >
      <div className="flex h-[150px] items-center justify-center rounded-lg bg-paper-50 p-3">
        <img src={badge.image} alt={`${badge.title} badge`} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="px-1 pb-1 pt-2">
        <p className="text-xs font-semibold leading-snug text-ink-950">{badge.title}</p>
        <p className="mt-0.5 text-[11px] italic text-ink-950/50">Issuer: {badge.issuer}</p>
        <p className="mt-1.5 text-center font-mono-label text-[9px] uppercase tracking-wide text-ink-950/35">
          View credential
        </p>
      </div>
    </a>
  );
}

export default function VerifiedBadges({ theme = "dark" }) {
  const dark = theme === "dark";
  const issuers = [...new Set(badges.map((b) => b.issuer))];
  const issuersList =
    issuers.length > 1
      ? `${issuers.slice(0, -1).join(", ")} and ${issuers[issuers.length - 1]}`
      : issuers[0];

  return (
    <div
      className={`flex flex-col gap-8 rounded-2xl border p-6 md:flex-row md:items-center md:justify-between md:p-8 ${
        dark
          ? "border-white/10 bg-ink-850"
          : "border-ink-950/10 bg-white shadow-[0_2px_12px_rgba(20,20,15,0.04)]"
      }`}
    >
      <div className="max-w-md">
        <div className={`flex items-center gap-2 ${dark ? "text-amber" : "text-amber-deep"}`}>
          <SealCheck size={20} weight="duotone" />
          <span className="font-mono-label text-xs uppercase tracking-wide">
            Verified credentials
          </span>
        </div>
        <h3 className={`mt-3 text-xl font-bold md:text-2xl ${dark ? "text-white" : "text-ink-950"}`}>
          {badges.length} badges from {issuers.length} issuers, each independently verifiable.
        </h3>
        <p className={`mt-3 text-sm md:text-base ${dark ? "text-white/70" : "text-ink-950/70"}`}>
          {issuersList}. Click any badge to open its public verification page.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
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
