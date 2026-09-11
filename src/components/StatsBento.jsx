import { stats } from "../data";

const spanClasses = [
  "col-span-2 row-span-2 justify-between", // big featured cell
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export default function StatsBento() {
  return (
    <div className="mx-auto grid max-w-5xl auto-rows-[minmax(120px,auto)] grid-cols-4 grid-flow-dense gap-3 px-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-col rounded-2xl border border-white/10 bg-ink-850 p-6 ${spanClasses[i]} ${
            i === 0 ? "bg-gradient-to-br from-ink-850 to-ink-900" : ""
          }`}
        >
          <span
            className={`font-mono-label font-semibold text-amber tabular-nums ${
              i === 0 ? "text-6xl md:text-7xl" : "text-3xl"
            }`}
          >
            {s.num}
          </span>
          <span className={`mt-2 text-white/55 ${i === 0 ? "max-w-[16ch] text-base" : "text-xs"}`}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
