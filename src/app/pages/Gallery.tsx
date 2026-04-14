const colors = {
  green: '#526248',
  bronze: '#AF9666',
};

const images = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2032&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <div className="pt-36 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            Nét đẹp ngưng đọng
          </span>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            Thư Viện Hình Ảnh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden group relative aspect-square">
              <img
                src={src}
                alt={`Nolia Gallery ${index + 1}`}
                className="w-full h-full object-cover grayscale-[15%] transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
