import { useState } from "react";
import { Link } from "react-router";
import { X, Sparkles } from "lucide-react";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB" };

export function PromotionCorner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed left-4 bottom-24 z-[45] max-w-[min(18rem,calc(100vw-2rem))] shadow-xl border border-[rgba(82,98,72,0.12)] animate-fade-in">
      <div className="relative p-4 pr-10" style={{ backgroundColor: colors.cream }}>
        <button
          type="button"
          aria-label="Đóng ưu đãi"
          className="absolute top-2 right-2 p-1 rounded opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: colors.green }}
          onClick={() => setOpen(false)}
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-2 mb-2">
          <Sparkles size={18} className="mt-0.5 shrink-0" style={{ color: colors.bronze }} />
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            Ưu đãi
          </span>
        </div>
        <p className="text-sm leading-snug mb-3" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          Early bird — giảm đến <span className="italic">15%</span> khi đặt sớm.
        </p>
        <Link
          to="/booking"
          className="inline-block text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-colors duration-300 hover:bg-[#526248] hover:text-[#F4F2EB] hover:border-[#526248]"
          style={{ fontFamily: "var(--font-body)", borderColor: colors.green, color: colors.green }}
        >
          Đặt phòng
        </Link>
      </div>
    </div>
  );
}
