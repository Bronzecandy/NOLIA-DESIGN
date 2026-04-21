import { useNavigate, useParams } from "react-router";
import { MoveLeft } from "lucide-react";
import { serviceBySlug } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { locale } = useLanguage();
  const s = serviceBySlug(slug);

  if (!s) {
    return (
      <div className={`pt-20 md:pt-24 pb-20 min-h-screen ${shellGutter}`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
        <div className={shellMax}>{locale === "vi" ? "Không tìm thấy dịch vụ." : "Service not found."}</div>
      </div>
    );
  }

  const back = s.navParent ? () => navigate("/services/restaurant-bar") : () => navigate("/services");

  return (
    <div className={`pt-20 md:pt-24 pb-20 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream, color: colors.green }}>
      <div className={shellMax}>
        <button
          type="button"
          onClick={back}
          className="group flex items-center text-xs tracking-widest uppercase mb-8 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          <MoveLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {locale === "vi" ? "Quay lại" : "Back"}
        </button>

        <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
          {s.eyebrow[locale]}
        </span>
        <h1 className={tx.pageTitle} style={{ fontFamily: "var(--font-heading)" }}>
          {s.title[locale]}
        </h1>
        <p className={tx.bodyIntro} style={{ fontFamily: "var(--font-body)" }}>
          {s.intro[locale]}
        </p>

        <div className="w-full aspect-[21/9] max-h-[460px] overflow-hidden mb-12 md:mb-16">
          <img src={s.image} alt="" className="w-full h-full object-cover grayscale-[10%]" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          <div className="md:col-span-2 space-y-6">
            <h2 className={tx.subsectionTitle} style={{ fontFamily: "var(--font-heading)" }}>
              {locale === "vi" ? "Chi tiết" : "Highlights"}
            </h2>
            <ul className={`space-y-3 ${tx.body}`} style={{ fontFamily: "var(--font-body)" }}>
              {s.bullets[locale].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: colors.bronze }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="border p-6 md:p-8 h-fit text-base" style={{ borderColor: "rgba(82,98,72,0.15)", backgroundColor: colors.sand }}>
            <p className="text-xs uppercase tracking-widest mb-3 opacity-70" style={{ fontFamily: "var(--font-body)" }}>
              {locale === "vi" ? "Liên hệ concierge" : "Concierge"}
            </p>
            <p className={`${tx.body} mb-6`} style={{ fontFamily: "var(--font-body)" }}>
              {locale === "vi"
                ? "Để đặt bàn, spa hoặc tour — concierge sẽ xác nhận theo lịch lưu trú của bạn."
                : "For dining, spa, or tours — concierge confirms around your stay dates."}
            </p>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="w-full py-3.5 text-xs tracking-[0.18em] uppercase bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {locale === "vi" ? "Liên hệ" : "Contact"}
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
