import { formatVnd, listPriceBeforeDiscount } from "../data/rooms";
import { RoomDiscountLine } from "./RoomDiscountLine";
import { cn } from "./ui/utils";

type Tone = "onDark" | "onSand";

const sizes = {
  sm: {
    from: "text-[10px]",
    list: "text-[11px]",
    sale: "text-sm font-semibold",
  },
  md: {
    from: "text-[10px]",
    list: "text-xs sm:text-sm",
    sale: "text-base font-semibold",
  },
  lg: {
    from: "text-[11px]",
    list: "text-lg md:text-xl",
    sale: "text-2xl md:text-3xl font-medium",
  },
} as const;

type Size = keyof typeof sizes;

type Props = {
  priceFromVnd: number;
  discountLabel?: string;
  locale: "vi" | "en";
  tone: Tone;
  size?: Size;
  className?: string;
};

/**
 * Hộp giá ngang: "Từ" + cùng một hàng — giá hiện tại, kế bên giá niêm yết (gạch);
 * dòng dưới là nhãn % (RoomDiscountLine).
 */
export function RoomPriceOffer({ priceFromVnd, discountLabel, locale, tone, size = "md", className }: Props) {
  const list = listPriceBeforeDiscount(priceFromVnd, discountLabel);
  const sc = sizes[size];
  const fromLabel = locale === "vi" ? "Từ" : "From";
  const muted = tone === "onDark" ? "text-[#F4F2EB]/70" : "text-[#526248]/55";
  const strong = tone === "onDark" ? "text-[#F4F2EB]" : "text-[#526248]";

  return (
    <div className={cn("inline-block w-max max-w-full min-w-0 text-left", className)}>
      <p
        className={cn(sc.from, "uppercase tracking-widest opacity-90 leading-none")}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {fromLabel}
      </p>
      {list != null ? (
        <>
          <div className={cn("mt-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5")}>
            <span className={cn(sc.sale, "tabular-nums shrink-0", strong)} style={{ fontFamily: "var(--font-heading)" }}>
              {formatVnd(priceFromVnd, locale)} VND
            </span>
            <span
              className={cn(sc.list, "line-through tabular-nums shrink-0", muted)}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {formatVnd(list, locale)} VND
            </span>
          </div>
          {discountLabel ? <RoomDiscountLine label={discountLabel} tone={tone} className="mt-1.5 pt-1.5" /> : null}
        </>
      ) : (
        <>
          <p className={cn(sc.sale, "tabular-nums mt-1", strong)} style={{ fontFamily: "var(--font-heading)" }}>
            {formatVnd(priceFromVnd, locale)} VND
          </p>
          {discountLabel ? <RoomDiscountLine label={discountLabel} tone={tone} className="mt-1.5 pt-1.5" /> : null}
        </>
      )}
    </div>
  );
}
