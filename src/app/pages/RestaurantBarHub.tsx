import { useNavigate } from "react-router";
import { restaurantChildren } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB" };

export default function RestaurantBarHub() {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  return (
    <div className={`pt-20 md:pt-24 pb-20 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={shellMax}>
        <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
          {locale === "vi" ? "Ẩm thực" : "Dining"}
        </span>
        <h1 className={tx.pageTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          Restaurant & Bar
        </h1>
        <p className={`${tx.bodyTight} mb-10`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
          {locale === "vi"
            ? "Ba điểm nhấn ven nước và trên cao — chọn không gian phù hợp nhịp của bạn."
            : "Three venues by the water and above it — choose the mood that fits your evening."}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {restaurantChildren.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => navigate(`/services/${s.slug}`)}
              className="text-left group border overflow-hidden"
              style={{ borderColor: "rgba(82,98,72,0.12)" }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.image} alt="" className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-4">
                <h2 className={`${tx.cardTitle} group-hover:text-[#AF9666] transition-colors`} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                  {s.title[locale]}
                </h2>
                <p className={`${tx.body} mt-2 line-clamp-3`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                  {s.intro[locale]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
