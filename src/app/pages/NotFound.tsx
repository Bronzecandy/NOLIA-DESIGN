import { motion } from "motion/react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F2EB] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <h1
          className="text-8xl md:text-9xl text-[#526248] mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
        >
          404
        </h1>
        <div className="w-20 h-px bg-[#AF9666] mx-auto mb-6"></div>
        <h2
          className="text-3xl md:text-4xl text-[#526248] mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Page Not Found
        </h2>
        <p
          className="text-lg text-[#2a2a2a]/70 mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          The page you're looking for seems to have wandered off like a lantern floating down the Thu Bon River
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-[#526248] text-[#F4F2EB] tracking-widest text-sm hover:bg-[#AF9666] transition-all duration-500"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          RETURN HOME
        </Link>
      </motion.div>
    </main>
  );
}
