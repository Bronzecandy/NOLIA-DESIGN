export type LocaleKey = "vi" | "en";

export interface ServicePageDef {
  slug: string;
  title: Record<LocaleKey, string>;
  eyebrow: Record<LocaleKey, string>;
  intro: Record<LocaleKey, string>;
  bullets: Record<LocaleKey, string[]>;
  image: string;
  /** Hiển thị trong menu cha */
  navParent?: "restaurant-bar" | null;
}

export const serviceHubRestaurantSlug = "restaurant-bar";

export const servicePages: ServicePageDef[] = [
  {
    slug: "spa",
    title: { vi: "Spa", en: "Spa" },
    eyebrow: { vi: "Nghệ thuật thư giãn", en: "The art of relaxation" },
    intro: {
      vi: "Liệu pháp kết hợp nguyên liệu bản địa và nghi thức chậm — để cơ thể và tâm trí được nâng đỡ nhẹ nhàng.",
      en: "Treatments rooted in local ingredients and slow ritual — to gently restore body and mind.",
    },
    bullets: {
      vi: ["Liệu trình cá nhân hóa", "Không gian tĩnh, hương nhẹ", "Đặt lịch linh hoạt theo ngày lưu trú"],
      en: ["Personalized journeys", "Quiet rooms, subtle scent", "Scheduling aligned with your stay"],
    },
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "main-pool-restaurant",
    navParent: "restaurant-bar",
    title: { vi: "Main Pool Restaurant", en: "Main Pool Restaurant" },
    eyebrow: { vi: "Restaurant & Bar", en: "Restaurant & Bar" },
    intro: {
      vi: "Ẩm thực ven hồ — bữa sáng thanh đạm, bữa tối tinh tế, phục vụ theo nhịp nghỉ dưỡng của resort.",
      en: "Poolside dining — calm mornings, refined evenings, paced to the rhythm of the resort.",
    },
    bullets: {
      vi: ["Thực đơn theo mùa", "Không gian mở nhìn hồ", "Wine pairing theo yêu cầu"],
      en: ["Seasonal menus", "Open-air pool outlook", "Wine pairing on request"],
    },
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "main-pool-bar",
    navParent: "restaurant-bar",
    title: { vi: "Main Pool Bar", en: "Main Pool Bar" },
    eyebrow: { vi: "Restaurant & Bar", en: "Restaurant & Bar" },
    intro: {
      vi: "Signature cocktail và đồ uống thanh mát — điểm hẹn lý tưởng sau giờ bơi hoặc hoàng hôn.",
      en: "Signature cocktails and light refreshments — a natural stop after a swim or at sunset.",
    },
    bullets: {
      vi: ["Cocktail theo hương vị miền", "Snack nhẹ", "Nhạc nền dịu"],
      en: ["Regional-inspired cocktails", "Light snacks", "Soft ambient sound"],
    },
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    slug: "sky-pool-bar",
    navParent: "restaurant-bar",
    title: { vi: "Sky Pool Bar", en: "Sky Pool Bar" },
    eyebrow: { vi: "Restaurant & Bar", en: "Restaurant & Bar" },
    intro: {
      vi: "Tầm nhìn cao — không gian bar trên cao dành cho khoảnh khắc gặp gỡ và hoàng hôn.",
      en: "Elevated outlooks — a rooftop bar mood for golden-hour gatherings.",
    },
    bullets: {
      vi: ["View panorama", "Chỗ ngồi ngoài trời", "Đồ uống signature"],
      en: ["Panoramic views", "Outdoor seating", "Signature drinks"],
    },
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  },
  {
    slug: "airport-transfer",
    title: { vi: "Đưa đón sân bay", en: "Airport transfer" },
    eyebrow: { vi: "Hành trình suôn sẻ", en: "Seamless arrival" },
    intro: {
      vi: "Đón tiễn Đà Nẵng — Hội An theo lịch riêng, xe sang trọng và tài xế am hiểu tuyến.",
      en: "Private Da Nang — Hoi An transfers with comfortable vehicles and knowledgeable drivers.",
    },
    bullets: {
      vi: ["Đặt trước theo giờ bay", "Meet & greet", "Nước uống & khăn lạnh"],
      en: ["Scheduled to your flight", "Meet & greet", "Water & cool towels"],
    },
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "room-decor",
    title: { vi: "Trang trí phòng", en: "Room decor" },
    eyebrow: { vi: "Kỷ niệm đặc biệt", en: "Special moments" },
    intro: {
      vi: "Hoa, nến, bánh sinh nhật hoặc setup lãng mạn — đội ngũ sẽ chuẩn bị theo yêu cầu.",
      en: "Flowers, candles, cakes, or romantic setups — prepared discreetly before arrival.",
    },
    bullets: {
      vi: ["Gói Anniversary", "Sinh nhật / tuần trăng mật", "Chụp ảnh theo yêu cầu"],
      en: ["Anniversary packages", "Birthdays / honeymoons", "Photography add-ons"],
    },
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
  },
  {
    slug: "tours-tickets",
    title: { vi: "Tour & vé tham quan", en: "Tours & tickets" },
    eyebrow: { vi: "Khám phá Hội An", en: "Explore Hoi An" },
    intro: {
      vi: "Phố cổ, làng nghề, biển An Bàng — concierge hỗ trợ đặt tour và vé có hướng dẫn.",
      en: "Old town, craft villages, An Bang beach — concierge booking for guided experiences.",
    },
    bullets: {
      vi: ["Tour riêng / ghép đoàn", "Vé show & workshop", "Xe đạp / xích lô"],
      en: ["Private or small-group tours", "Shows & workshops", "Bikes / cyclo"],
    },
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
  },
];

export function serviceBySlug(slug: string | undefined) {
  return servicePages.find((s) => s.slug === slug);
}

export const restaurantChildren = servicePages.filter((s) => s.navParent === "restaurant-bar");
