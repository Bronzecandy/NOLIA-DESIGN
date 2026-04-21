import { useNavigate } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronRight } from "lucide-react";
import logoMark from "../../assets/brand/nolia-mark.png";
import { shellGutter, shellMax } from "../shell";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export function Footer() {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className={`pt-24 pb-12 ${shellGutter}`} style={{ backgroundColor: '#EDEAE0' }}>
      <div className={`${shellMax} grid grid-cols-1 md:grid-cols-4 gap-12 mb-16`}>
        <div className="md:col-span-1">
          <div className="flex flex-col items-start mb-4 cursor-pointer group" onClick={() => handleNav("/")}>
            <img src={logoMark} alt="Nolia" className="h-16 w-auto max-h-16 object-contain group-hover:scale-105 transition-transform duration-300" />
            <h2
              className="text-2xl tracking-[0.15em] group-hover:text-[#AF9666] transition-colors duration-300 leading-none mt-2"
              style={{ fontFamily: "var(--font-heading)", color: colors.green }}
            >
              NOLIA
            </h2>
            <p className="text-[9px] tracking-[0.3em] uppercase mt-1" style={{ color: colors.bronze }}>HOI AN</p>
          </div>
          <p className="text-base font-light opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            The Art of Silence.<br />
            Nguyên bản từ Soluna D'Annam.
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Liên Hệ</h3>
          <ul className="space-y-4 text-base font-light opacity-80" style={{ fontFamily: "var(--font-body)" }}>
            <li className="flex items-start hover:opacity-100 transition-opacity duration-300">
              <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
              <span>Đường Hai Bà Trưng, Cẩm Châu, Hội An, Quảng Nam</span>
            </li>
            <li className="flex items-center hover:opacity-100 hover:text-[#AF9666] transition-all duration-300 cursor-pointer">
              <Phone size={16} className="mr-3 flex-shrink-0" />
              <span>+84 235 3xxx xxx</span>
            </li>
            <li className="flex items-center hover:opacity-100 hover:text-[#AF9666] transition-all duration-300 cursor-pointer">
              <Mail size={16} className="mr-3 flex-shrink-0" />
              <span>hello@noliahoian.com</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Khám Phá</h3>
          <ul className="space-y-3 text-base font-light opacity-80 flex flex-col items-start" style={{ fontFamily: "var(--font-body)" }}>
            <li><button type="button" onClick={() => handleNav("/")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Trang chủ</button></li>
            <li><button type="button" onClick={() => handleNav("/rooms")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Hạng phòng</button></li>
            <li><button type="button" onClick={() => handleNav("/gallery")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Gallery</button></li>
            <li><button type="button" onClick={() => handleNav("/services")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Dịch vụ</button></li>
            <li><button type="button" onClick={() => handleNav("/contact")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Liên hệ</button></li>
            <li><button type="button" onClick={() => handleNav("/booking")} className="hover:text-[#AF9666] hover:translate-x-1 transition-all duration-300">Đặt phòng</button></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Nhận Tin Tức</h3>
          <p className="text-base font-light opacity-80 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Đăng ký để nhận những câu chuyện và ưu đãi đặc quyền từ Nolia.
          </p>
          <div className="flex border-b hover:border-[#AF9666] transition-colors duration-300" style={{ borderColor: colors.green }}>
            <input
              type="email"
              placeholder="Email của bạn..."
              className="bg-transparent w-full py-2 outline-none text-sm placeholder-opacity-50"
              style={{ fontFamily: "var(--font-body)", color: colors.green }}
            />
            <button className="py-2 hover:translate-x-1 transition-transform duration-300">
              <ChevronRight size={20} style={{ color: colors.bronze }} />
            </button>
          </div>

          <div className="flex space-x-4 mt-8">
            <button className="hover:text-[#AF9666] hover:scale-110 transition-all duration-300"><Instagram size={20} /></button>
            <button className="hover:text-[#AF9666] hover:scale-110 transition-all duration-300"><Facebook size={20} /></button>
          </div>
        </div>
      </div>

      <div className={`${shellMax} pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm font-light opacity-60`} style={{ fontFamily: "var(--font-body)", borderColor: 'rgba(82, 98, 72, 0.2)' }}>
        <p>© 2024 Nolia Hoi An. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="hover:underline hover:opacity-100 transition-all duration-300">Chính sách bảo mật</button>
          <button className="hover:underline hover:opacity-100 transition-all duration-300">Điều khoản sử dụng</button>
        </div>
      </div>
    </footer>
  );
}
