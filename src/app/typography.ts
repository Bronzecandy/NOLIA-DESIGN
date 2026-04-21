/**
 * NOLIA — thang chữ đồng bộ (title / body).
 * Dùng kèm style={{ fontFamily: "var(--font-heading)" | "var(--font-body)" | "var(--font-accent)" }} và màu theme.
 *
 * Gợi ý: body mặc định `text-base md:text-lg font-light opacity-90`;
 * page title `text-4xl md:text-5xl`; section title (có đoạn mô tả bên dưới) `text-2xl sm:text-3xl md:text-4xl`.
 */
export const tx = {
  eyebrowAccent: "text-xs tracking-[0.28em] uppercase block mb-2 md:mb-3",
  pageTitle: "text-4xl md:text-5xl leading-tight mb-4 md:mb-5",
  /** Cùng cỡ pageTitle, không margin — dùng cạnh khối giá / layout ngang */
  pageTitleFlat: "text-4xl md:text-5xl leading-tight",
  sectionTitle: "text-2xl sm:text-3xl md:text-4xl leading-snug mb-5 md:mb-6",
  /** Section phụ (Maps, collage…) — h2 một dòng, thường không cần mb-6 */
  sectionHeading: "text-3xl md:text-4xl leading-snug mb-4 md:mb-6",
  subsectionTitle: "text-2xl md:text-3xl leading-snug mb-2 md:mb-3",
  cardTitle: "text-xl md:text-2xl leading-snug mb-1 md:mb-2",
  body: "text-base md:text-lg leading-relaxed opacity-90 font-light",
  bodyTight: "text-base md:text-lg leading-relaxed opacity-90 font-light max-w-3xl",
  bodyIntro: "text-base md:text-lg leading-relaxed opacity-90 font-light max-w-3xl mb-10 md:mb-12",
  bodyCenter: "text-base md:text-lg leading-relaxed opacity-90 font-light max-w-2xl mx-auto mt-3 md:mt-4",
  caption: "text-sm leading-relaxed opacity-75 font-light",
  /** Hero glass — kicker + display (đủ lớn để đọc trên nền kính) */
  heroKicker: "text-xs sm:text-[13px] md:text-sm tracking-[0.26em] uppercase mb-2 block opacity-95",
  heroDisplay: "text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]",
} as const;
