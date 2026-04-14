import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logoImage from "../../imports/image.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage ? "bg-[#F4F2EB]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="NOLIA HOI AN" className="h-12 w-auto" />
            <div>
              <h1
                className="text-2xl tracking-wide leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
              >
                <span className="text-[#526248]">NOLIA HOI AN</span>
              </h1>
              <p
                className="text-xs tracking-widest text-[#AF9666]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                THE ART OF RELAXATION
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:flex items-center gap-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Link
            to="/rooms"
            className="text-sm tracking-wider hover:text-[#AF9666] transition-colors duration-300"
          >
            ROOMS
          </Link>
          <Link
            to="/experiences"
            className="text-sm tracking-wider hover:text-[#AF9666] transition-colors duration-300"
          >
            EXPERIENCES
          </Link>
          <Link
            to="/gallery"
            className="text-sm tracking-wider hover:text-[#AF9666] transition-colors duration-300"
          >
            GALLERY
          </Link>
          <Link
            to="/booking"
            className="px-6 py-2.5 bg-[#526248] text-[#F4F2EB] text-sm tracking-wider hover:bg-[#AF9666] transition-all duration-300"
          >
            BOOK NOW
          </Link>
        </motion.div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#526248] p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#F4F2EB] border-t border-[#526248]/10"
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/rooms"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-[#526248] hover:text-[#AF9666] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ROOMS
            </Link>
            <Link
              to="/experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-[#526248] hover:text-[#AF9666] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              EXPERIENCES
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-wider text-[#526248] hover:text-[#AF9666] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GALLERY
            </Link>
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-6 py-2.5 bg-[#526248] text-[#F4F2EB] text-sm tracking-wider text-center hover:bg-[#AF9666] transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              BOOK NOW
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
