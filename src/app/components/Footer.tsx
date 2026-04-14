import { Link } from "react-router";
import logoImage from "../../imports/image.png";

export function Footer() {
  return (
    <footer className="bg-[#526248] px-6 md:px-12 py-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="NOLIA HOI AN" className="h-10 w-auto" />
              <div>
                <h3
                  className="text-xl text-[#F4F2EB]"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                >
                  NOLIA HOI AN
                </h3>
              </div>
            </Link>
            <p
              className="text-[#F4F2EB]/70 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              The Art of Hoi An Relaxation
            </p>
            <div className="mt-6">
              <p
                className="text-[#F4F2EB]/70 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Ancient Town, Hoi An
                <br />
                Quang Nam Province, Vietnam
              </p>
            </div>
          </div>

          <div>
            <h4
              className="text-sm tracking-wider text-[#AF9666] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/rooms"
                  className="text-[#F4F2EB]/70 hover:text-[#AF9666] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/experiences"
                  className="text-[#F4F2EB]/70 hover:text-[#AF9666] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#F4F2EB]/70 hover:text-[#AF9666] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-[#F4F2EB]/70 hover:text-[#AF9666] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-sm tracking-wider text-[#AF9666] mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              NEWSLETTER
            </h4>
            <p
              className="text-[#F4F2EB]/70 mb-4 leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-[#F4F2EB]/10 border border-[#F4F2EB]/20 text-[#F4F2EB] placeholder:text-[#F4F2EB]/40 focus:border-[#AF9666] outline-none transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button
                className="px-6 py-2.5 bg-[#AF9666] text-[#F4F2EB] hover:bg-[#AF9666]/80 transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F4F2EB]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-[#F4F2EB]/50 text-sm"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            © 2026 NOLIA HOI AN. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#F4F2EB]/50 text-sm hover:text-[#AF9666] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#F4F2EB]/50 text-sm hover:text-[#AF9666] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
