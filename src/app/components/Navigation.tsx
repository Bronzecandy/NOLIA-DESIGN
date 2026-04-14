import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <nav
        className="fixed w-full z-50 py-6"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
            style={{ color: colors.green }}
          >
            <Menu size={24} />
          </button>

          <div
            className="hidden md:flex space-x-8 text-[13px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)", color: colors.green }}
          >
            <button onClick={() => handleNav("/")} className="hover:opacity-70 transition-opacity">Trang Chủ</button>
            <button onClick={() => handleNav("/rooms")} className="hover:opacity-70 transition-opacity">Nơi Chốn</button>
            <button onClick={() => handleNav("/gallery")} className="hover:opacity-70 transition-opacity">Album</button>
          </div>

          <div
            className="text-center z-10 cursor-pointer absolute left-1/2 transform -translate-x-1/2"
            onClick={() => handleNav("/")}
          >
            <h1
              className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: "var(--font-heading)", color: colors.green }}
            >
              NOLIA
            </h1>
            <p
              className="text-[10px] tracking-[0.3em] uppercase mt-1"
              style={{ color: colors.bronze }}
            >
              Hoi An
            </p>
          </div>

          <div
            className="hidden md:flex space-x-8 items-center text-[13px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <button onClick={() => handleNav("/experiences")} className="hover:opacity-70 transition-opacity" style={{ color: colors.green }}>Trải Nghiệm</button>
            <button
              onClick={() => handleNav("/booking")}
              className="px-6 py-2 border transition-all duration-300 hover:bg-opacity-10"
              style={{
                borderColor: colors.bronze,
                color: colors.bronze,
                backgroundColor: 'transparent'
              }}
            >
              Đặt Phòng
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: colors.bg }}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>NOLIA</h2>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: colors.green }}>
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-3/4 space-y-8 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
          <button onClick={() => handleNav("/")} className="hover:opacity-70" style={{ color: colors.green }}>Trang Chủ</button>
          <button onClick={() => handleNav("/rooms")} className="hover:opacity-70" style={{ color: colors.green }}>Nơi Chốn</button>
          <button onClick={() => handleNav("/gallery")} className="hover:opacity-70" style={{ color: colors.green }}>Thư Viện Ảnh</button>
          <button onClick={() => handleNav("/experiences")} className="hover:opacity-70" style={{ color: colors.green }}>Trải Nghiệm</button>
          <button
            onClick={() => handleNav("/booking")}
            className="mt-8 px-8 py-3 text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-body)", backgroundColor: colors.bronze, color: colors.bg }}
          >
            Đặt Phòng Ngay
          </button>
        </div>
      </div>
    </>
  );
}
