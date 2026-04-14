import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-[#F4F2EB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771830916708-94e321da6e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Vietnamese lanterns"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#AF9666]/30"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-sm tracking-[0.3em] text-[#AF9666]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  DISCOVER NOLIA
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-5xl md:text-6xl text-[#526248] mt-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                >
                  A Sanctuary of Serenity
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-16 h-px bg-[#AF9666]"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-[#2a2a2a]/80 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Nestled in the heart of Hoi An's ancient town, NOLIA offers a refined escape where
                Vietnamese heritage meets contemporary luxury. Each moment here is an invitation to slow
                down and rediscover the art of relaxation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-base text-[#2a2a2a]/70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                From the gentle rustle of silk lanterns to the whisper of the Thu Bon River, every detail
                has been thoughtfully curated to create an atmosphere of tranquil sophistication.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="pt-6"
              >
                <a
                  href="#rooms"
                  className="inline-flex items-center gap-3 text-sm tracking-[0.2em] text-[#526248] hover:text-[#AF9666] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  EXPLORE OUR STORY
                  <span className="text-xl">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
