import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB" };

type Cat = "all" | "rooms" | "pool" | "dining" | "spa" | "exterior";

const items: { src: string; cats: Cat[] }[] = [
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop", cats: ["exterior", "pool"] },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", cats: ["rooms"] },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", cats: ["rooms", "pool"] },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop", cats: ["spa"] },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop", cats: ["exterior"] },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", cats: ["rooms"] },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop", cats: ["dining"] },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", cats: ["pool", "exterior"] },
  { src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1200&auto=format&fit=crop", cats: ["rooms"] },
];

const filterDefs: { id: Cat; vi: string; en: string }[] = [
  { id: "all", vi: "Tất cả", en: "All" },
  { id: "rooms", vi: "Phòng", en: "Rooms" },
  { id: "pool", vi: "Hồ bơi", en: "Pool" },
  { id: "dining", vi: "Ẩm thực", en: "Dining" },
  { id: "spa", vi: "Spa", en: "Spa" },
  { id: "exterior", vi: "Kiến trúc & cảnh quan", en: "Architecture" },
];

export default function Gallery() {
  const { locale } = useLanguage();
  const [cat, setCat] = useState<Cat>("all");

  const filtered = useMemo(() => {
    if (cat === "all") return items;
    return items.filter((i) => i.cats.includes(cat));
  }, [cat]);

  return (
    <div className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={shellMax}>
        <div className="text-center mb-10">
          <span className="text-xs tracking-[0.28em] uppercase mb-2 block" style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
            {locale === "vi" ? "Thư viện hình ảnh" : "Image library"}
          </span>
          <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            Gallery
          </h1>
          <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto mt-3" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            {locale === "vi"
              ? "Lọc theo chủ đề — có thể mở rộng thêm tag khi có bộ ảnh chính thức từ khách sạn."
              : "Filter by theme — tags can expand when official photography sets are available."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterDefs.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCat(f.id)}
              className={`text-xs tracking-[0.12em] uppercase px-4 py-2.5 border transition-colors ${
                cat === f.id ? "bg-[#526248] text-[#F4F2EB] border-[#526248]" : "bg-transparent hover:border-[#AF9666]"
              }`}
              style={{ fontFamily: "var(--font-body)", borderColor: cat === f.id ? "#526248" : "rgba(82,98,72,0.25)", color: cat === f.id ? colors.cream : colors.green }}
            >
              {f[locale]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((it, index) => (
            <div key={`${it.src}-${index}`} className="overflow-hidden group relative aspect-square">
              <img src={it.src} alt="" className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                {it.cats
                  .filter((c) => c !== "all")
                  .map((c) => (
                    <span
                      key={c}
                      className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-black/45 text-white/95"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {filterDefs.find((d) => d.id === c)?.[locale] ?? c}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
