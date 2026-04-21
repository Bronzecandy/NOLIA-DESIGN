import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import type { Room } from "../data/rooms";
import { formatVnd, listPriceBeforeDiscount, roomsData } from "../data/rooms";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

/** Mock số phòng còn trống theo id (chỉ demo, không gọi API). */
function mockAvailableUnits(roomId: string): number {
  let h = 0;
  for (let i = 0; i < roomId.length; i++) h = (h * 31 + roomId.charCodeAt(i)) >>> 0;
  const base = (h % 4) + 1;
  return h % 7 === 0 ? 0 : base;
}

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { locale } = useLanguage();
  const [searchParams] = useSearchParams();
  const fromSearchBar = searchParams.get("search") === "1";

  const initialCheckIn = searchParams.get("checkIn") ?? "";
  const initialCheckOut = searchParams.get("checkOut") ?? "";
  const initialRooms = Number(searchParams.get("rooms")) || 1;
  const initialAdults = Number(searchParams.get("adults")) || 2;
  const initialChildren = Number(searchParams.get("children")) || 0;

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [rooms, setRooms] = useState(initialRooms);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);

  useEffect(() => {
    if (!fromSearchBar) return;
    const el = document.getElementById("availability");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [fromSearchBar]);

  const availableRooms: { room: Room; units: number }[] = useMemo(() => {
    return roomsData
      .map((room) => ({ room, units: mockAvailableUnits(room.id) }))
      .filter((x) => x.units > 0)
      .sort((a, b) => b.units - a.units);
  }, []);

  const c =
    locale === "vi"
      ? {
          kicker: "Đặt phòng",
          title: "Bắt đầu hành trình",
          sub: "Form đầy đủ — sẵn sàng nối với Exely / engine đối tác.",
          availKicker: "Kết quả (demo)",
          availTitle: "Phòng đang trống",
          availSub: "Dữ liệu giả lập theo ngày bạn chọn — không phải tình trạng thật.",
          availRoomsWord: "phòng",
          fromPrice: "Từ",
          viewRoom: "Xem phòng",
          noneTitle: "Không có phòng trống trong mockup",
          noneBody: "Thử đổi ngày hoặc tiếp tục gửi yêu cầu bên dưới — quản gia sẽ hỗ trợ.",
          in: "Nhận phòng",
          out: "Trả phòng",
          rooms: "Số phòng",
          adults: "Người lớn",
          children: "Trẻ em",
          roomType: "Hạng phòng",
          name: "Họ và tên",
          email: "Email",
          phone: "Điện thoại",
          note: "Ghi chú (tuỳ chọn)",
          submit: "Gửi yêu cầu đặt phòng",
          thanksTitle: "Cảm ơn bạn.",
          thanksBody: "Yêu cầu đã được ghi nhận. Quản gia NOLIA sẽ liên hệ để hoàn tất.",
        }
      : {
          kicker: "Reservation",
          title: "Begin your stay",
          sub: "Full form — ready to connect to Exely / partner engine.",
          availKicker: "Results (demo)",
          availTitle: "Rooms available",
          availSub: "Mock availability for your dates — not real inventory.",
          availRoomsWord: "rooms left",
          fromPrice: "From",
          viewRoom: "View room",
          noneTitle: "No mock availability",
          noneBody: "Try different dates or continue with the request form below.",
          in: "Check-in",
          out: "Check-out",
          rooms: "Rooms",
          adults: "Adults",
          children: "Children",
          roomType: "Room type",
          name: "Full name",
          email: "Email",
          phone: "Phone",
          note: "Notes (optional)",
          submit: "Submit request",
          thanksTitle: "Thank you.",
          thanksBody: "Your request is received. Our team will follow up shortly.",
        };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-10">
          <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
            {c.kicker}
          </span>
          <h1 className={tx.pageTitleFlat} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            {c.title}
          </h1>
          <p className={tx.bodyCenter} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            {c.sub}
          </p>
        </div>

        {fromSearchBar && (
          <section id="availability" className="mb-14 scroll-mt-28">
            <div className="text-center mb-8">
              <span className="text-[11px] tracking-[0.24em] uppercase opacity-80" style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
                {c.availKicker}
              </span>
              <h2 className={`${tx.subsectionTitle} mt-2`} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                {c.availTitle}
              </h2>
              <p className={`${tx.body} mt-2 max-w-xl mx-auto text-center`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                {c.availSub}
              </p>
            </div>

            {availableRooms.length === 0 ? (
              <div className="border p-8 text-center mb-6" style={{ borderColor: "rgba(82,98,72,0.15)", backgroundColor: colors.sand }}>
                <p className={`${tx.subsectionTitle} mb-2`} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                  {c.noneTitle}
                </p>
                <p className={tx.body} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                  {c.noneBody}
                </p>
              </div>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {availableRooms.map(({ room, units }) => {
                  const listPx = listPriceBeforeDiscount(room.priceFromVnd, room.discountLabel);
                  return (
                    <li
                      key={room.id}
                      className="group border overflow-hidden flex flex-col transition-shadow duration-500 hover:shadow-lg"
                      style={{ borderColor: "rgba(82,98,72,0.12)", backgroundColor: colors.cream }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={room.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className={tx.cardTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                            {room.name[locale]}
                          </h3>
                          <span
                            className="shrink-0 text-[10px] uppercase tracking-wider px-2 py-1"
                            style={{ fontFamily: "var(--font-body)", backgroundColor: colors.green, color: colors.cream }}
                          >
                            {locale === "vi" ? `Còn ${units} ${c.availRoomsWord}` : `${units} ${c.availRoomsWord}`}
                          </span>
                        </div>
                        <p className={`${tx.body} line-clamp-2 mb-4 flex-1`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                          {room.shortDesc[locale]}
                        </p>
                        <div className="text-sm mb-4 w-max max-w-full" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                          <p className="text-[11px] uppercase tracking-widest opacity-70">{c.fromPrice}</p>
                          {listPx != null ? (
                            <>
                              <div className="mt-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                                <span className="font-semibold text-[#AF9666] tabular-nums">
                                  {formatVnd(room.priceFromVnd, locale)} VND
                                </span>
                                <span className="line-through opacity-50 tabular-nums text-xs">
                                  {formatVnd(listPx, locale)} VND
                                </span>
                              </div>
                              {room.discountLabel ? (
                                <p className="text-[11px] uppercase tracking-wide opacity-80 mt-1.5 border-t border-[rgba(82,98,72,0.15)] pt-1.5">
                                  {room.discountLabel}
                                </p>
                              ) : null}
                            </>
                          ) : (
                            <p className="font-medium tabular-nums mt-0.5" style={{ color: colors.bronze }}>
                              {formatVnd(room.priceFromVnd, locale)} VND
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          <Link
                            to={`/rooms/${room.id}`}
                            className="text-xs tracking-widest uppercase px-4 py-2.5 border transition-colors hover:bg-[#526248] hover:text-[#F4F2EB] hover:border-[#526248]"
                            style={{ fontFamily: "var(--font-body)", borderColor: colors.bronze, color: colors.green }}
                          >
                            {c.viewRoom}
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        )}

        {isSubmitted ? (
          <div className="p-10 md:p-12 text-center animate-fade-in border max-w-3xl mx-auto" style={{ borderColor: colors.bronze, backgroundColor: colors.sand }}>
            <h2 className="text-3xl mb-3" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
              {c.thanksTitle}
            </h2>
            <p className="text-base opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {c.thanksBody}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 border p-6 md:p-10 text-base max-w-3xl mx-auto"
            style={{ borderColor: "rgba(82,98,72,0.12)", fontFamily: "var(--font-body)", color: colors.green }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.in}</label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent border-b py-2.5 outline-none focus:border-[#526248] text-base"
                  style={{ borderColor: colors.bronze }}
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.out}</label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent border-b py-2.5 outline-none focus:border-[#526248] text-base"
                  style={{ borderColor: colors.bronze }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.rooms}</label>
                <input
                  type="number"
                  min={1}
                  max={9}
                  required
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full bg-transparent border-b py-2.5 outline-none text-base"
                  style={{ borderColor: colors.bronze }}
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.adults}</label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  required
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full bg-transparent border-b py-2.5 outline-none text-base"
                  style={{ borderColor: colors.bronze }}
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.children}</label>
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full bg-transparent border-b py-2.5 outline-none text-base"
                  style={{ borderColor: colors.bronze }}
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.roomType}</label>
              <select className="w-full bg-transparent border-b py-2.5 outline-none cursor-pointer text-base" style={{ borderColor: colors.bronze }}>
                {roomsData.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name[locale]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.name}</label>
              <input type="text" required className="w-full bg-transparent border-b py-2.5 outline-none text-base" style={{ borderColor: colors.bronze }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.email}</label>
                <input type="email" required className="w-full bg-transparent border-b py-2.5 outline-none text-base" style={{ borderColor: colors.bronze }} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.phone}</label>
                <input type="tel" required className="w-full bg-transparent border-b py-2.5 outline-none text-base" style={{ borderColor: colors.bronze }} />
              </div>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-widest opacity-70 mb-1 block">{c.note}</label>
              <textarea rows={3} className="w-full bg-transparent border-b py-2.5 outline-none resize-none text-base" style={{ borderColor: colors.bronze }} />
            </div>

            <button type="submit" className="w-full py-4 text-xs tracking-[0.18em] uppercase bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666] transition-colors">
              {c.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
