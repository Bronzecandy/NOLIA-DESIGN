import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767257718960-e019e4f2deab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Hoi An Traditional Architecture"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <h2
            className="text-6xl md:text-8xl lg:text-9xl text-[#F4F2EB] mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
          >
            NOLIA HOI AN
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="w-24 h-px bg-[#AF9666] mx-auto mb-8"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#F4F2EB]/90 tracking-widest"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          THE ART OF HOI AN RELAXATION
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
          className="text-base md:text-lg text-[#F4F2EB]/70 mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Where ancient heritage meets contemporary elegance in the heart of Vietnam's most enchanting city
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#rooms"
            className="inline-block px-10 py-4 bg-transparent border border-[#F4F2EB]/30 text-[#F4F2EB] tracking-widest text-sm hover:bg-[#F4F2EB] hover:text-[#526248] transition-all duration-500"
          >
            EXPLORE ROOMS
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#F4F2EB]/60 text-xs tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[#F4F2EB]/60 to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
