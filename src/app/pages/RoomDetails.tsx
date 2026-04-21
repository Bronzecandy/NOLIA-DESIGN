import { useParams, useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";
import { RoomPriceOffer } from "../components/RoomPriceOffer";
import { roomById } from "../data/rooms";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

export default function RoomDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { locale } = useLanguage();
  const room = roomById(slug);

  if (!room) {
    return (
      <div className={`pt-20 md:pt-24 pb-24 min-h-screen text-center ${shellGutter}`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
        <div className={shellMax}>{locale === "vi" ? "Không tìm thấy phòng này." : "Room not found."}</div>
      </div>
    );
  }

  return (
    <div className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`} style={{ color: colors.green }}>
      <div className={shellMax}>
        <button
          type="button"
          onClick={() => navigate(`/rooms/${room.collection}`)}
          className="group flex items-center text-xs tracking-widest uppercase mb-8 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          <MoveLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />{" "}
          {locale === "vi" ? "Về loại phòng trong hạng" : "Back to category"}
        </button>

        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
              NOLIA · {locale === "vi" ? "Hạng phòng" : "Room type"}
            </span>
            <h1 className={tx.pageTitleFlat} style={{ fontFamily: "var(--font-heading)" }}>
              {room.name[locale]}
            </h1>
          </div>
          <div
            className="border px-5 py-3 text-base shrink-0 w-max max-w-full"
            style={{ borderColor: "rgba(82,98,72,0.2)", backgroundColor: colors.sand }}
          >
            <RoomPriceOffer
              priceFromVnd={room.priceFromVnd}
              discountLabel={room.discountLabel}
              locale={locale}
              tone="onSand"
              size="lg"
            />
          </div>
        </div>

        <div className="w-full aspect-[21/9] md:aspect-[21/8] overflow-hidden mb-12 md:mb-16 group">
          <img src={room.image} alt={room.name[locale]} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[2s] ease-out" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <div className="w-full md:w-2/3">
            <h2 className={`${tx.subsectionTitle} mb-4`} style={{ fontFamily: "var(--font-heading)" }}>
              {locale === "vi" ? "Về không gian này" : "About this space"}
            </h2>
            <p className={`${tx.body} whitespace-pre-line`} style={{ fontFamily: "var(--font-body)" }}>
              {room.fullDesc[locale]}
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <div className="p-6 md:p-8 border hover:shadow-lg transition-shadow duration-500" style={{ borderColor: "rgba(175, 150, 102, 0.3)", backgroundColor: colors.sand }}>
              <h3
                className={`${tx.subsectionTitle} mb-6 border-b pb-4`}
                style={{ fontFamily: "var(--font-heading)", borderColor: "rgba(82, 98, 72, 0.2)" }}
              >
                {locale === "vi" ? "Thông tin phòng" : "Room details"}
              </h3>
              <ul className={`space-y-3 ${tx.body} mb-8`} style={{ fontFamily: "var(--font-body)" }}>
                <li className="flex justify-between gap-4">
                  <span className="opacity-70">{locale === "vi" ? "Diện tích" : "Size"}</span>
                  <span className="font-medium">{room.size}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="opacity-70">{locale === "vi" ? "Giường" : "Bed"}</span>
                  <span className="font-medium text-right">{room.bed[locale]}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="opacity-70">{locale === "vi" ? "Góc nhìn" : "View"}</span>
                  <span className="font-medium text-right">{room.view[locale]}</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => navigate("/booking")}
                className="w-full py-4 text-xs tracking-[0.18em] uppercase transition-all duration-500 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {locale === "vi" ? "Đặt phòng" : "Book now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
