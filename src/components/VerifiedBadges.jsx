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

export default function VerifiedBadges({ theme = "dark" }) {
  const dark = theme === "dark";

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
          <span className="font-mono-label text-xs uppercase tracking-wide">Verified on Credly</span>
        </div>
        <h3 className={`mt-3 text-xl font-bold md:text-2xl ${dark ? "text-white" : "text-ink-950"}`}>
          Two Cisco Networking Academy badges, issued October 2026.
        </h3>
        <p className={`mt-3 text-sm md:text-base ${dark ? "text-white/70" : "text-ink-950/70"}`}>
          {badges.map((b) => b.title).join(" and ")}. Each badge is verified by Credly, so
          anyone can check it is real.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((b) => (
          <CredlyBadge key={b.id} badge={b} />
        ))}
      </div>
    </div>
  );
}
