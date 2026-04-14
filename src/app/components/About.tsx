const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h3
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          Chương Mới Của Di Sản
        </h3>
        <h2
          className="text-3xl md:text-5xl mb-12 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Từ tinh hoa Soluna D'Annam,<br /> tái sinh thành sự tĩnh tại nguyên bản.
        </h2>
        <p
          className="text-lg leading-relaxed md:px-12 font-light opacity-90"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Kế thừa triết lý "The Art of Hoi An Relaxation" từ Soluna D'Annam,
          <strong> NOLIA HOI AN</strong> ra đời như một nốt trầm hoàn mỹ giữa phố Hội.
          Nơi đây không chỉ là một điểm dừng chân, mà là một không gian nghệ thuật để bạn
          tìm về sự tĩnh lặng bên trong (The Art of Silence), gác lại mọi âu lo và hòa mình
          vào vẻ đẹp thanh tao của kiến trúc và thiên nhiên.
        </p>

        <div className="mt-16 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
            alt="Hoi An Architecture"
            className="w-full max-w-2xl h-auto aspect-[4/3] object-cover grayscale-[20%] sepia-[10%]"
            style={{ padding: '8px', border: `1px solid ${colors.bronze}` }}
          />
        </div>
      </div>
    </section>
  );
}
