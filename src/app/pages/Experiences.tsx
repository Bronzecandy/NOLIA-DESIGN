import { useNavigate } from "react-router";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

const experiences = [
  {
    title: "Wellness & Spa",
    subtitle: "Thanh lọc Tâm - Thân - Trí",
    description:
      "Liệu pháp Spa tại Nolia là sự kế thừa tinh hoa y học cổ truyền và nguyên liệu bản địa. Chúng tôi mời bạn trải nghiệm nghi thức trà đạo tĩnh tâm, hương sen thanh khiết và những cái chạm xoa dịu mọi muộn phiền.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Massage truyền thống Việt Nam",
      "Liệu pháp xông hơi thảo dược",
      "Thiền định & Yoga bên sông",
      "Nghi thức trà đạo tĩnh tâm",
    ],
  },
  {
    title: "Cultural Immersion",
    subtitle: "Đắm mình trong Di sản",
    description:
      "Bước qua hàng thế kỷ lịch sử trên những con phố cổ Hội An. Trải nghiệm các xưởng thủ công truyền thống, nghệ thuật làm đèn lồng, và khám phá những câu chuyện đằng sau Di sản Thế giới UNESCO.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Tour phố cổ có hướng dẫn",
      "Workshop làm đèn lồng",
      "Trải nghiệm Áo Dài truyền thống",
      "Tham quan chợ địa phương",
    ],
  },
  {
    title: "Culinary Journey",
    subtitle: "Hành trình Ẩm thực",
    description:
      "Thưởng thức tinh hoa ẩm thực miền Trung với trải nghiệm farm-to-table. Học cách chế biến các món ăn đích thực trong lớp nấu ăn hoặc thưởng thức thực đơn tasting menu trong khu vườn sân trong.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
    details: [
      "Lớp nấu ăn Việt Nam",
      "Ẩm thực từ Vườn đến Bàn ăn",
      "Thưởng rượu địa phương",
      "Tour ẩm thực đường phố",
    ],
  },
  {
    title: "Riverside Serenity",
    subtitle: "Tĩnh lặng bên Dòng sông",
    description:
      "Kết nối với dòng chảy thanh bình của sông Thu Bồn. Tận hưởng tour thuyền riêng lúc hoàng hôn, thiền định buổi sáng bên mặt nước, hoặc đơn giản là thư giãn trên sân thượng ven sông.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
    details: [
      "Tour thuyền hoàng hôn",
      "Thiền định ven sông",
      "Trải nghiệm đánh cá truyền thống",
      "Chụp ảnh nghệ thuật",
    ],
  },
];

export default function Experiences() {
  const navigate = useNavigate();

  return (
    <main className={`pt-20 md:pt-24 pb-24 min-h-screen ${shellGutter}`}>
      <section className="mb-20">
        <div className={`${shellMax} text-center`}>
          <span className={`${tx.eyebrowAccent} mb-4`} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
            Nghệ thuật thư giãn
          </span>
          <h1 className={tx.pageTitleFlat} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            Trải Nghiệm Tại Nolia
          </h1>
          <div className="w-20 h-px mx-auto mb-8 mt-4" style={{ backgroundColor: colors.bronze }}></div>
          <p className={`${tx.body} max-w-3xl mx-auto`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            Đắm mình trong tinh hoa Hội An qua những trải nghiệm được chăm chút tỉ mỉ, tôn vinh truyền thống và hòa quyện cùng nghệ thuật sống hiện đại.
          </p>
        </div>
      </section>

      <section>
        <div className={`${shellMax} space-y-32`}>
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden relative aspect-[3/4] group">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <span className={`${tx.eyebrowAccent} mb-4`} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
                    {exp.subtitle}
                  </span>
                  <h2 className={tx.sectionTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                    {exp.title}
                  </h2>
                  <p className={`${tx.body} mb-8`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                    {exp.description}
                  </p>

                  <div className="mb-8">
                    <h3
                      className="text-xs tracking-widest uppercase mb-4"
                      style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
                    >
                      Điểm nổi bật
                    </h3>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 ${tx.caption} opacity-90 hover:opacity-100 hover:translate-x-1 transition-all duration-300`}
                          style={{ fontFamily: "var(--font-body)", color: colors.green }}
                        >
                          <span style={{ color: colors.bronze }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate("/booking")}
                    className="px-8 py-3 text-sm tracking-widest uppercase transition-all duration-500 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Đặt Trải Nghiệm
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`mt-32 py-24 ${shellGutter}`} style={{ backgroundColor: colors.green }}>
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className={`${tx.pageTitleFlat} mb-6`} style={{ fontFamily: "var(--font-heading)", color: colors.bg }}>
            Thiết Kế Lịch Trình Riêng
          </h2>
          <p className={`${tx.body} mb-10 max-w-3xl mx-auto`} style={{ fontFamily: "var(--font-body)", color: colors.bg }}>
            Đội ngũ Concierge của chúng tôi sẵn sàng giúp bạn tạo nên một trải nghiệm cá nhân hóa hoàn hảo, phù hợp với sở thích và lịch trình của bạn.
          </p>
          <a
            href="mailto:hello@noliahoian.com"
            className="inline-block px-10 py-4 border text-sm tracking-widest transition-all duration-500 hover:bg-[#F4F2EB] hover:text-[#526248] hover:border-[#F4F2EB]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, borderColor: colors.bg, color: colors.bg }}
          >
            LIÊN HỆ CONCIERGE
          </a>
        </div>
      </section>
    </main>
  );
}
