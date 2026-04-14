import { Link, useNavigate } from "react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronRight } from "lucide-react";

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
    <footer className="pt-24 pb-12 px-6" style={{ backgroundColor: '#EDEAE0' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h2 className="text-3xl tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>NOLIA</h2>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: colors.bronze }}>Hoi An</p>
          <p className="text-sm font-light opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            The Art of Silence.<br />
            Nguyên bản từ Soluna D'Annam.
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Liên Hệ</h3>
          <ul className="space-y-4 text-sm font-light opacity-80" style={{ fontFamily: "var(--font-body)" }}>
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
              <span>Đường Hai Bà Trưng, Cẩm Châu, Hội An, Quảng Nam</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-3 flex-shrink-0" />
              <span>+84 235 3xxx xxx</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-3 flex-shrink-0" />
              <span>hello@noliahoian.com</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Khám Phá</h3>
          <ul className="space-y-3 text-sm font-light opacity-80 flex flex-col items-start" style={{ fontFamily: "var(--font-body)" }}>
            <li><button onClick={() => handleNav("/")} className="hover:text-[#AF9666] transition-colors">Về Chúng Tôi</button></li>
            <li><button onClick={() => handleNav("/rooms")} className="hover:text-[#AF9666] transition-colors">Nơi Chốn (Phòng)</button></li>
            <li><button onClick={() => handleNav("/gallery")} className="hover:text-[#AF9666] transition-colors">Thư Viện Ảnh</button></li>
            <li><button onClick={() => handleNav("/booking")} className="hover:text-[#AF9666] transition-colors">Đặt Phòng</button></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xs tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-body)", color: colors.bronze }}>Nhận Tin Tức</h3>
          <p className="text-sm font-light opacity-80 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Đăng ký để nhận những câu chuyện và ưu đãi đặc quyền từ Nolia.
          </p>
          <div className="flex border-b" style={{ borderColor: colors.green }}>
            <input
              type="email"
              placeholder="Email của bạn..."
              className="bg-transparent w-full py-2 outline-none text-sm placeholder-opacity-50"
              style={{ fontFamily: "var(--font-body)", color: colors.green }}
            />
            <button className="py-2 hover:opacity-70 transition-opacity">
              <ChevronRight size={20} style={{ color: colors.bronze }} />
            </button>
          </div>

          <div className="flex space-x-4 mt-8">
            <button className="hover:opacity-70 transition-opacity"><Instagram size={20} /></button>
            <button className="hover:opacity-70 transition-opacity"><Facebook size={20} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs font-light opacity-60" style={{ fontFamily: "var(--font-body)", borderColor: 'rgba(82, 98, 72, 0.2)' }}>
        <p>© 2024 Nolia Hoi An. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="hover:underline">Chính sách bảo mật</button>
          <button className="hover:underline">Điều khoản sử dụng</button>
        </div>
      </div>
    </footer>
  );
}
