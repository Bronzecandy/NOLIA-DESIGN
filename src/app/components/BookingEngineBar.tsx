import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", line: "rgba(82,98,72,0.2)" };

type Props = { id?: string; className?: string };

export function BookingEngineBar({ id = "booking-engine", className = "" }: Props) {
  const { locale } = useLanguage();
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const copy = {
    vi: {
      title: "Đặt phòng",
      hint: "Form tạm — sẵn sàng tích hợp Exely / engine đối tác.",
      in: "Nhận phòng",
      out: "Trả phòng",
      r: "Số phòng",
      ad: "Người lớn",
      ch: "Trẻ em",
      cta: "Kiểm tra phòng trống",
    },
    en: {
      title: "Reserve",
      hint: "Placeholder form — ready for Exely / partner engine.",
      in: "Check-in",
      out: "Check-out",
      r: "Rooms",
      ad: "Adults",
      ch: "Children",
      cta: "Check availability",
    },
  }[locale];

  const goBooking = () => {
    const q = new URLSearchParams();
    q.set("search", "1");
    if (checkIn) q.set("checkIn", checkIn);
    if (checkOut) q.set("checkOut", checkOut);
    q.set("rooms", String(rooms));
    q.set("adults", String(adults));
    q.set("children", String(children));
    navigate(`/booking?${q.toString()}#availability`);
  };

  return (
    <section id={id} className={`py-10 md:py-12 ${shellGutter} ${className}`} style={{ backgroundColor: "#EDEAE0" }}>
      <div className={`${shellMax} border px-4 py-6 md:px-6 md:py-7`} style={{ borderColor: colors.line, backgroundColor: colors.cream }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl tracking-wide" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
              {copy.title}
            </h3>
            <p className="text-sm opacity-70 mt-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.hint}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3 items-end">
          <label className="col-span-1">
            <span className="text-[11px] uppercase tracking-widest opacity-70 block mb-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.in}
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent border-b py-2.5 text-base outline-none focus:border-[#526248]"
              style={{ borderColor: colors.bronze, color: colors.green, fontFamily: "var(--font-body)" }}
            />
          </label>
          <label className="col-span-1">
            <span className="text-[11px] uppercase tracking-widest opacity-70 block mb-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.out}
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent border-b py-2.5 text-base outline-none focus:border-[#526248]"
              style={{ borderColor: colors.bronze, color: colors.green, fontFamily: "var(--font-body)" }}
            />
          </label>
          <label className="col-span-1">
            <span className="text-[11px] uppercase tracking-widest opacity-70 block mb-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.r}
            </span>
            <input
              type="number"
              min={1}
              max={9}
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className="w-full bg-transparent border-b py-2.5 text-base outline-none focus:border-[#526248]"
              style={{ borderColor: colors.bronze, color: colors.green, fontFamily: "var(--font-body)" }}
            />
          </label>
          <label className="col-span-1">
            <span className="text-[11px] uppercase tracking-widest opacity-70 block mb-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.ad}
            </span>
            <input
              type="number"
              min={1}
              max={12}
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full bg-transparent border-b py-2.5 text-base outline-none focus:border-[#526248]"
              style={{ borderColor: colors.bronze, color: colors.green, fontFamily: "var(--font-body)" }}
            />
          </label>
          <label className="col-span-1">
            <span className="text-[11px] uppercase tracking-widest opacity-70 block mb-1" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {copy.ch}
            </span>
            <input
              type="number"
              min={0}
              max={8}
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full bg-transparent border-b py-2.5 text-base outline-none focus:border-[#526248]"
              style={{ borderColor: colors.bronze, color: colors.green, fontFamily: "var(--font-body)" }}
            />
          </label>
          <div className="col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={goBooking}
              className="block w-full text-center py-3.5 text-xs tracking-[0.18em] uppercase transition-all duration-500 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {copy.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
