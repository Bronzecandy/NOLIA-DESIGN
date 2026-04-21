import { splitDiscountLabel } from "../data/rooms";
import { cn } from "./ui/utils";

type Tone = "onDark" | "onSand";

type Props = {
  label: string;
  tone: Tone;
  className?: string;
};

/**
 * Dòng giảm giá: Playfair (--font-heading), không italic; tách % / chữ sau để cân quang học.
 */
export function RoomDiscountLine({ label, tone, className }: Props) {
  const parts = splitDiscountLabel(label);
  const border = tone === "onDark" ? "border-white/15" : "border-[rgba(82,98,72,0.2)]";
  const pct =
    tone === "onDark"
      ? "not-italic tabular-nums align-baseline text-[1.02rem] md:text-[1.08rem] font-normal tracking-[0.02em] text-[#F4F2EB]"
      : "not-italic tabular-nums align-baseline text-[1.02rem] md:text-[1.08rem] font-normal tracking-[0.02em] text-[#526248]";
  const tail =
    tone === "onDark"
      ? "not-italic text-[0.82rem] md:text-[0.88rem] font-light tracking-[0.02em] text-[#F4F2EB]/90"
      : "not-italic text-[0.82rem] md:text-[0.88rem] font-light tracking-[0.02em] text-[#526248]/90";

  return (
    <p
      className={cn("not-italic border-t mt-2 pt-2", border, className)}
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {parts ? (
        <>
          <span className={pct}>{parts.pct}</span>
          <span className={tail}> {parts.tail}</span>
        </>
      ) : (
        <span
          className={tone === "onDark" ? "not-italic text-sm font-light text-[#F4F2EB]" : "not-italic text-sm font-light text-[#526248]"}
        >
          {label}
        </span>
      )}
    </p>
  );
}
