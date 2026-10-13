import { Fragment, useMemo, useState } from "react";
import { CheckCircle, HandTap, Prohibit } from "@phosphor-icons/react";
import { roomGridRooms, roomGridBooked } from "../data";

const hours = ["9am", "10am", "11am", "1pm", "2pm", "3pm"];

const idle = { icon: HandTap, tone: "idle", text: "Click a slot that's already booked." };

export default function RoomGridDemo() {
  const [selected, setSelected] = useState(() => new Set());
  const [shakeIdx, setShakeIdx] = useState(null);
  const [message, setMessage] = useState(idle);

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

  function handleClick(cell) {
    if (cell.booked) {
      setShakeIdx(cell.idx);
      setTimeout(() => setShakeIdx(null), 420);
      setMessage({
        icon: Prohibit,
        tone: "danger",
        text: 'Rejected by Postgres: "Booking_no_overlap" raised 23P01 exclusion_violation. Two confirmed bookings for one room can\'t overlap.',
      });
      return;
    }
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(cell.idx) ? next.delete(cell.idx) : next.add(cell.idx);
      const n = next.size;
      setMessage(
        n > 0
          ? { icon: CheckCircle, tone: "ok", text: `${n} open slot${n > 1 ? "s" : ""} selected. Now try a booked one.` }
          : idle
      );
      return next;
    });
  }

  const Icon = message.icon;

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-cream-50/60">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-ok/60 ring-1 ring-inset ring-ok" /> Open
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-brand/40 ring-1 ring-inset ring-brand" /> Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[4px] bg-cream-50" /> Your selection
        </span>
      </div>

      <div className="grid grid-cols-[60px_repeat(6,minmax(0,1fr))] gap-1.5 rounded-[22px] bg-white/[0.025] p-3 ring-1 ring-white/[0.06]">
        <div />
        {hours.map((h) => (
          <div key={h} className="pb-1 text-center text-[11px] text-cream-50/40">
            {h}
          </div>
        ))}

        {roomGridRooms.map((room, r) => (
          <Fragment key={room}>
            <div className="flex items-center text-[11px] text-cream-50/45">{room}</div>
            {cells.slice(r * 6, r * 6 + 6).map((cell) => {
              const isSelected = selected.has(cell.idx);
              return (
                <button
                  key={cell.idx}
                  type="button"
                  aria-label={`${room} at ${hours[cell.idx % 6]}, ${cell.booked ? "booked" : isSelected ? "selected" : "open"}`}
                  onClick={() => handleClick(cell)}
                  className={`h-9 rounded-[10px] transition duration-500 ease-spring active:scale-[0.94] ${
                    cell.booked
                      ? "cursor-not-allowed bg-brand/25 ring-1 ring-inset ring-brand/50 hover:bg-brand/35"
                      : isSelected
                      ? "bg-cream-50 shadow-[0_0_24px_-6px_rgba(253,248,245,0.55)]"
                      : "bg-white/[0.04] ring-1 ring-inset ring-white/[0.06] hover:-translate-y-0.5 hover:bg-ok/20 hover:ring-ok/60"
                  } ${shakeIdx === cell.idx ? "animate-[shake_0.42s_cubic-bezier(0.32,0.72,0,1)]" : ""}`}
                />
              );
            })}
          </Fragment>
        ))}
      </div>

      <div
        aria-live="polite"
        className={`mt-4 flex min-h-[64px] items-start gap-3 rounded-[18px] px-4 py-3.5 text-[13px] leading-relaxed ring-1 transition-colors duration-500 ease-spring ${
          message.tone === "danger"
            ? "bg-brand/10 text-brand-soft ring-brand/25"
            : message.tone === "ok"
            ? "bg-ok/10 text-[#7fe0a8] ring-ok/25"
            : "bg-white/[0.03] text-cream-50/65 ring-white/[0.06]"
        }`}
      >
        <Icon size={18} weight="light" className="mt-px shrink-0" />
        <span>{message.text}</span>
      </div>
    </div>
  );
}
