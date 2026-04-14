import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navLinkClass = "relative text-[#526248] hover:text-[#AF9666] transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#AF9666] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <nav
        className="fixed w-full z-50 py-6 bg-[#F4F2EB]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            className="md:hidden p-2 text-[#526248] hover:text-[#AF9666] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div
            className="hidden md:flex space-x-8 text-[13px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <button onClick={() => handleNav("/")} className={navLinkClass}>Trang Chủ</button>
            <button onClick={() => handleNav("/rooms")} className={navLinkClass}>Nơi Chốn</button>
            <button onClick={() => handleNav("/gallery")} className={navLinkClass}>Album</button>
          </div>

          <div
            className="text-center z-10 cursor-pointer absolute left-1/2 transform -translate-x-1/2 group"
            onClick={() => handleNav("/")}
          >
            <h1
              className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium text-[#526248] group-hover:text-[#AF9666] transition-colors duration-500"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              NOLIA
            </h1>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mt-1 text-[#AF9666] group-hover:opacity-70 transition-opacity duration-500"
            >
              Hoi An
            </p>
          </div>

          <div
            className="hidden md:flex space-x-8 items-center text-[13px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <button onClick={() => handleNav("/experiences")} className={navLinkClass}>Trải Nghiệm</button>
            <button
              onClick={() => handleNav("/booking")}
              className="px-6 py-2 border border-[#AF9666] text-[#AF9666] bg-transparent transition-all duration-500 hover:bg-[#AF9666] hover:border-[#AF9666] hover:text-[#F4F2EB]"
            >
              Đặt Phòng
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-500 ease-in-out bg-[#F4F2EB] ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl tracking-[0.2em] text-[#526248]" style={{ fontFamily: "var(--font-heading)" }}>NOLIA</h2>
          <button onClick={() => setMobileMenuOpen(false)} className="text-[#526248] hover:text-[#AF9666] transition-colors duration-300">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-3/4 space-y-8 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          <button onClick={() => handleNav("/")} className="text-[#526248] hover:text-[#AF9666] transition-colors duration-300">Trang Chủ</button>
          <button onClick={() => handleNav("/rooms")} className="text-[#526248] hover:text-[#AF9666] transition-colors duration-300">Nơi Chốn</button>
          <button onClick={() => handleNav("/gallery")} className="text-[#526248] hover:text-[#AF9666] transition-colors duration-300">Thư Viện Ảnh</button>
          <button onClick={() => handleNav("/experiences")} className="text-[#526248] hover:text-[#AF9666] transition-colors duration-300">Trải Nghiệm</button>
          <button
            onClick={() => handleNav("/booking")}
            className="mt-8 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 bg-[#AF9666] text-[#F4F2EB] hover:bg-[#526248]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Đặt Phòng Ngay
          </button>
        </div>
      </div>
    </>
  );
}
