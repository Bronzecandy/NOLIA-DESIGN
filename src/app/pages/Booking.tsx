import { useState } from "react";
import { roomsData } from "../data/rooms";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-36 pb-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block"
            style={{ fontFamily: "var(--font-body)", color: colors.bronze }}
          >
            Reservation
          </span>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            Bắt Đầu Hành Trình
          </h2>
          <p className="text-sm mt-4 opacity-80" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            Lựa chọn không gian tĩnh lặng của riêng bạn
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-12 text-center animate-fade-in" style={{ border: `1px solid ${colors.bronze}` }}>
            <h3 className="text-3xl mb-4" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>Cảm ơn bạn.</h3>
            <p className="text-sm opacity-80 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              Yêu cầu đặt phòng đã được ghi nhận. <br />
              Quản gia của Nolia sẽ liên hệ với bạn trong thời gian sớm nhất để hoàn tất trải nghiệm.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10" style={{ fontFamily: "var(--font-body)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Ngày nhận phòng</label>
                <input
                  type="date"
                  required
                  className="w-full bg-transparent border-b py-2 focus:outline-none transition-colors"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Ngày trả phòng</label>
                <input
                  type="date"
                  required
                  className="w-full bg-transparent border-b py-2 focus:outline-none transition-colors"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Số lượng khách</label>
                <select
                  className="w-full bg-transparent border-b py-2 focus:outline-none appearance-none"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                >
                  <option>1 Người lớn</option>
                  <option>2 Người lớn</option>
                  <option>2 Người lớn, 1 Trẻ em</option>
                  <option>Gia đình (4+ người)</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Hạng phòng</label>
                <select
                  className="w-full bg-transparent border-b py-2 focus:outline-none appearance-none"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                >
                  {roomsData.map((room) => (
                    <option key={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <input
                type="text"
                required
                placeholder="Họ và Tên"
                className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                style={{ borderColor: colors.bronze, color: colors.green }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                  className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
              </div>
              <textarea
                placeholder="Yêu cầu đặc biệt (Không bắt buộc)..."
                rows={3}
                className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50 resize-none"
                style={{ borderColor: colors.bronze, color: colors.green }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-90 mt-8"
              style={{ fontFamily: "var(--font-body)", backgroundColor: colors.green, color: colors.bg }}
            >
              Gửi Yêu Cầu Đặt Phòng
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
