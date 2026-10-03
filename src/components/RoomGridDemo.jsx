import { Fragment, useMemo, useState } from "react";
import { roomGridRooms, roomGridBooked } from "../data";

export default function RoomGridDemo() {
  const [selected, setSelected] = useState(() => new Set());
  const [shakeIdx, setShakeIdx] = useState(null);
  const [message, setMessage] = useState({ text: "Try clicking an already-booked slot.", tone: "" });

  const cells = useMemo(() => {
    const out = [];
    roomGridRooms.forEach((room, r) => {
      for (let c = 0; c < 6; c++) {
        const idx = r * 6 + c;
        out.push({ idx, room, booked: roomGridBooked.includes(idx) });
      }
    });
    return out;
  }, []);

  const hours = ["9am", "10am", "11am", "1pm", "2pm", "3pm"];

  function handleClick(cell) {
    if (cell.booked) {
      setShakeIdx(cell.idx);
      setTimeout(() => setShakeIdx(null), 420);
      setMessage({
        text: "Blocked at the database level: EXCLUDE USING gist rejects the overlapping range before it ever reaches app logic.",
        tone: "danger",
      });
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(cell.idx) ? next.delete(cell.idx) : next.add(cell.idx);
      const n = next.size;
      setMessage({
        text: n > 0 ? `${n} slot${n > 1 ? "s" : ""} selected.` : "Try clicking an already-booked slot.",
        tone: n > 0 ? "ok" : "",
      });
      return next;
    });
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-5 font-mono text-sm text-cream-50/75">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-ok" /> Open
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-brand" /> Already booked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-cream-50" /> Your selection
        </span>
      </div>

      <div className="grid grid-cols-[70px_repeat(6,1fr)] gap-1.5 rounded-lg border border-cream-50/15 bg-ink-900 p-3">
        <div />
        {hours.map((h) => (
          <div key={h} className="text-center font-mono text-xs text-cream-50/55">
            {h}
          </div>
        ))}

        {roomGridRooms.map((room, r) => (
          <Fragment key={room}>
            <div className="flex items-center px-1 font-mono text-xs text-cream-50/55">{room}</div>
            {cells.slice(r * 6, r * 6 + 6).map((cell) => {
              const isSelected = selected.has(cell.idx);
              return (
                <button
                  key={cell.idx}
                  type="button"
                  aria-label={`${room} slot, ${cell.booked ? "booked" : "open"}`}
                  onClick={() => handleClick(cell)}
                  className={`h-9 rounded-sm border transition-transform duration-150 ${
                    cell.booked
                      ? "cursor-not-allowed border-brand/60 bg-brand/40 hover:border-brand"
                      : isSelected
                      ? "border-cream-50 bg-cream-50"
                      : "border-cream-50/15 bg-ok/25 hover:-translate-y-0.5 hover:border-ok"
                  } ${shakeIdx === cell.idx ? "animate-[shake_0.42s_ease]" : ""}`}
                />
              );
            })}
          </Fragment>
        ))}
      </div>

      <p
        className={`mt-3 min-h-[20px] font-mono text-sm ${
          message.tone === "danger"
            ? "text-brand-soft"
            : message.tone === "ok"
            ? "text-[#6fd59b]"
            : "text-cream-50/75"
        }`}
      >
        {message.text}
      </p>
    </div>
  );
}
