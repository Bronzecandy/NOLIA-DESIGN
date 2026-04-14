import { useParams, useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";
import { roomsData } from "../data/rooms";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export default function RoomDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = roomsData.find((r) => r.id === roomId);

  if (!room) {
    return (
      <div className="pt-36 pb-24 px-6 min-h-screen text-center">
        <p style={{ fontFamily: "var(--font-body)" }}>Không tìm thấy phòng này.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate("/rooms")}
          className="group flex items-center text-xs tracking-widest uppercase mb-8 hover:text-[#526248] transition-colors duration-300"
          style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
        >
          <MoveLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" /> Trở lại danh sách
        </button>

        <div className="mb-12">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            The Magnolia Collection
          </span>
          <h1 className="text-4xl md:text-6xl" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            {room.name}
          </h1>
        </div>
      </div>

      <div className="w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden mb-16 group">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[2s] ease-out"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>Về không gian này</h3>
          <p
            className="text-base leading-relaxed opacity-90 mb-8 whitespace-pre-line"
            style={{ fontFamily: "var(--font-body)", color: colors.green }}
          >
            {room.fullDesc}
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <div className="p-8 border hover:shadow-lg transition-shadow duration-500" style={{ borderColor: 'rgba(175, 150, 102, 0.3)', backgroundColor: '#EDEAE0' }}>
            <h3
              className="text-xl mb-6 border-b pb-4"
              style={{ fontFamily: "var(--font-heading)", color: colors.green, borderColor: 'rgba(82, 98, 72, 0.2)' }}
            >
              Thông tin phòng
            </h3>
            <ul className="space-y-4 text-sm mb-8" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              <li className="flex justify-between">
                <span className="opacity-70">Diện tích</span>
                <span className="font-medium">{room.size}</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Giường</span>
                <span className="font-medium text-right">{room.bed}</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Góc nhìn</span>
                <span className="font-medium text-right">{room.view}</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-70">Sức chứa</span>
                <span className="font-medium text-right">Tối đa 2 Người lớn</span>
              </li>
            </ul>

            <button
              onClick={() => navigate("/booking")}
              className="w-full py-4 text-sm tracking-widest uppercase transition-all duration-500 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Đặt Phòng Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
