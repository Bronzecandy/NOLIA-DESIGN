import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { Hero } from "../components/Hero";
import { BookingEngineBar } from "../components/BookingEngineBar";
import { RoomPriceOffer } from "../components/RoomPriceOffer";
import { roomsData } from "../data/rooms";
import { servicePages } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

function HomeStory() {
  const { locale } = useLanguage();
  const title =
    locale === "vi"
      ? "Từ tinh hoa Soluna D'Annam, tái sinh thành sự tĩnh tại nguyên bản."
      : "From the spirit of Soluna D'Annam — reborn as original calm.";
  const body =
    locale === "vi"
      ? "Kế thừa triết lý The Art of Hoi An Relaxation, NOLIA HOI AN là nốt trầm giữa phố Hội — không gian nghệ thuật để bạn tìm về sự tĩnh lặng bên trong, gác lại âu lo và hòa vào kiến trúc, ánh sáng, thiên nhiên."
      : "Carrying forward The Art of Hoi An Relaxation, NOLIA is a quiet chord in the old town — an artistic space to return inward, set worries aside, and merge with architecture, light, and nature.";

  return (
    <section id="about" className={`py-16 md:py-24 ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={`${shellMax} grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center`}>
        <div className="order-2 md:order-1 overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
            alt="Nolia story"
            className="w-full aspect-[4/5] md:aspect-[3/4] object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
            style={{ border: `1px solid ${colors.bronze}` }}
          />
        </div>
        <div className="order-1 md:order-2 text-left">
          <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
            {locale === "vi" ? "Câu chuyện" : "Our story"}
          </span>
          <h2 className={tx.sectionTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            {title}
          </h2>
          <p className={tx.body} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}

function HomeRoomsCarousel() {
  const navigate = useNavigate();
  const { locale } = useLanguage();

  return (
    <section id="rooms" className={`py-16 md:py-24 ${shellGutter}`} style={{ backgroundColor: colors.sand }}>
      <div className={shellMax}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
              {locale === "vi" ? "Hạng phòng" : "Room types"}
            </span>
            <h2 className={tx.sectionHeading} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
              {locale === "vi" ? "Lựa chọn lưu trú" : "Stay with us"}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate("/rooms")}
            className="flex items-center text-xs tracking-[0.18em] uppercase group hover:text-[#AF9666] transition-colors self-start sm:self-auto"
            style={{ fontFamily: "var(--font-body)", color: colors.green }}
          >
            {locale === "vi" ? "Tất cả hạng phòng" : "All rooms"}{" "}
            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <Carousel opts={{ loop: true, align: "start" }} className="relative px-2 sm:px-4 md:px-6">
          <CarouselContent className="-ml-3 md:-ml-4">
            {roomsData.map((room) => (
              <CarouselItem key={room.id} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <button
                  type="button"
                  className="text-left w-full group"
                  onClick={() => navigate(`/rooms/${room.id}`)}
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-4">
                    <img
                      src={room.image}
                      alt={room.name[locale]}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div
                      className="absolute left-3 bottom-3 max-w-[min(95%,22rem)] px-3 py-1.5 text-left border backdrop-blur-sm w-max"
                      style={{
                        borderColor: "rgba(244,242,235,0.35)",
                        backgroundColor: "rgba(82,98,72,0.82)",
                        color: colors.cream,
                      }}
                    >
                      <RoomPriceOffer
                        priceFromVnd={room.priceFromVnd}
                        discountLabel={room.discountLabel}
                        locale={locale}
                        tone="onDark"
                        size="md"
                      />
                    </div>
                  </div>
                  <h3
                    className={`${tx.cardTitle} group-hover:text-[#AF9666] transition-colors`}
                    style={{ fontFamily: "var(--font-heading)", color: colors.green }}
                  >
                    {room.name[locale]}
                  </h3>
                  <p className={`${tx.cardLead} line-clamp-2 mt-0.5`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                    {room.shortDesc[locale]}
                  </p>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex size-10 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB]" />
          <CarouselNext className="hidden md:flex size-10 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB]" />
        </Carousel>
      </div>
    </section>
  );
}

function HomeMap() {
  const { locale } = useLanguage();
  const src = "https://maps.google.com/maps?q=15.8764,108.3256&z=15&hl=vi&output=embed";
  return (
    <section className={`py-16 md:py-20 ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={shellMax}>
        <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
          {locale === "vi" ? "Vị trí" : "Location"}
        </span>
        <h2 className={tx.sectionHeading} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
          {locale === "vi" ? "Google Maps — NOLIA Hội An" : "Google Maps — NOLIA Hoi An"}
        </h2>
        <div className="aspect-[16/9] w-full border overflow-hidden" style={{ borderColor: "rgba(82,98,72,0.15)" }}>
          <iframe title="Nolia map" src={src} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <p className={`${tx.caption} mt-3`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
          {locale === "vi"
            ? "Bản đồ minh họa — thay embed chính thức khi có tọa độ Google Business."
            : "Placeholder embed — replace with your official Google Business coordinates."}
        </p>
      </div>
    </section>
  );
}

function HomeServicesCollage() {
  const navigate = useNavigate();
  const { locale } = useLanguage();
  const tiles = servicePages.slice(0, 6);

  return (
    <section className={`py-16 md:py-24 ${shellGutter}`} style={{ backgroundColor: colors.sand }}>
      <div className={shellMax}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
              {locale === "vi" ? "Dịch vụ" : "Services"}
            </span>
            <h2 className={tx.sectionHeading} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
              {locale === "vi" ? "Collage trải nghiệm" : "Experience collage"}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="text-xs tracking-[0.18em] uppercase border-b pb-0.5 self-start hover:text-[#AF9666] hover:border-[#AF9666] transition-colors"
            style={{ fontFamily: "var(--font-body)", color: colors.green, borderColor: colors.bronze }}
          >
            {locale === "vi" ? "Danh sách dịch vụ" : "All services"}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {tiles.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => navigate(`/services/${s.slug}`)}
              className="group relative aspect-[4/5] overflow-hidden text-left"
            >
              <img src={s.image} alt={s.title[locale]} className="w-full h-full object-cover grayscale-[18%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-white text-[11px] uppercase tracking-widest opacity-90" style={{ fontFamily: "var(--font-body)" }}>
                  {s.eyebrow[locale]}
                </p>
                <p className="text-white text-base md:text-lg mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title[locale]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const { locale } = useLanguage();
  return (
    <section className={`py-16 md:py-20 ${shellGutter}`} style={{ backgroundColor: colors.green, color: colors.cream }}>
      <div className="max-w-4xl mx-auto w-full text-center">
        <p className="text-xl md:text-3xl leading-relaxed italic font-light" style={{ fontFamily: "var(--font-heading)" }}>
          {locale === "vi"
            ? "“Trong sự tĩnh lặng, ta tìm thấy chính mình. NOLIA nâng tầm nghệ thuật thư giãn Hội An thành một lẽ sống.”"
            : "“In stillness, we meet ourselves again. NOLIA elevates Hoi An’s art of relaxation into a way of being.”"}
        </p>
        <p className="text-xs tracking-[0.22em] uppercase mt-8 opacity-80" style={{ fontFamily: "var(--font-body)" }}>
          NOLIA HOI AN
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <BookingEngineBar />
      <HomeStory />
      <HomeRoomsCarousel />
      <HomeMap />
      <HomeServicesCollage />
      <QuoteSection />
    </>
  );
}
