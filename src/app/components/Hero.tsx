import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

const colors = { green: "#526248", bronze: "#AF9666" };

/** Ảnh gốc — lặp lại trong DOM để Embla loop luôn đủ chiều rộng (giống cơ chế carousel phòng). */
const HERO_BASE_SLIDES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=900&auto=format&fit=crop",
];

const LOOP_REPEAT = 3;
const HERO_SLIDE_ROWS = Array.from({ length: HERO_BASE_SLIDES.length * LOOP_REPEAT }, (_, i) => ({
  src: HERO_BASE_SLIDES[i % HERO_BASE_SLIDES.length],
  key: `hero-${i}`,
  logical: i % HERO_BASE_SLIDES.length,
}));

const N_LOGICAL = HERO_BASE_SLIDES.length;

/**
 * Coverflow: `transform` chỉ trên lớp ngoài — **cả khung + ảnh** scale một khối → slide phụ không còn khe.
 * `rounded` + `overflow-hidden` nằm **trong** lớp không transform → slide giữa vẫn bo góc đúng (tránh gộp transform+overflow một node).
 */
function slideVisual(logicalIndex: number, selectedLogical: number): {
  motion: CSSProperties;
  shell: CSSProperties;
  zIndex: number;
  mediaFilter: string;
} {
  let d = Math.abs(logicalIndex - selectedLogical);
  d = Math.min(d, N_LOGICAL - d);
  const dirRaw = logicalIndex - selectedLogical;
  const dir = dirRaw > N_LOGICAL / 2 ? dirRaw - N_LOGICAL : dirRaw < -N_LOGICAL / 2 ? dirRaw + N_LOGICAL : dirRaw;
  const rotY = dir * 0.9;
  const scale = d === 0 ? 1.14 : d === 1 ? 0.9 : 0.78;
  const opacity = d === 0 ? 1 : d === 1 ? 0.88 : 0.72;
  const bright = d === 0 ? 1.14 : d === 1 ? 0.9 : 0.78;
  const sat = d === 0 ? 1.06 : 0.92;
  const lift = d === 0 ? 0 : d === 1 ? 6 : 14;

  return {
    motion: {
      transform: `perspective(1400px) translateY(${lift}px) rotateY(${rotY}deg) scale(${scale}) translateZ(0)`,
      opacity,
      transition: "transform 0.5s cubic-bezier(0.25, 0.9, 0.32, 1), opacity 0.45s ease",
    },
    shell: {
      boxShadow:
        d === 0
          ? "0 28px 56px rgba(0,0,0,0.26), 0 0 0 1px rgba(255,255,255,0.14)"
          : "0 10px 26px rgba(0,0,0,0.14)",
      transition: "box-shadow 0.45s ease",
    },
    zIndex: 40 - d * 10,
    mediaFilter: `brightness(${bright}) saturate(${sat})`,
  };
}

export function Hero() {
  const { locale } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedLogical, setSelectedLogical] = useState(0);

  const syncFromApi = useCallback((embla: CarouselApi) => {
    setSelectedLogical(embla.selectedScrollSnap() % N_LOGICAL);
  }, []);

  useEffect(() => {
    if (!api) return;
    syncFromApi(api);
    const onScroll = () => syncFromApi(api);
    api.on("select", syncFromApi);
    api.on("reInit", syncFromApi);
    api.on("scroll", onScroll);
    api.on("settle", syncFromApi);
    return () => {
      api.off("select", syncFromApi);
      api.off("reInit", syncFromApi);
      api.off("scroll", onScroll);
      api.off("settle", syncFromApi);
    };
  }, [api, syncFromApi]);

  return (
    <section className={`relative pt-[4.5rem] md:pt-[4.75rem] pb-6 md:pb-10 ${shellGutter}`}>
      <div className={`${shellMax} relative`}>
        {/** overflow-x-clip cắt mép ngang của slide giữa (scale lớn) → bo góc trông vuông. */}
        <div className="relative overflow-x-visible overflow-y-visible py-14 md:py-20 [perspective:2000px]">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "center",
              duration: 28,
              skipSnaps: false,
              dragFree: false,
              containScroll: false,
              startIndex: N_LOGICAL,
            }}
            className="relative z-10 w-full px-8 md:px-12"
          >
            <CarouselContent
              viewportClassName="py-10 md:py-[4.5rem]"
              className="-ml-3 md:-ml-4 items-center"
            >
              {HERO_SLIDE_ROWS.map(({ src, key, logical }) => {
                const { motion, shell, zIndex, mediaFilter } = slideVisual(logical, selectedLogical);
                return (
                  <CarouselItem
                    key={key}
                    className="py-2 md:py-4 pl-3 md:pl-4 basis-[72%] sm:basis-[52%] md:basis-[36%] lg:basis-[26%] min-w-0 flex justify-center"
                  >
                    <div className="relative w-full max-w-[min(100%,300px)]" style={{ zIndex }}>
                      <div className="origin-center will-change-transform" style={motion}>
                        <div
                          className="w-full overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-white/20 isolate backface-hidden"
                          style={shell}
                        >
                          <div className="relative aspect-[3/5] max-h-[min(68vh,520px)] md:max-h-[min(70vh,540px)] w-full min-h-0">
                            <img
                              src={src}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover object-center grayscale-[5%]"
                              style={{ filter: mediaFilter }}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-1 md:left-2 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB] size-10 z-40 shadow-md disabled:opacity-40" />
            <CarouselNext className="hidden sm:flex right-1 md:right-2 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB] size-10 z-40 shadow-md disabled:opacity-40" />
          </Carousel>

          {/** Không dùng full-bleed gradient cao — nó đè mép dưới ảnh giữa (slide cao nhất) và làm mất bo góc. Chữ nằm trong khối bo góc ở giữa. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-4 md:bottom-6 z-50 flex justify-center px-4">
            <div className="max-w-lg text-center rounded-2xl md:rounded-3xl border border-white/15 bg-black/35 px-5 py-4 md:px-8 md:py-5 shadow-lg backdrop-blur-md">
              <span
                className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase mb-1.5 block text-white/95"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {locale === "vi" ? "Nơi nghệ thuật tĩnh lặng lên ngôi" : "Where quiet artistry leads"}
              </span>
              <h1
                className="text-2xl sm:text-3xl md:text-4xl leading-tight text-white drop-shadow-md"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Art of <span className="italic">Silence</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 md:mt-5">
        <a
          href="#booking-engine"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b pb-1 hover:text-[#AF9666] hover:border-[#AF9666] transition-colors"
          style={{ fontFamily: "var(--font-body)", color: colors.green, borderColor: colors.bronze }}
        >
          {locale === "vi" ? "Đặt kỳ nghỉ" : "Plan your stay"}
        </a>
      </div>
    </section>
  );
}
