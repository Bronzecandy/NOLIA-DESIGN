export type TierId = "essence" | "deluxe" | "executive";

export interface Room {
  id: string;
  name: { vi: string; en: string };
  shortDesc: { vi: string; en: string };
  fullDesc: { vi: string; en: string };
  size: string;
  view: { vi: string; en: string };
  bed: { vi: string; en: string };
  image: string;
  /** Giá "từ" hiển thị; khi có `discountLabel` có %, đây là giá sau giảm (giá gạch suy từ %). */
  priceFromVnd: number;
  /** Ví dụ "15% Off" — dùng hiển thị và suy giá niêm yết khi có số %. */
  discountLabel?: string;
  collection: TierId;
}

export const TIER_ORDER: TierId[] = ["essence", "deluxe", "executive"];

/** Thông tin hiển thị ở trang /rooms (chọn hạng) */
export const tierMeta: Record<
  TierId,
  {
    title: { vi: string; en: string };
    blurb: { vi: string; en: string };
    cover: string;
  }
> = {
  essence: {
    title: { vi: "Essence", en: "Essence" },
    blurb: {
      vi: "Nhịp nghỉ tinh giản — ánh sáng, vật liệu tự nhiên và khoảng lặng đậm chất NOLIA.",
      en: "A refined rhythm — natural light, honest materials, and the quiet signature of NOLIA.",
    },
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  deluxe: {
    title: { vi: "Deluxe", en: "Deluxe" },
    blurb: {
      vi: "Cân bằng giữa tiện nghi và cảm giác địa phương — vườn, kênh hoặc tầm nhìn resort.",
      en: "Balance of comfort and place — garden, canal, or resort outlooks.",
    },
    cover: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1200&auto=format&fit=crop",
  },
  executive: {
    title: { vi: "Executive", en: "Executive" },
    blurb: {
      vi: "Không gian rộng hơn và chi tiết nâng cấp — cho kỳ nghỉ dài hoặc nhu cầu riêng tư cao.",
      en: "More space and elevated detail — for longer stays or heightened privacy.",
    },
    cover: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
};

export const roomsData: Room[] = [
  {
    id: "essence-pool-view",
    collection: "essence",
    name: { vi: "Essence Pool View", en: "Essence Pool View" },
    shortDesc: {
      vi: "Tầm nhìn mở ra hồ bơi chính — tĩnh lặng, ánh sáng và nhịp nghỉ dưỡng đúng chất Nolia.",
      en: "Opening views to the main pool — calm, light, and the rhythm of a true Nolia stay.",
    },
    fullDesc: {
      vi: "Hạng Essence Pool View được thiết kế để ưu tiên cảm giác thư thái ngay từ khoảnh khắc đầu: ban công rộng, ánh sáng tự nhiên và tầm nhìn hướng hồ bơi. Phù hợp cho khách muốn kết nối nhẹ nhàng với không gian nước và resort mà vẫn giữ sự riêng tư.",
      en: "Essence Pool View is designed for ease from the first moment: generous light, natural tones, and views toward the pool. Ideal for guests who want a soft connection to the water while keeping privacy.",
    },
    size: "38 m²",
    view: { vi: "Hướng hồ bơi", en: "Pool view" },
    bed: { vi: "1 giường King", en: "1 King bed" },
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    priceFromVnd: 4_800_000,
    discountLabel: "15% Off",
  },
  {
    id: "essence-garden-view",
    collection: "essence",
    name: { vi: "Essence Garden View", en: "Essence Garden View" },
    shortDesc: {
      vi: "Essence hướng vườn — lá xanh, ánh sáng dịu, tĩnh lặng gần thiên nhiên nội khu.",
      en: "Essence garden outlook — soft light, greenery, and calm near the inner gardens.",
    },
    fullDesc: {
      vi: "Essence Garden View mang tinh thần tối giản của dòng Essence, đặt bạn gần mảng xanh nội khu. Ban công vừa đủ để nhâm nhi cà phê sáng, đọc vài trang sách mà không rời nhịp chậm của kỳ nghỉ.",
      en: "Essence Garden View keeps the Essence line’s minimal calm while drawing you closer to our inner gardens. A modest balcony frames slow mornings and unhurried reading.",
    },
    size: "36 m²",
    view: { vi: "Hướng vườn", en: "Garden view" },
    bed: { vi: "1 giường King", en: "1 King bed" },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    priceFromVnd: 4_400_000,
    discountLabel: "15% Off",
  },
  {
    id: "deluxe-garden-view",
    collection: "deluxe",
    name: { vi: "Deluxe Garden View", en: "Deluxe Garden View" },
    shortDesc: {
      vi: "Deluxe hướng vườn — lá xanh, gió nhẹ và khoảng lặng của Hội An.",
      en: "Deluxe garden view — greenery, soft breeze, and Hoi An calm.",
    },
    fullDesc: {
      vi: "Phòng Deluxe Garden View mang lại sự cân bằng giữa tiện nghi hiện đại và cảm giác mộc mạc từ vườn nội khu. Ban công hoặc cửa sổ lớn giúp ánh sáng luôn dịu, phù hợp cho kỳ nghỉ chậm và sâu.",
      en: "Deluxe Garden View balances contemporary comfort with the quiet textures of our inner gardens. Large openings keep the light gentle — perfect for a slow, restorative stay.",
    },
    size: "40 m²",
    view: { vi: "Hướng vườn", en: "Garden view" },
    bed: { vi: "1 King hoặc 2 đơn", en: "1 King or 2 Twins" },
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2032&auto=format&fit=crop",
    priceFromVnd: 4_200_000,
    discountLabel: "15% Off",
  },
  {
    id: "deluxe-canal-view",
    collection: "deluxe",
    name: { vi: "Deluxe Canal View", en: "Deluxe Canal View" },
    shortDesc: {
      vi: "Deluxe hướng kênh — dòng nước hiền hòa, khung cảnh thay đổi theo thời khắc trong ngày.",
      en: "Deluxe canal view — soft water lines and a scene that shifts with the day.",
    },
    fullDesc: {
      vi: "Deluxe Canal View đặt bạn gần nhịp nước của khu vực kênh đào, tạo cảm giác gần gũi với thiên nhiên đô thị nước đặc trưng. Nội thất tối giản, tông ấm, phù hợp cho khách thích quan sát và chụp ảnh ngay từ phòng.",
      en: "Deluxe Canal View brings you closer to the gentle motion of our canal-side setting. Minimal interiors in warm tones suit guests who love quiet observation and golden-hour light from the room.",
    },
    size: "40 m²",
    view: { vi: "Hướng kênh", en: "Canal view" },
    bed: { vi: "1 King hoặc 2 đơn", en: "1 King or 2 Twins" },
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
    priceFromVnd: 4_500_000,
    discountLabel: "12% Off",
  },
  {
    id: "executive",
    collection: "executive",
    name: { vi: "Executive", en: "Executive" },
    shortDesc: {
      vi: "Không gian rộng hơn, tiện nghi nâng cấp — dành cho kỳ nghỉ dài hoặc công tác cao cấp.",
      en: "More space, elevated amenities — for longer stays or refined business travel.",
    },
    fullDesc: {
      vi: "Hạng Executive mang đến diện tích rộng rãi hơn cùng các chi tiết nghỉ dưỡng được chăm chút: khu tiếp khách, phòng tắm rộng và lựa chọn tầm nhìn ưu tiên. Phù hợp khi bạn muốn biến phòng thành một suite riêng trong suốt hành trình.",
      en: "Executive offers expanded living space and considered details — sitting area, generous bath, and priority outlook options. Ideal when you want your room to feel like a private suite for the whole journey.",
    },
    size: "55 m²",
    view: { vi: "Resort / Pool premium", en: "Resort / premium pool" },
    bed: { vi: "1 King cỡ lớn", en: "1 oversized King" },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    priceFromVnd: 6_900_000,
    discountLabel: "10% Off",
  },
  {
    id: "executive-terrace-suite",
    collection: "executive",
    name: { vi: "Executive Terrace Suite", en: "Executive Terrace Suite" },
    shortDesc: {
      vi: "Executive có sân hiên riêng — không gian mở cho hoàng hôn và bữa sáng ngoài trời.",
      en: "Executive with a private terrace — open-air space for sunset and morning rituals.",
    },
    fullDesc: {
      vi: "Executive Terrace Suite mở rộng trải nghiệm Executive với sân hiên riêng, phù hợp cho khách cần thêm không gian thở hoặc làm việc nhẹ ngoài trời. Phòng tắm và khu tiếp khách được giữ cùng chuẩn Executive.",
      en: "The Terrace Suite extends the Executive line with a private outdoor plateau — ideal for guests who want more air, quiet work outdoors, or sunset rituals. Bath and sitting room remain at Executive standard.",
    },
    size: "62 m²",
    view: { vi: "Terrace + Resort", en: "Terrace + resort" },
    bed: { vi: "1 King", en: "1 King" },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
    priceFromVnd: 7_800_000,
    discountLabel: "10% Off",
  },
];

/** Lấy phần trăm từ nhãn kiểu "15% Off", "12% off" — dùng suy giá trước giảm. */
export function parseDiscountPercentFromLabel(label?: string): number | null {
  if (!label) return null;
  const m = label.trim().match(/(\d+(?:\.\d+)?)\s*%/i);
  if (!m) return null;
  const n = Number(m[1]);
  if (!Number.isFinite(n) || n <= 0 || n >= 100) return null;
  return n;
}

/**
 * Giá niêm yết (gạch ngang) khi `priceFromVnd` là giá sau giảm và % nằm trong `discountLabel`.
 * Làm tròn nghìn VND cho dễ đọc.
 */
export function listPriceBeforeDiscount(salePriceVnd: number, discountLabel?: string): number | null {
  const pct = parseDiscountPercentFromLabel(discountLabel);
  if (pct == null) return null;
  const raw = salePriceVnd / (1 - pct / 100);
  return Math.round(raw / 1000) * 1000;
}

/** "15% Off" → phần số nổi bật, phần chữ cân quang học (số % dễ bị trông nhỏ hơn chữ). */
export function splitDiscountLabel(label: string): { pct: string; tail: string } | null {
  const m = label.trim().match(/^(\d+%)\s*(.+)$/i);
  if (!m) return null;
  return { pct: m[1], tail: m[2] };
}

export function formatVnd(n: number, locale: "vi" | "en") {
  return new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US", {
    maximumFractionDigits: 0,
  }).format(n);
}

export function roomById(id: string | undefined) {
  return roomsData.find((r) => r.id === id);
}

export function roomsInTier(tier: TierId) {
  return roomsData.filter((r) => r.collection === tier);
}

export function isTierSlug(slug: string | undefined): slug is TierId {
  return slug !== undefined && TIER_ORDER.includes(slug as TierId);
}

export function isRoomSlug(slug: string | undefined): boolean {
  return slug !== undefined && roomsData.some((r) => r.id === slug);
}
