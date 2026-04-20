import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Locale = "vi" | "en";

type Dict = Record<string, { vi: string; en: string }>;

const NAV: Dict = {
  home: { vi: "Trang chủ", en: "Home" },
  rooms: { vi: "Hạng phòng", en: "Rooms" },
  gallery: { vi: "Gallery", en: "Gallery" },
  services: { vi: "Dịch vụ", en: "Services" },
  contact: { vi: "Liên hệ", en: "Contact" },
  book: { vi: "Đặt phòng", en: "Book" },
  restaurantBar: { vi: "Nhà hàng & Bar", en: "Restaurant & Bar" },
  spa: { vi: "Spa", en: "Spa" },
  airport: { vi: "Đưa đón sân bay", en: "Airport transfer" },
  roomDecor: { vi: "Trang trí phòng", en: "Room decor" },
  tours: { vi: "Tour & vé", en: "Tours & tickets" },
};

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof NAV) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("vi");

  const t = useCallback(
    (key: keyof typeof NAV) => {
      const row = NAV[key];
      return row ? row[locale] : key;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
