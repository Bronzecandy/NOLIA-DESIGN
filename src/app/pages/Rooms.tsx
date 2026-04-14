import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const rooms = [
  {
    id: 1,
    name: "Heritage Suite",
    description: "Spacious suite with traditional Vietnamese aesthetics and modern comfort",
    image: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "45 m²",
    guests: "2 guests",
    amenities: ["King Bed", "Private Balcony", "Rain Shower", "Complimentary Tea"],
    price: "From $180/night",
  },
  {
    id: 2,
    name: "Lantern Room",
    description: "Intimate space adorned with handcrafted lanterns and silk textiles",
    image: "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "35 m²",
    guests: "2 guests",
    amenities: ["Queen Bed", "Garden View", "Soaking Tub", "Silk Robes"],
    price: "From $150/night",
  },
  {
    id: 3,
    name: "River View Sanctuary",
    description: "Panoramic views of the Thu Bon River with private balcony",
    image: "https://images.unsplash.com/photo-1759264244741-7175af0b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "50 m²",
    guests: "2-3 guests",
    amenities: ["King Bed", "River Balcony", "Jacuzzi", "Mini Bar"],
    price: "From $220/night",
  },
  {
    id: 4,
    name: "Garden Pavilion",
    description: "Private pavilion surrounded by lush tropical gardens",
    image: "https://images.unsplash.com/photo-1759264245066-3a91ced8a53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "55 m²",
    guests: "2-4 guests",
    amenities: ["Two Queen Beds", "Private Garden", "Outdoor Shower", "Terrace"],
    price: "From $250/night",
  },
  {
    id: 5,
    name: "Tranquility Suite",
    description: "Ultimate relaxation with spa-inspired amenities",
    image: "https://images.unsplash.com/photo-1775660922989-f0c624413269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "40 m²",
    guests: "2 guests",
    amenities: ["King Bed", "Meditation Corner", "Deep Soaking Tub", "Essential Oils"],
    price: "From $190/night",
  },
  {
    id: 6,
    name: "Ancient Town View",
    description: "Overlooking the historic streets of Hoi An's old quarter",
    image: "https://images.unsplash.com/photo-1770573318991-49b9baaec319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    size: "42 m²",
    guests: "2 guests",
    amenities: ["Queen Bed", "Old Town View", "Reading Nook", "Coffee Station"],
    price: "From $170/night",
  },
];

export default function Rooms() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

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
            ACCOMMODATIONS
          </span>
          <h1
            className="text-6xl md:text-8xl text-[#526248] mt-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Rooms & Suites
          </h1>
          <div className="w-20 h-px bg-[#AF9666] mx-auto mt-8"></div>
          <p
            className="text-lg text-[#2a2a2a]/70 mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Each room at NOLIA is a carefully curated sanctuary, blending traditional Vietnamese
            craftsmanship with contemporary comfort
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#fafaf8]">
        <div className="max-w-[1600px] mx-auto">
          <div className="space-y-24">
            {rooms.map((room, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={room.id}
                  ref={ref}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={`relative overflow-hidden aspect-[4/3] ${isEven ? "" : "md:col-start-2"}`}>
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2
                        className="text-4xl md:text-5xl text-[#526248] mb-4"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                      >
                        {room.name}
                      </h2>
                      <p
                        className="text-lg text-[#2a2a2a]/70 leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {room.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-[#AF9666]">
                      <span style={{ fontFamily: "var(--font-body)" }}>{room.size}</span>
                      <span className="w-px h-4 bg-[#AF9666]/30"></span>
                      <span style={{ fontFamily: "var(--font-body)" }}>{room.guests}</span>
                    </div>

                    <div className="pt-4">
                      <h3
                        className="text-sm tracking-wider text-[#526248] mb-3"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        AMENITIES
                      </h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, i) => (
                          <li
                            key={i}
                            className="text-[#2a2a2a]/70"
                            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                          >
                            • {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span
                        className="text-2xl text-[#526248]"
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                      >
                        {room.price}
                      </span>
                      <Link
                        to="/booking"
                        className="px-8 py-3 bg-[#526248] text-[#F4F2EB] text-sm tracking-wider hover:bg-[#AF9666] transition-all duration-300"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
