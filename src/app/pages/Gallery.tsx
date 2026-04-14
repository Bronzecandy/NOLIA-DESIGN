import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = ["All", "Rooms", "Experiences", "Dining", "Spa", "Surroundings"];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1771830916719-009a636dbeb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Rooms",
    title: "Heritage Suite Detail",
  },
  {
    url: "https://images.unsplash.com/photo-1718942900735-ce42cd0b24dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Surroundings",
    title: "Hoi An Streets",
  },
  {
    url: "https://images.unsplash.com/photo-1759264245066-3a91ced8a53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Rooms",
    title: "Workspace Detail",
  },
  {
    url: "https://images.unsplash.com/photo-1771830916934-6734f2ea9f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Rooms",
    title: "Interior Design",
  },
  {
    url: "https://images.unsplash.com/photo-1770573320171-9f21c3c1f8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Spa",
    title: "Wellness Center",
  },
  {
    url: "https://images.unsplash.com/photo-1768017093126-46523930ad4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Surroundings",
    title: "Evening Atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1654591585180-73520645775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Surroundings",
    title: "Ancient Town",
  },
  {
    url: "https://images.unsplash.com/photo-1672015521020-ab4f86d5cc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Spa",
    title: "Spa Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Rooms",
    title: "Minimalist Bedroom",
  },
  {
    url: "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Rooms",
    title: "Serene Space",
  },
  {
    url: "https://images.unsplash.com/photo-1771830916708-94e321da6e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Experiences",
    title: "Cultural Details",
  },
  {
    url: "https://images.unsplash.com/photo-1771830916699-e2f1b74c1ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Dining",
    title: "Local Cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Spa",
    title: "Relaxation Pool",
  },
  {
    url: "https://images.unsplash.com/photo-1770573318991-49b9baaec319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Spa",
    title: "Sauna Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1767257718960-e019e4f2deab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Surroundings",
    title: "Traditional Architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1771830936630-f955a68f1559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Dining",
    title: "Ambiance",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <main className="pt-24">
      <section ref={headerRef} className="py-20 px-6 md:px-12 bg-[#F4F2EB]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-[1600px] mx-auto text-center"
        >
          <span
            className="text-sm tracking-[0.3em] text-[#AF9666]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            VISUAL JOURNEY
          </span>
          <h1
            className="text-6xl md:text-8xl text-[#526248] mt-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Gallery
          </h1>
          <div className="w-20 h-px bg-[#AF9666] mx-auto mt-8"></div>
          <p
            className="text-lg text-[#2a2a2a]/70 mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Explore the beauty and tranquility that defines NOLIA Hoi An
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-[#fafaf8] sticky top-24 z-40">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-sm tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#526248] text-[#F4F2EB]"
                    : "bg-transparent border border-[#526248]/30 text-[#526248] hover:border-[#AF9666] hover:text-[#AF9666]"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#fafaf8]">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((img, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              return (
                <motion.div
                  key={img.url}
                  ref={ref}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
                >
                  <ImageWithFallback
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className="text-xs tracking-wider text-[#AF9666] mb-1 block"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {img.category}
                    </span>
                    <h3
                      className="text-xl text-[#F4F2EB]"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                    >
                      {img.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
