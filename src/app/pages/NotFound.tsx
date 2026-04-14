import { Link } from "react-router";

const colors = {
  green: '#526248',
  bronze: '#AF9666',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F2EB] px-6">
      <div className="text-center max-w-2xl animate-fade-in">
        <h1
          className="text-8xl md:text-9xl mb-6"
          style={{ fontFamily: "var(--font-heading)", color: colors.green, fontWeight: 300 }}
        >
          404
        </h1>
        <div className="w-20 h-px mx-auto mb-6" style={{ backgroundColor: colors.bronze }}></div>
        <h2
          className="text-3xl md:text-4xl mb-6"
          style={{ fontFamily: "var(--font-heading)", color: colors.green }}
        >
          Trang Không Tồn Tại
        </h2>
        <p
          className="text-lg opacity-70 mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: colors.green }}
        >
          Trang bạn đang tìm kiếm dường như đã trôi đi như chiếc đèn lồng trên dòng sông Thu Bồn
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 text-sm tracking-widest transition-all duration-500 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          VỀ TRANG CHỦ
        </Link>
      </div>
    </main>
  );
}
