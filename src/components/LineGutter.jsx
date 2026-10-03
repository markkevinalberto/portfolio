import { useEffect, useRef, useState } from "react";

const LINE = 19;

export default function LineGutter() {
  const ref = useRef(null);
  const [count, setCount] = useState(120);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    const update = () => setCount(Math.ceil(host.scrollHeight / LINE));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-10 select-none overflow-hidden whitespace-pre pr-2 pt-1 text-right font-mono text-[10px] text-brand/40 lg:block"
      style={{ lineHeight: `${LINE}px` }}
    >
      {Array.from({ length: count }, (_, i) => i + 1).join("\n")}
    </div>
  );
}
