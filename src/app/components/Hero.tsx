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

/** Theme NOLIA — dùng cho ô chữ hero (nền trong suốt). */
const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };
const themeRgb = { cream: "244,242,235", bronze: "175,150,102", moss: "82,98,72", sand: "237,234,224" };

/** Ảnh gốc — lặp lại trong DOM để Embla loop luôn đủ chiều rộng. */
const HERO_BASE_SLIDES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1600&auto=format&fit=crop",
];

const LOOP_REPEAT = 3;
const HERO_SLIDE_ROWS = Array.from({ length: HERO_BASE_SLIDES.length * LOOP_REPEAT }, (_, i) => ({
  src: HERO_BASE_SLIDES[i % HERO_BASE_SLIDES.length],
  key: `hero-${i}`,
  logical: i % HERO_BASE_SLIDES.length,
}));

const N_LOGICAL = HERO_BASE_SLIDES.length;

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
  const rotY = dir * 0.65;
  const scale = d === 0 ? 1.07 : d === 1 ? 0.93 : 0.83;
  const opacity = d === 0 ? 1 : d === 1 ? 0.9 : 0.75;
  const bright = d === 0 ? 1.08 : d === 1 ? 0.92 : 0.82;
  const sat = d === 0 ? 1.04 : 0.94;
  const lift = d === 0 ? 0 : d === 1 ? 4 : 10;

  return {
    motion: {
      transform: `perspective(1400px) translateY(${lift}px) rotateY(${rotY}deg) scale(${scale}) translateZ(0)`,
      opacity,
      transition: "transform 0.5s cubic-bezier(0.25, 0.9, 0.32, 1), opacity 0.45s ease",
    },
    shell: {
      boxShadow:
        d === 0
          ? "0 20px 48px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.12)"
          : "0 10px 28px rgba(0,0,0,0.12)",
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
    <section className="relative pt-[4.75rem] md:pt-[5.25rem] pb-3 md:pb-5">
      {/** Full viewport width — tận dụng chiều ngang, slide chữ nhật ngang lớn hơn */}
      <div className="relative w-screen max-w-[100vw] left-1/2 -translate-x-1/2 overflow-x-hidden overflow-y-visible px-3 sm:px-5 md:px-8 py-3 md:py-5 [perspective:2000px]">
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
          className="relative z-10 w-full"
        >
          <CarouselContent viewportClassName="py-6 md:py-8" className="-ml-2.5 sm:-ml-3 md:-ml-4 items-center">
            {HERO_SLIDE_ROWS.map(({ src, key, logical }) => {
              const { motion, shell, zIndex, mediaFilter } = slideVisual(logical, selectedLogical);
              return (
                <CarouselItem
                  key={key}
                  className="py-1 md:py-2 pl-2.5 sm:pl-3 md:pl-4 basis-[min(100%,86%)] sm:basis-[85%] md:basis-[69%] lg:basis-[56%] min-w-0 flex justify-center"
                >
                  <div className="relative w-full max-w-[min(96vw,1380px)]" style={{ zIndex }}>
                    <div className="origin-center will-change-transform" style={motion}>
                      <div
                        className="w-full overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-white/20 isolate backface-hidden"
                        style={shell}
                      >
                        <div className="relative aspect-video w-full min-h-0 max-h-[min(56vh,692px)] md:max-h-[min(63vh,778px)]">
                          <img
                            src={src}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-center grayscale-[4%]"
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
          <CarouselPrevious className="hidden sm:flex left-1 md:left-2 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB] size-10 z-50 shadow-md disabled:opacity-40" />
          <CarouselNext className="hidden sm:flex right-1 md:right-2 border-[#526248] text-[#526248] hover:bg-[#526248] hover:text-[#F4F2EB] size-10 z-50 shadow-md disabled:opacity-40" />
        </Carousel>

        <div className="pointer-events-none absolute inset-x-0 bottom-3 md:bottom-5 z-50 flex justify-center px-4">
          <div
            className="max-w-lg text-center rounded-[1.35rem] md:rounded-[1.75rem] border px-7 py-4 md:px-9 md:py-5 shadow-xl backdrop-blur-md backdrop-saturate-[1.15]"
            style={{
              background: `linear-gradient(
                168deg,
                rgba(${themeRgb.cream},0.38) 0%,
                rgba(${themeRgb.sand},0.32) 18%,
                rgba(${themeRgb.bronze},0.52) 48%,
                rgba(${themeRgb.moss},0.58) 100%
              )`,
              borderColor: `rgba(${themeRgb.cream},0.45)`,
              boxShadow: `0 16px 44px rgba(${themeRgb.moss},0.22), inset 0 1px 0 rgba(${themeRgb.cream},0.35)`,
            }}
          >
            <span
              className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase mb-2 block opacity-95"
              style={{ fontFamily: "var(--font-accent)", color: colors.cream }}
            >
              {locale === "vi" ? "Nơi nghệ thuật tĩnh lặng lên ngôi" : "Where quiet artistry leads"}
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: "var(--font-heading)", color: colors.cream }}
            >
              The Art of <span className="italic">Silence</span>
            </h1>
          </div>
        </div>
      </div>

      <div className={`text-center mt-3 md:mt-4 ${shellGutter}`}>
        <div className={shellMax}>
          <a
            href="#booking-engine"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b pb-1 hover:text-[#AF9666] hover:border-[#AF9666] transition-colors"
            style={{ fontFamily: "var(--font-body)", color: colors.green, borderColor: colors.bronze }}
          >
            {locale === "vi" ? "Đặt kỳ nghỉ" : "Plan your stay"}
          </a>
        </div>
      </div>
    </section>
  );
}
