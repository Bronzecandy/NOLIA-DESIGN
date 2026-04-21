import { useNavigate, useParams } from "react-router";
import { MoveLeft } from "lucide-react";
import { RoomPriceOffer } from "../components/RoomPriceOffer";
import { isTierSlug, roomsInTier, tierMeta } from "../data/rooms";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

export default function RoomTierPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { locale } = useLanguage();

  if (!isTierSlug(slug)) {
    return null;
  }
  const tier = slug;
  const meta = tierMeta[tier];
  const list = roomsInTier(tier);

  return (
    <div className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream, color: colors.green }}>
      <div className={shellMax}>
        <button
          type="button"
          onClick={() => navigate("/rooms")}
          className="group flex items-center text-xs tracking-widest uppercase mb-8 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          <MoveLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {locale === "vi" ? "Tất cả hạng phòng" : "All room categories"}
        </button>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14">
          <div className="overflow-hidden border" style={{ borderColor: "rgba(82,98,72,0.12)" }}>
            <img src={meta.cover} alt="" className="w-full aspect-[4/3] object-cover grayscale-[10%]" />
          </div>
          <div>
            <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
              {locale === "vi" ? "Hạng phòng" : "Category"}
            </span>
            <h1 className={tx.pageTitle} style={{ fontFamily: "var(--font-heading)" }}>
              {meta.title[locale]}
            </h1>
            <p className={tx.body} style={{ fontFamily: "var(--font-body)" }}>
              {meta.blurb[locale]}
            </p>
            <p className={`${tx.caption} mt-6`} style={{ fontFamily: "var(--font-body)" }}>
              {locale === "vi"
                ? "Chọn một loại phòng bên dưới để xem diện tích, giường, view và đặt phòng."
                : "Choose a room type below to see size, bed, view, and to book."}
            </p>
          </div>
        </div>

        <h2
          className={`${tx.subsectionTitle} mb-8 pb-2 border-b`}
          style={{ fontFamily: "var(--font-heading)", borderColor: "rgba(82,98,72,0.12)" }}
        >
          {locale === "vi" ? "Các loại phòng" : "Room types"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {list.map((room) => (
            <button
              key={room.id}
              type="button"
              className="text-left group flex flex-col border overflow-hidden hover:border-[#AF9666]/40 transition-colors"
              style={{ borderColor: "rgba(82,98,72,0.12)", backgroundColor: colors.sand }}
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name[locale]}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div
                  className="absolute left-3 bottom-3 max-w-[min(95%,22rem)] px-3 py-1.5 text-left border backdrop-blur-sm w-max"
                  style={{ borderColor: "rgba(244,242,235,0.35)", backgroundColor: "rgba(82,98,72,0.88)", color: colors.cream }}
                >
                  <RoomPriceOffer
                    priceFromVnd={room.priceFromVnd}
                    discountLabel={room.discountLabel}
                    locale={locale}
                    tone="onDark"
                    size="sm"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className={`${tx.cardTitle} mb-2 group-hover:text-[#AF9666] transition-colors`}
                  style={{ fontFamily: "var(--font-heading)", color: colors.green }}
                >
                  {room.name[locale]}
                </h3>
                <p className={`${tx.cardLead} flex-1`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                  {room.shortDesc[locale]}
                </p>
                <span className="text-xs tracking-widest uppercase mt-4" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>
                  {locale === "vi" ? "Xem chi tiết →" : "View details →"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
