import { useNavigate } from "react-router";
import { roomsData } from "../data/rooms";

const colors = {
  green: '#526248',
  bronze: '#AF9666',
};

export default function Rooms() {
  const navigate = useNavigate();

  return (
    <div className="pt-36 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            Nơi Chốn
          </span>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            Các Hạng Phòng
          </h2>
          <p className="text-sm mt-6 opacity-80 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            Mỗi căn phòng tại Nolia đều được thiết kế tối giản, trân trọng ánh sáng tự nhiên và khoảng không gian tĩnh lặng, mang đến cho bạn giấc ngủ trọn vẹn nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div className="overflow-hidden relative aspect-[4/5] mb-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[10%]"
                />
              </div>
              <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>{room.name}</h3>
              <p className="text-sm opacity-80 mb-6 flex-grow" style={{ fontFamily: "var(--font-body)" }}>
                {room.shortDesc}
              </p>
              <div className="flex justify-between items-center border-t pt-4 mt-auto" style={{ borderColor: 'rgba(82, 98, 72, 0.2)' }}>
                <span className="text-xs opacity-70" style={{ fontFamily: "var(--font-body)" }}>{room.size}</span>
                <span
                  className="text-xs tracking-widest uppercase group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
                >
                  Chi tiết
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
