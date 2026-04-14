const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export function Hero() {
  return (
    <section className="relative pt-40 pb-16 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center z-10 mb-12 animate-fade-in">
        <span
          className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          Nơi nghệ thuật tĩnh lặng lên ngôi
        </span>
        <h2
          className="text-5xl md:text-7xl lg:text-8xl leading-tight"
          style={{ fontFamily: "var(--font-heading)", color: colors.green }}
        >
          The Art of <br /> <span className="italic">Silence</span>
        </h2>
      </div>

      <div
        className="w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] overflow-hidden relative group animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
          alt="Nolia Hoi An Resort"
          className="w-full h-full object-cover grayscale-[10%] transform transition-transform duration-[20s] group-hover:scale-110"
        />
      </div>
    </section>
  );
}
