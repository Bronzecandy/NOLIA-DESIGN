import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Link, useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { roomsData } from "../data/rooms";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

function RoomsPreview() {
  const navigate = useNavigate();

  return (
    <section id="rooms" className="py-24" style={{ backgroundColor: '#EDEAE0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span
              className="text-xs tracking-[0.3em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
            >
              Không Gian Lưu Trú
            </span>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
              The Magnolia Collection
            </h2>
          </div>
          <Link
            to="/rooms"
            className="flex items-center text-sm tracking-widest uppercase group hover:text-[#AF9666] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)", color: colors.green }}
          >
            Xem tất cả hạng phòng <ChevronRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {roomsData.slice(0, 2).map((room, index) => (
            <div
              key={room.id}
              className={`group cursor-pointer ${index === 1 ? 'md:mt-24' : ''}`}
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div className="overflow-hidden relative aspect-[3/4] mb-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[10%] group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl mb-2 group-hover:text-[#AF9666] transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>{room.name}</h3>
              <p className="text-sm opacity-80 mb-4 line-clamp-2" style={{ fontFamily: "var(--font-body)" }}>
                {room.shortDesc}
              </p>
              <span
                className="text-xs tracking-widest uppercase border-b pb-1 group-hover:border-[#526248] group-hover:text-[#526248] transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)", borderColor: colors.bronze, color: colors.bronze }}
              >
                Khám phá
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WellnessSection() {
  const navigate = useNavigate();

  return (
    <section id="experiences" className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
            alt="Spa Experience"
            className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-700"
            style={{ borderRadius: '100px 0 100px 0' }}
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            Nghệ thuật thư giãn
          </span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Thanh lọc Tâm - Thân - Trí
          </h2>
          <p className="text-lg leading-relaxed font-light opacity-90 mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Liệu pháp Spa tại Nolia là sự kế thừa tinh hoa y học cổ truyền và nguyên liệu bản địa.
            Chúng tôi mời bạn trải nghiệm nghi thức trà đạo tĩnh tâm, hương sen thanh khiết và
            những cái chạm xoa dịu mọi muộn phiền.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="px-8 py-3 text-sm tracking-widest uppercase border border-[#526248] text-[#526248] transition-all duration-500 hover:bg-[#526248] hover:text-[#F4F2EB] hover:border-[#526248]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Đặt Dịch Vụ
          </button>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="py-24" style={{ backgroundColor: colors.green, color: colors.bg }}>
      <div className="max-w-4xl mx-auto text-center px-6">
        <svg className="w-12 h-12 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.bronze }}>
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-2xl md:text-4xl leading-relaxed italic font-light" style={{ fontFamily: "var(--font-heading)" }}>
          "Trong sự tĩnh lặng, ta tìm thấy chính mình. Nolia không chỉ lưu giữ nghệ thuật thư giãn của Hội An, mà còn nâng tầm nó thành một lẽ sống."
        </p>
        <div className="mt-12">
          <h4 className="text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>NOLIA HOI AN</h4>
          <span className="text-xs mt-2 block opacity-70" style={{ color: colors.bronze }}>Since 2024</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RoomsPreview />
      <WellnessSection />
      <QuoteSection />
    </>
  );
}
