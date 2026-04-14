import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const experiences = [
  {
    title: "Wellness & Spa",
    description:
      "Indulge in traditional Vietnamese therapies combined with modern wellness practices. Our spa offers authentic treatments using local herbs and techniques passed down through generations.",
    image: "https://images.unsplash.com/photo-1672015521020-ab4f86d5cc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    details: [
      "Traditional Vietnamese Massage",
      "Herbal Steam Therapy",
      "Meditation Sessions",
      "Yoga by the River",
    ],
  },
  {
    title: "Cultural Immersion",
    description:
      "Walk through centuries of history in Hoi An's ancient streets. Experience local artisan workshops, traditional lantern making, and discover the stories behind UNESCO World Heritage sites.",
    image: "https://images.unsplash.com/photo-1654591585180-73520645775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    details: [
      "Guided Old Town Tours",
      "Lantern Making Workshop",
      "Traditional Ao Dai Fitting",
      "Local Market Visits",
    ],
  },
  {
    title: "Culinary Journey",
    description:
      "Savor the flavors of Central Vietnam with our farm-to-table dining experience. Learn to prepare authentic dishes in our cooking classes or enjoy curated tasting menus in our garden courtyard.",
    image: "https://images.unsplash.com/photo-1771830916699-e2f1b74c1ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    details: [
      "Vietnamese Cooking Classes",
      "Garden-to-Table Dining",
      "Local Wine Tasting",
      "Street Food Tours",
    ],
  },
  {
    title: "Riverside Serenity",
    description:
      "Connect with the peaceful flow of the Thu Bon River. Enjoy private boat tours at sunset, morning meditation by the water, or simply relax on our riverside terrace.",
    image: "https://images.unsplash.com/photo-1730367019975-4ad8d9e14ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    details: [
      "Sunset Boat Tours",
      "Riverside Meditation",
      "Traditional Fishing Experience",
      "Photography Excursions",
    ],
  },
];

export default function Experiences() {
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
            CURATED MOMENTS
          </span>
          <h1
            className="text-6xl md:text-8xl text-[#526248] mt-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Experiences
          </h1>
          <div className="w-20 h-px bg-[#AF9666] mx-auto mt-8"></div>
          <p
            className="text-lg text-[#2a2a2a]/70 mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Immerse yourself in the essence of Hoi An through carefully crafted experiences that
            honor tradition while embracing contemporary wellness
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#fafaf8]">
        <div className="max-w-[1600px] mx-auto space-y-32">
          {experiences.map((exp, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={`relative overflow-hidden aspect-[3/4] ${isEven ? "" : "md:col-start-2"}`}>
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h2
                      className="text-4xl md:text-5xl text-[#526248] mb-6"
                      style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
                    >
                      {exp.title}
                    </h2>
                    <p
                      className="text-lg text-[#2a2a2a]/70 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3
                      className="text-sm tracking-wider text-[#526248] mb-4"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      HIGHLIGHTS
                    </h3>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-[#2a2a2a]/70 flex items-start gap-3"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          <span className="text-[#AF9666] mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-3 px-8 py-3 bg-[#526248] text-[#F4F2EB] text-sm tracking-wider hover:bg-[#AF9666] transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      BOOK THIS EXPERIENCE
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#526248]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2
              className="text-4xl md:text-5xl text-[#F4F2EB] mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
            >
              Create Your Perfect Itinerary
            </h2>
            <p
              className="text-lg text-[#F4F2EB]/80 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our concierge team is here to help you design a personalized experience that perfectly
              matches your interests and schedule
            </p>
            <a
              href="mailto:reservations@noliahoian.com"
              className="inline-block px-10 py-4 border border-[#F4F2EB] text-[#F4F2EB] tracking-widest text-sm hover:bg-[#F4F2EB] hover:text-[#526248] transition-all duration-500"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              CONTACT CONCIERGE
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
