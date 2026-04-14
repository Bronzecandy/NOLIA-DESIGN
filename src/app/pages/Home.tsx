import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const featuredRooms = [
  {
    name: "Heritage Suite",
    description: "Spacious suite with traditional Vietnamese aesthetics",
    image: "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Lantern Room",
    description: "Intimate space adorned with handcrafted lanterns",
    image: "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "River View Sanctuary",
    description: "Panoramic views of the Thu Bon River",
    image: "https://images.unsplash.com/photo-1759264244741-7175af0b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

function FeaturedRooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#fafaf8]">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span
            className="text-sm tracking-[0.3em] text-[#AF9666]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            ACCOMMODATIONS
          </span>
          <h2
            className="text-5xl md:text-7xl text-[#526248] mt-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Featured Rooms
          </h2>
          <div className="w-20 h-px bg-[#AF9666] mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="space-y-3">
                <h3
                  className="text-3xl text-[#526248]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                >
                  {room.name}
                </h3>
                <p
                  className="text-[#2a2a2a]/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {room.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/rooms"
            className="inline-block px-10 py-4 border border-[#526248] text-[#526248] tracking-widest text-sm hover:bg-[#526248] hover:text-[#F4F2EB] transition-all duration-500"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            VIEW ALL ROOMS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#526248] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1771830916719-009a636dbeb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2
          className="text-5xl md:text-6xl text-[#F4F2EB] mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Begin Your Journey
        </h2>
        <p
          className="text-xl text-[#F4F2EB]/80 mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Experience the perfect harmony of tranquility and sophistication in the heart of Hoi An
        </p>
        <Link
          to="/booking"
          className="inline-block px-12 py-5 bg-[#AF9666] text-[#F4F2EB] tracking-widest text-sm hover:bg-[#AF9666]/80 transition-all duration-500"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          BOOK YOUR STAY
        </Link>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedRooms />
      <CallToAction />
    </>
  );
}
