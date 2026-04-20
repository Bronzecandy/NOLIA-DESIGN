import { useNavigate } from "react-router";
import { servicePages, restaurantChildren } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB" };

export default function ServicesIndex() {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  const topLevel = servicePages.filter((s) => !s.navParent);

  return (
    <div className={`pt-20 md:pt-24 pb-20 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={shellMax}>
        <span className="text-xs tracking-[0.28em] uppercase block mb-2" style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
          {locale === "vi" ? "Dịch vụ" : "Services"}
        </span>
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          {locale === "vi" ? "Trải nghiệm tại NOLIA" : "Experiences at NOLIA"}
        </h1>
        <p className="text-base md:text-lg opacity-85 max-w-3xl mb-12" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
          {locale === "vi"
            ? "Mỗi dịch vụ có trang riêng — bố cục tối giản, ảnh lớn và thông tin rõ ràng để khách dễ quyết định."
            : "Each service has its own page — minimal layout, strong imagery, and clear details."}
        </p>

        <div className="mb-14 border p-6 md:p-8" style={{ borderColor: "rgba(82,98,72,0.12)" }}>
          <h2 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            {locale === "vi" ? "Nhà hàng & Bar" : "Restaurant & Bar"}
          </h2>
          <p className="text-sm md:text-base opacity-80 mb-6" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            {locale === "vi" ? "Ba không gian riêng — xem chi tiết từng điểm." : "Three distinct venues — explore each."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {restaurantChildren.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => navigate(`/services/${s.slug}`)}
                className="text-left group border overflow-hidden"
                style={{ borderColor: "rgba(82,98,72,0.12)" }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt="" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-lg md:text-xl group-hover:text-[#AF9666] transition-colors" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                    {s.title[locale]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topLevel.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => navigate(`/services/${s.slug}`)}
              className="text-left group border overflow-hidden flex flex-col"
              style={{ borderColor: "rgba(82,98,72,0.12)" }}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img src={s.image} alt="" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-[11px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>
                  {s.eyebrow[locale]}
                </p>
                <p className="text-xl md:text-2xl flex-1 group-hover:text-[#AF9666] transition-colors" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                  {s.title[locale]}
                </p>
                <span className="text-xs tracking-widest uppercase mt-3" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                  {locale === "vi" ? "Chi tiết →" : "Details →"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
