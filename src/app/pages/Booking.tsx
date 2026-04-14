import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const rooms = [
  { id: 1, name: "Heritage Suite", price: 180 },
  { id: 2, name: "Lantern Room", price: 150 },
  { id: 3, name: "River View Sanctuary", price: 220 },
  { id: 4, name: "Garden Pavilion", price: 250 },
  { id: 5, name: "Tranquility Suite", price: 190 },
  { id: 6, name: "Ancient Town View", price: 170 },
];

export default function Booking() {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [guests, setGuests] = useState("2");
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <main className="pt-24">
      <section ref={headerRef} className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1654591585180-73520645775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Hoi An"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#526248]/80 via-[#526248]/60 to-[#526248]/80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-[1600px] mx-auto text-center relative z-10"
        >
          <span
            className="text-sm tracking-[0.3em] text-[#AF9666]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            RESERVATIONS
          </span>
          <h1
            className="text-6xl md:text-8xl text-[#F4F2EB] mt-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
          >
            Book Your Stay
          </h1>
          <div className="w-20 h-px bg-[#AF9666] mx-auto mt-8"></div>
          <p
            className="text-lg text-[#F4F2EB]/80 mt-8 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Begin your journey to tranquility and discover the art of Hoi An relaxation
          </p>
        </motion.div>
      </section>

      <section ref={formRef} className="py-24 px-6 md:px-12 bg-[#F4F2EB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:col-span-2"
            >
              <h2
                className="text-4xl text-[#526248] mb-6"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                Reservation Details
              </h2>
              <p
                className="text-[#2a2a2a]/70 mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Complete the form to reserve your sanctuary. Our team will contact you within 24
                hours to confirm your booking.
              </p>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-sm tracking-wider text-[#526248] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    CONTACT
                  </h3>
                  <p
                    className="text-[#2a2a2a]/70"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    reservations@noliahoian.com
                    <br />
                    +84 (0) 235 XXX XXXX
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm tracking-wider text-[#526248] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    CHECK-IN / CHECK-OUT
                  </h3>
                  <p
                    className="text-[#2a2a2a]/70"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Check-in: 2:00 PM
                    <br />
                    Check-out: 12:00 PM
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm tracking-wider text-[#526248] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    CANCELLATION POLICY
                  </h3>
                  <p
                    className="text-[#2a2a2a]/70"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    Free cancellation up to 48 hours before check-in
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="md:col-span-3"
            >
              <form className="space-y-6 bg-[#fafaf8] p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      PHONE
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm tracking-wider text-[#526248] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    ROOM TYPE *
                  </label>
                  <select
                    required
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} - From ${room.price}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      CHECK-IN *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      CHECK-OUT *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-wider text-[#526248] mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      GUESTS *
                    </label>
                    <select
                      required
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none transition-colors duration-300"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm tracking-wider text-[#526248] mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    SPECIAL REQUESTS
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-[#526248]/30 focus:border-[#AF9666] outline-none resize-none transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Let us know if you have any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#526248] text-[#F4F2EB] tracking-widest text-sm hover:bg-[#AF9666] transition-all duration-500"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  SUBMIT RESERVATION
                </button>

                <p
                  className="text-xs text-[#2a2a2a]/50 text-center"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  By submitting this form, you agree to our privacy policy and terms of service
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
