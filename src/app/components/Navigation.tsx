import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logoMark from "../../assets/brand/nolia-mark.png";
import { useLanguage } from "../context/LanguageContext";
import { roomsInTier, TIER_ORDER, tierMeta } from "../data/rooms";

import { shellGutter, shellMax } from "../shell";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB" };

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRooms, setMobileRooms] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const { locale, setLocale, t } = useLanguage();

  const go = (path: string) => {
    setMobileOpen(false);
    setRoomsOpen(false);
    setServicesOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const navLink =
    "inline-flex items-center gap-1 h-9 text-[13px] leading-none tracking-[0.14em] uppercase text-[#526248] hover:text-[#AF9666] transition-colors shrink-0";

  const serviceLinks: { to: string; label: { vi: string; en: string } }[] = [
    { to: "/services/restaurant-bar", label: { vi: "Nhà hàng & Bar", en: "Restaurant & Bar" } },
    { to: "/services/spa", label: { vi: "Spa", en: "Spa" } },
    { to: "/services/airport-transfer", label: { vi: "Đưa đón sân bay", en: "Airport transfer" } },
    { to: "/services/room-decor", label: { vi: "Trang trí phòng", en: "Room decor" } },
    { to: "/services/tours-tickets", label: { vi: "Tour & vé", en: "Tours & tickets" } },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] border-b border-[rgba(82,98,72,0.08)] ${shellGutter}`}
        style={{ backgroundColor: "rgba(244,242,235,0.94)", backdropFilter: "blur(10px)" }}
      >
        <div className={`${shellMax} py-1.5 md:py-2`}>
          {/* Mobile: 3 cột căn giữa theo trục dọc */}
          <div className="flex md:hidden items-center justify-between gap-2 min-h-[52px]">
            <button type="button" className="p-2 -ml-1 text-[#526248] flex items-center justify-center" onClick={() => setMobileOpen(true)} aria-label="Menu">
              <Menu size={22} />
            </button>
            <button type="button" className="flex flex-col items-center gap-1 shrink-0 py-0.5" onClick={() => go("/")}>
              <img src={logoMark} alt="" className="h-9 w-auto max-h-9 object-contain" />
              <span className="text-xs tracking-[0.2em] uppercase font-medium text-[#526248] leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                NOLIA
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#AF9666] leading-none">HOI AN</span>
            </button>
            <div className="flex items-center gap-1.5 text-[12px] leading-none shrink-0" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              <button type="button" className={`px-1.5 py-1 ${locale === "vi" ? "text-[#AF9666]" : "opacity-55"}`} onClick={() => setLocale("vi")}>
                VN
              </button>
              <span className="opacity-25 select-none">|</span>
              <button type="button" className={`px-1.5 py-1 ${locale === "en" ? "text-[#AF9666]" : "opacity-55"}`} onClick={() => setLocale("en")}>
                EN
              </button>
            </div>
          </div>

          {/* Desktop: grid 1fr auto 1fr — một hàng, căn giữa dọc */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 md:min-h-[52px]">
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 min-w-0 justify-start">
              <button type="button" className={navLink} style={{ fontFamily: "var(--font-body)" }} onClick={() => go("/")}>
                {t("home")}
              </button>

              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setRoomsOpen(true);
                  setServicesOpen(false);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setRoomsOpen(false), 120);
                }}
              >
                <button type="button" className={navLink} style={{ fontFamily: "var(--font-body)" }} onClick={() => go("/rooms")}>
                  {t("rooms")}
                  <ChevronDown size={14} strokeWidth={1.75} className={`shrink-0 opacity-70 ${roomsOpen ? "rotate-180" : ""} transition-transform`} />
                </button>
                {roomsOpen ? (
                  <div
                    className="absolute left-0 top-full pt-2 w-[min(100vw-2rem,20rem)] z-[90]"
                    onMouseEnter={() => {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                      setRoomsOpen(true);
                    }}
                  >
                    <div className="border py-1 shadow-lg max-h-[70vh] overflow-y-auto" style={{ backgroundColor: colors.cream, borderColor: "rgba(82,98,72,0.12)" }}>
                      {TIER_ORDER.map((tier) => (
                        <div key={tier} className="border-b last:border-b-0" style={{ borderColor: "rgba(82,98,72,0.08)" }}>
                          <button
                            type="button"
                            className="block w-full text-left px-4 py-2.5 text-[13px] font-medium hover:bg-[rgba(82,98,72,0.06)] transition-colors"
                            style={{ fontFamily: "var(--font-body)", color: colors.green }}
                            onClick={() => go(`/rooms/${tier}`)}
                          >
                            {tierMeta[tier].title[locale]}
                          </button>
                          {roomsInTier(tier).map((r) => (
                            <button
                              key={r.id}
                              type="button"
                              className="block w-full text-left pl-6 pr-4 py-2 text-[12px] opacity-90 hover:bg-[rgba(82,98,72,0.06)] hover:opacity-100 transition-colors leading-snug"
                              style={{ fontFamily: "var(--font-body)", color: colors.green }}
                              onClick={() => go(`/rooms/${r.id}`)}
                            >
                              {r.name[locale]}
                            </button>
                          ))}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="block w-full text-left px-4 py-2.5 text-[11px] tracking-[0.12em] uppercase leading-none hover:bg-[rgba(82,98,72,0.06)]"
                        style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
                        onClick={() => go("/rooms")}
                      >
                        {locale === "vi" ? "Tổng quan hạng phòng" : "Room overview"}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              <button type="button" className={navLink} style={{ fontFamily: "var(--font-body)" }} onClick={() => go("/gallery")}>
                {t("gallery")}
              </button>
            </div>

            <button
              type="button"
              className="flex flex-col items-center justify-center shrink-0 justify-self-center"
              onClick={() => go("/")}
            >
              <img src={logoMark} alt="" className="h-11 w-auto max-h-11 object-contain md:h-12 md:max-h-12" />
              <span className="text-sm tracking-[0.22em] uppercase font-medium text-[#526248] leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                NOLIA
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#AF9666] leading-none">HOI AN</span>
            </button>

            <div className="flex items-center justify-end gap-2 md:gap-3 lg:gap-4 min-w-0 flex-wrap sm:flex-nowrap">
              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setServicesOpen(true);
                  setRoomsOpen(false);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
                }}
              >
                <button type="button" className={navLink} style={{ fontFamily: "var(--font-body)" }} onClick={() => go("/services")}>
                  {t("services")}
                  <ChevronDown size={14} strokeWidth={1.75} className={`shrink-0 opacity-70 ${servicesOpen ? "rotate-180" : ""} transition-transform`} />
                </button>
                {servicesOpen ? (
                  <div
                    className="absolute right-0 top-full pt-2 w-64 z-[90]"
                    onMouseEnter={() => {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                    }}
                  >
                    <div className="border py-2 shadow-lg" style={{ backgroundColor: colors.cream, borderColor: "rgba(82,98,72,0.12)" }}>
                      {serviceLinks.map((s) => (
                        <button
                          key={s.to}
                          type="button"
                          className="block w-full text-left px-4 py-2.5 text-[13px] hover:bg-[rgba(82,98,72,0.06)] transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-body)", color: colors.green }}
                          onClick={() => go(s.to)}
                        >
                          {s.label[locale]}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <button type="button" className={navLink} style={{ fontFamily: "var(--font-body)" }} onClick={() => go("/contact")}>
                {t("contact")}
              </button>

              <div className="flex items-center gap-0.5 text-[13px] leading-none shrink-0" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                <button type="button" className={`h-9 px-2 inline-flex items-center ${locale === "vi" ? "text-[#AF9666]" : "opacity-55 hover:opacity-100"}`} onClick={() => setLocale("vi")}>
                  VN
                </button>
                <span className="opacity-25 select-none py-1">|</span>
                <button type="button" className={`h-9 px-2 inline-flex items-center ${locale === "en" ? "text-[#AF9666]" : "opacity-55 hover:opacity-100"}`} onClick={() => setLocale("en")}>
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={() => go("/booking")}
                className="h-9 inline-flex items-center justify-center px-4 text-[12px] leading-none tracking-[0.14em] uppercase border border-[#AF9666] text-[#AF9666] hover:bg-[#AF9666] hover:text-[#F4F2EB] transition-colors shrink-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t("book")}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] transition-transform duration-300 ease-out md:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: colors.cream }}
      >
        <div className="p-4 flex justify-between items-center border-b" style={{ borderColor: "rgba(82,98,72,0.1)" }}>
          <div className="flex flex-col items-start gap-1">
            <img src={logoMark} alt="" className="h-10 w-auto max-h-10 object-contain" />
            <span className="text-sm tracking-[0.18em] uppercase leading-none" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
              NOLIA
            </span>
            <span className="text-[10px] tracking-[0.22em] uppercase leading-none" style={{ color: colors.bronze }}>
              HOI AN
            </span>
          </div>
          <button type="button" onClick={() => setMobileOpen(false)} className="p-2 text-[#526248]" aria-label="Close">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          <button type="button" className="block w-full text-left text-xl" onClick={() => go("/")}>
            {t("home")}
          </button>

          <div>
            <button type="button" className="flex w-full items-center justify-between text-xl" onClick={() => setMobileRooms((v) => !v)}>
              {t("rooms")}
              <ChevronDown size={18} className={mobileRooms ? "rotate-180" : ""} />
            </button>
            {mobileRooms ? (
              <div className="mt-3 pl-3 space-y-4 border-l" style={{ borderColor: colors.bronze }}>
                {TIER_ORDER.map((tier) => (
                  <div key={tier}>
                    <button type="button" className="block text-base font-medium text-left w-full" onClick={() => go(`/rooms/${tier}`)}>
                      {tierMeta[tier].title[locale]}
                    </button>
                    <div className="mt-2 ml-2 space-y-1.5">
                      {roomsInTier(tier).map((r) => (
                        <button key={r.id} type="button" className="block text-sm opacity-90 text-left w-full" onClick={() => go(`/rooms/${r.id}`)}>
                          {r.name[locale]}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button type="button" className="block text-sm tracking-widest uppercase pt-2" style={{ color: colors.bronze }} onClick={() => go("/rooms")}>
                  {locale === "vi" ? "Tổng quan hạng" : "Overview"}
                </button>
              </div>
            ) : null}
          </div>

          <button type="button" className="block w-full text-left text-xl" onClick={() => go("/gallery")}>
            {t("gallery")}
          </button>

          <div>
            <button type="button" className="flex w-full items-center justify-between text-xl" onClick={() => setMobileServices((v) => !v)}>
              {t("services")}
              <ChevronDown size={18} className={mobileServices ? "rotate-180" : ""} />
            </button>
            {mobileServices ? (
              <div className="mt-3 pl-3 space-y-2 border-l" style={{ borderColor: colors.bronze }}>
                {serviceLinks.map((s) => (
                  <button key={s.to} type="button" className="block text-base opacity-90 text-left" onClick={() => go(s.to)}>
                    {s.label[locale]}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <button type="button" className="block w-full text-left text-xl" onClick={() => go("/contact")}>
            {t("contact")}
          </button>

          <button
            type="button"
            onClick={() => go("/booking")}
            className="w-full mt-6 py-3.5 text-sm tracking-widest uppercase bg-[#526248] text-[#F4F2EB]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("book")}
          </button>
        </div>
      </div>
    </>
  );
}
