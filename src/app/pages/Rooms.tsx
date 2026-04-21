import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { TIER_ORDER, tierMeta, type TierId } from "../data/rooms";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

export default function Rooms() {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  return (
    <div className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={shellMax}>
        <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
          {locale === "vi" ? "Hạng phòng" : "Room categories"}
        </span>
        <h1 className={tx.pageTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          {locale === "vi" ? "Không gian lưu trú" : "Accommodation"}
        </h1>
        <p className={`${tx.bodyTight} mb-12 md:mb-16`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
          {locale === "vi"
            ? "Chọn một hạng phòng để xem các loại phòng thuộc hạng đó. Từ trang loại phòng, bạn mở trang chi tiết từng căn."
            : "Pick a category to see its room types. From there, open each room’s detail page."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {TIER_ORDER.map((tier: TierId) => {
            const meta = tierMeta[tier];
            return (
              <button
                key={tier}
                type="button"
                className="text-left group border overflow-hidden flex flex-col h-full hover:border-[#AF9666]/50 transition-colors duration-300"
                style={{ borderColor: "rgba(82,98,72,0.12)", backgroundColor: colors.sand }}
                onClick={() => navigate(`/rooms/${tier}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={meta.cover}
                    alt={meta.title[locale]}
                    className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl md:text-3xl text-white drop-shadow-sm" style={{ fontFamily: "var(--font-heading)" }}>
                      {meta.title[locale]}
                    </h2>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-base md:text-lg leading-relaxed opacity-90 font-light flex-1 mb-4" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                    {meta.blurb[locale]}
                  </p>
                  <span
                    className="inline-flex items-center text-xs tracking-[0.18em] uppercase group-hover:text-[#AF9666] transition-colors"
                    style={{ fontFamily: "var(--font-body)", color: colors.green }}
                  >
                    {locale === "vi" ? "Xem loại phòng" : "View room types"}{" "}
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
