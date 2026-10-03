import { marqueeItems } from "../data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div aria-hidden className="relative z-20 -mb-16 overflow-clip py-12">
      <div className="-ml-[5%] w-[110%] -rotate-2 bg-ink-950 py-4">
        <div className="flex w-max animate-[marquee_45s_linear_infinite] items-center">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className={
                  item.style === "serif"
                    ? "whitespace-nowrap px-7 font-serif text-[1.75rem] font-bold italic text-cream-50"
                    : "whitespace-nowrap px-7 font-mono text-lg text-cream-50/90"
                }
              >
                {item.text}
              </span>
              <span className="text-xl text-brand">&#10042;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
