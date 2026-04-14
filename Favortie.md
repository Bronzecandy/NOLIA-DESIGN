import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Sparkles, MoveLeft } from 'lucide-react';

// --- Global Theme Colors ---
const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666'
};

// --- Data ---
const roomsData = [
  {
    id: 'heritage-suite',
    name: 'Heritage Suite',
    shortDesc: 'Không gian thấm đẫm hơi thở phố cổ với nội thất gỗ màu trầm, cửa sổ lồng gió và ánh sáng tự nhiên ấm áp.',
    fullDesc: 'Lấy cảm hứng từ nét đẹp hoài cổ của Hội An, Heritage Suite mang đến một không gian ấm cúng với nội thất gỗ trầm, ánh sáng tự nhiên và tầm nhìn ra khu vườn xanh mát. Mọi chi tiết từ gạch lát nền đến các họa tiết chạm trổ đều được chế tác thủ công, tạo nên một nơi hoàn hảo để bạn tìm lại sự tĩnh tại và hoài niệm.',
    size: '45 m²',
    view: 'Hướng Vườn & Sân Trong',
    bed: '1 Giường King',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'signature-villa',
    name: 'Nolia Signature Villa',
    shortDesc: 'Tận hưởng sự tĩnh lặng tuyệt đối với hồ bơi riêng biệt, khu vườn rêu phong và kiến trúc mở giao hòa thiên nhiên.',
    fullDesc: 'Tuyệt tác của sự riêng tư và sang trọng. Nolia Signature Villa sở hữu hồ bơi cá nhân, khu vườn rêu phong kín đáo và bồn tắm đá nguyên khối. Với thiết kế không gian mở tối đa, ranh giới giữa bên trong và thiên nhiên bên ngoài dường như bị xóa nhòa, đánh thức mọi giác quan trong sự tĩnh lặng tuyệt đối.',
    size: '120 m²',
    view: 'Hồ bơi & Vườn rêu riêng',
    bed: '1 Giường King cỡ lớn',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'serenity-deluxe',
    name: 'Serenity Deluxe',
    shortDesc: 'Sự cân bằng hoàn hảo giữa tiện nghi hiện đại và nét mộc mạc, tĩnh tại.',
    fullDesc: 'Căn phòng mang thiết kế tối giản đặc trưng của Nolia, loại bỏ những chi tiết thừa để nhường chỗ cho ánh sáng và không khí lưu thông. Ban công nhỏ xinh ngập tràn ánh nắng là nơi lý tưởng để thưởng thức một tách trà chiều, lắng nghe tiếng lá xạc xào và nhịp đập chậm lại của thời gian.',
    size: '35 m²',
    view: 'Hướng Phố Cổ',
    bed: '2 Giường Đơn hoặc 1 Giường Queen',
    image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2032&auto=format&fit=crop'
  }
];

// --- Page Components ---

const HomePage = ({ navigate }) => {
  return (
    <>
      {/* Redesigned Minimalist Hero Section */}
      <section className="relative pt-40 pb-16 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center z-10 mb-12 animate-fade-in">
          <span className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block font-sans-clean" style={{ color: colors.bronze }}>
            Nơi nghệ thuật tĩnh lặng lên ngôi
          </span>
          <h2 className="font-serif-elegant text-5xl md:text-7xl lg:text-8xl leading-tight" style={{ color: colors.green }}>
            The Art of <br/> <span className="italic">Silence</span>
          </h2>
        </div>
        
        {/* Framed Image layout (Passepartout effect) */}
        <div className="w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] overflow-hidden relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop" 
            alt="Nolia Hoi An Resort" 
            className="w-full h-full object-cover grayscale-[10%] transform transition-transform duration-[20s] group-hover:scale-110"
          />
        </div>
      </section>

      {/* Introduction / The Transition */}
      <section id="about" className="py-24 md:py-36 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-sans-clean" style={{ color: colors.bronze }}>
            Chương Mới Của Di Sản
          </h3>
          <h2 className="font-serif-elegant text-3xl md:text-5xl mb-12 leading-snug">
            Từ tinh hoa Soluna D'Annam,<br/> tái sinh thành sự tĩnh tại nguyên bản.
          </h2>
          <p className="font-sans-clean text-lg leading-relaxed md:px-12 font-light opacity-90">
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

      {/* The Magnolia Collection (Rooms Preview) */}
      <section id="rooms" className="py-24" style={{ backgroundColor: '#EDEAE0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-sans-clean block mb-4" style={{ color: colors.bronze }}>
                Không Gian Lưu Trú
              </span>
              <h2 className="font-serif-elegant text-4xl md:text-5xl">The Magnolia Collection</h2>
            </div>
            <button onClick={() => navigate('rooms')} className="flex items-center text-sm tracking-widest uppercase font-sans-clean group hover:opacity-70 transition-opacity" style={{ color: colors.green }}>
              Xem tất cả hạng phòng <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {roomsData.slice(0, 2).map((room, index) => (
              <div key={room.id} className={`group cursor-pointer ${index === 1 ? 'md:mt-24' : ''}`} onClick={() => navigate('room-details', room.id)}>
                <div className="overflow-hidden relative aspect-[3/4] mb-6">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[10%]"
                  />
                </div>
                <h3 className="font-serif-elegant text-2xl mb-2">{room.name}</h3>
                <p className="font-sans-clean text-sm opacity-80 mb-4 line-clamp-2">
                  {room.shortDesc}
                </p>
                <span className="text-xs tracking-widest uppercase font-sans-clean border-b pb-1" style={{ borderColor: colors.bronze, color: colors.bronze }}>
                  Khám phá
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Dining */}
      <section id="experiences" className="py-24 md:py-36 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
              alt="Spa Experience" 
              className="w-full aspect-square object-cover"
              style={{ borderRadius: '100px 0 100px 0' }}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <span className="text-xs tracking-[0.3em] uppercase font-sans-clean block mb-6" style={{ color: colors.bronze }}>
              Nghệ thuật thư giãn
            </span>
            <h2 className="font-serif-elegant text-4xl md:text-5xl mb-8 leading-tight">
              Thanh lọc Tâm - Thân - Trí
            </h2>
            <p className="font-sans-clean text-lg leading-relaxed font-light opacity-90 mb-8">
              Liệu pháp Spa tại Nolia là sự kế thừa tinh hoa y học cổ truyền và nguyên liệu bản địa. 
              Chúng tôi mời bạn trải nghiệm nghi thức trà đạo tĩnh tâm, hương sen thanh khiết và 
              những cái chạm xoa dịu mọi muộn phiền.
            </p>
            <button 
              onClick={() => navigate('booking')}
              className="px-8 py-3 text-sm tracking-widest uppercase font-sans-clean border hover:bg-opacity-10 transition-colors"
              style={{ borderColor: colors.green, color: colors.green }}
            >
              Đặt Dịch Vụ
            </button>
          </div>
        </div>
      </section>

      {/* Quote / Identity Section */}
      <section className="py-24" style={{ backgroundColor: colors.green, color: colors.bg }}>
        <div className="max-w-4xl mx-auto text-center px-6">
          <svg className="w-12 h-12 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.bronze }}>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-serif-elegant text-2xl md:text-4xl leading-relaxed italic font-light">
            "Trong sự tĩnh lặng, ta tìm thấy chính mình. Nolia không chỉ lưu giữ nghệ thuật thư giãn của Hội An, mà còn nâng tầm nó thành một lẽ sống."
          </p>
          <div className="mt-12">
            <h4 className="font-sans-clean text-sm tracking-[0.2em] uppercase">NOLIA HOI AN</h4>
            <span className="text-xs mt-2 block opacity-70" style={{ color: colors.bronze }}>Since 2024</span>
          </div>
        </div>
      </section>
    </>
  );
};

const RoomsPage = ({ navigate }) => {
  return (
    <div className="pt-36 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-sans-clean" style={{ color: colors.bronze }}>
            Nơi Chốn
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl" style={{ color: colors.green }}>
            Các Hạng Phòng
          </h2>
          <p className="font-sans-clean text-sm mt-6 opacity-80 max-w-2xl mx-auto" style={{ color: colors.green }}>
            Mỗi căn phòng tại Nolia đều được thiết kế tối giản, trân trọng ánh sáng tự nhiên và khoảng không gian tĩnh lặng, mang đến cho bạn giấc ngủ trọn vẹn nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.id} className="group cursor-pointer flex flex-col" onClick={() => navigate('room-details', room.id)}>
              <div className="overflow-hidden relative aspect-[4/5] mb-6">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[10%]"
                />
              </div>
              <h3 className="font-serif-elegant text-2xl mb-2">{room.name}</h3>
              <p className="font-sans-clean text-sm opacity-80 mb-6 flex-grow">
                {room.shortDesc}
              </p>
              <div className="flex justify-between items-center border-t pt-4 mt-auto" style={{ borderColor: 'rgba(82, 98, 72, 0.2)' }}>
                <span className="text-xs font-sans-clean opacity-70">{room.size}</span>
                <span className="text-xs tracking-widest uppercase font-sans-clean group-hover:opacity-70 transition-opacity" style={{ color: colors.bronze }}>
                  Chi tiết
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RoomDetailsPage = ({ room, navigate }) => {
  if (!room) return null;

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate('rooms')}
          className="flex items-center text-xs tracking-widest uppercase font-sans-clean mb-8 hover:opacity-70 transition-opacity"
          style={{ color: colors.bronze }}
        >
          <MoveLeft size={16} className="mr-2" /> Trở lại danh sách
        </button>

        {/* Room Title */}
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] uppercase font-sans-clean block mb-4" style={{ color: colors.bronze }}>
            The Magnolia Collection
          </span>
          <h1 className="font-serif-elegant text-4xl md:text-6xl" style={{ color: colors.green }}>
            {room.name}
          </h1>
        </div>
      </div>

      {/* Room Hero Image */}
      <div className="w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden mb-16">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* Left: Description */}
        <div className="w-full md:w-2/3">
          <h3 className="font-serif-elegant text-2xl mb-6" style={{ color: colors.green }}>Về không gian này</h3>
          <p className="font-sans-clean text-base leading-relaxed opacity-90 mb-8 whitespace-pre-line" style={{ color: colors.green }}>
            {room.fullDesc}
          </p>
        </div>

        {/* Right: Specs & Booking */}
        <div className="w-full md:w-1/3">
          <div className="p-8 border" style={{ borderColor: 'rgba(175, 150, 102, 0.3)', backgroundColor: '#EDEAE0' }}>
            <h3 className="font-serif-elegant text-xl mb-6 border-b pb-4" style={{ color: colors.green, borderColor: 'rgba(82, 98, 72, 0.2)' }}>
              Thông tin phòng
            </h3>
            <ul className="space-y-4 font-sans-clean text-sm mb-8" style={{ color: colors.green }}>
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
              onClick={() => navigate('booking')}
              className="w-full py-4 text-sm tracking-widest uppercase font-sans-clean transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.green, color: colors.bg }}
            >
              Đặt Phòng Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlbumPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526402928504-20a2e7c376b3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2032&auto=format&fit=crop"
  ];

  return (
    <div className="pt-36 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-sans-clean" style={{ color: colors.bronze }}>
            Nét đẹp ngưng đọng
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl" style={{ color: colors.green }}>
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
};

const BookingPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-36 pb-24 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-sans-clean" style={{ color: colors.bronze }}>
            Reservation
          </span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl" style={{ color: colors.green }}>
            Bắt Đầu Hành Trình
          </h2>
          <p className="font-sans-clean text-sm mt-4 opacity-80" style={{ color: colors.green }}>
            Lựa chọn không gian tĩnh lặng của riêng bạn
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-12 text-center animate-fade-in" style={{ border: `1px solid ${colors.bronze}` }}>
            <h3 className="font-serif-elegant text-3xl mb-4" style={{ color: colors.green }}>Cảm ơn bạn.</h3>
            <p className="font-sans-clean text-sm opacity-80 leading-relaxed" style={{ color: colors.green }}>
              Yêu cầu đặt phòng đã được ghi nhận. <br/>
              Quản gia của Nolia sẽ liên hệ với bạn trong thời gian sớm nhất để hoàn tất trải nghiệm.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10 font-sans-clean">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Ngày nhận phòng</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-transparent border-b py-2 focus:outline-none transition-colors"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
              </div>
              <div className="relative">
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
              <div className="relative">
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
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest opacity-70 mb-1 block" style={{ color: colors.green }}>Hạng phòng</label>
                <select 
                  className="w-full bg-transparent border-b py-2 focus:outline-none appearance-none"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                >
                  {roomsData.map(room => (
                    <option key={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="Họ và Tên"
                  className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                    style={{ borderColor: colors.bronze, color: colors.green }}
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    required
                    placeholder="Số điện thoại"
                    className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50"
                    style={{ borderColor: colors.bronze, color: colors.green }}
                  />
                </div>
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Yêu cầu đặc biệt (Không bắt buộc)..."
                  rows="3"
                  className="w-full bg-transparent border-b py-2 focus:outline-none placeholder-opacity-50 resize-none"
                  style={{ borderColor: colors.bronze, color: colors.green }}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 text-sm tracking-widest uppercase font-sans-clean transition-opacity hover:opacity-90 mt-8"
              style={{ backgroundColor: colors.green, color: colors.bg }}
            >
              Gửi Yêu Cầu Đặt Phòng
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function NoliaHoiAn() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // AI Feature State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [userMood, setUserMood] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Navigation Logic
  const navigate = (page, param = null, hash = '') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    
    if (page === 'room-details' && param) {
      setSelectedRoomId(param);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Handle hash scrolling if needed
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // AI Generation Function
  const generateExperience = async () => {
    if (!userMood.trim()) return;
    setIsGenerating(true);
    setAiRecommendation('');
    
    const apiKey = ""; 
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const prompt = `Bạn là một chuyên gia tư vấn trải nghiệm (Concierge) thanh lịch, đậm chất thơ tại khách sạn Nolia Hoi An (trước đây là Soluna D'Annam). Chủ đề của khách sạn là 'The Art of Silence', phong cách tối giản và chữa lành. 
    Khách hàng chia sẻ cảm xúc hiện tại: "${userMood}"
    Dựa trên cảm xúc này, hãy gợi ý một lịch trình thư giãn ngắn gọn nhưng tinh tế tại Nolia Hoi An, bao gồm: 1 loại phòng phù hợp (Heritage Suite hoặc Nolia Signature Villa), 1 liệu pháp Spa thanh lọc, và 1 hoạt động tĩnh tâm (ví dụ: trà đạo, đi dạo vườn rêu).
    Trả lời bằng tiếng Việt với giọng văn xoa dịu, sang trọng, tinh tế. Bố cục rõ ràng, dễ nhìn.`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      if (data.candidates && data.candidates[0]) {
        setAiRecommendation(data.candidates[0].content.parts[0].text);
      } else {
        setAiRecommendation("Xin lỗi, hiện tại không gian tĩnh lặng của chúng tôi đang cần chút thời gian để phản hồi. Vui lòng thử lại sau.");
      }
    } catch (error) {
      setAiRecommendation("Đã có lỗi xảy ra khi kết nối. Mong bạn tĩnh tâm và thử lại nhé.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div 
      className="min-h-screen font-sans selection:bg-[#AF9666] selection:text-white"
      style={{ backgroundColor: colors.bg, color: colors.green }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap');
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
        .font-sans-clean { font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      {/* Fixed Navigation matching the uploaded image */}
      <nav 
        className="fixed w-full z-50 py-6"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
            style={{ color: colors.green }}
          >
            <Menu size={24} />
          </button>

          {/* Left Links (Desktop) */}
          <div className="hidden md:flex space-x-8 text-[13px] tracking-widest uppercase font-sans-clean" style={{ color: colors.green }}>
            <button onClick={() => navigate('home')} className="hover:opacity-70 transition-opacity">Trang Chủ</button>
            <button onClick={() => navigate('album')} className="hover:opacity-70 transition-opacity">Album</button>
          </div>

          {/* Logo (Center) */}
          <div className="text-center z-10 cursor-pointer absolute left-1/2 transform -translate-x-1/2" onClick={() => navigate('home')}>
            <h1 
              className="font-serif-elegant text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium"
              style={{ color: colors.green }}
            >
              NOLIA
            </h1>
            <p 
              className="text-[10px] tracking-[0.3em] uppercase mt-1"
              style={{ color: colors.bronze }}
            >
              Hoi An
            </p>
          </div>

          {/* Right Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center text-[13px] tracking-widest uppercase font-sans-clean">
            <button onClick={() => navigate('home', null, '#experiences')} className="hover:opacity-70 transition-opacity" style={{ color: colors.green }}>Trải Nghiệm</button>
            <button 
              onClick={() => navigate('booking')}
              className="px-6 py-2 border transition-all duration-300 hover:bg-opacity-10"
              style={{ 
                borderColor: colors.bronze, 
                color: colors.bronze,
                backgroundColor: 'transparent'
              }}
            >
              Đặt Phòng
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: colors.bg }}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="font-serif-elegant text-2xl tracking-[0.2em]" style={{ color: colors.green }}>NOLIA</h2>
          <button onClick={() => setMobileMenuOpen(false)} style={{ color: colors.green }}>
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-3/4 space-y-8 font-serif-elegant text-2xl">
          <button onClick={() => navigate('home')} className="hover:opacity-70" style={{ color: colors.green }}>Trang Chủ</button>
          <button onClick={() => navigate('rooms')} className="hover:opacity-70" style={{ color: colors.green }}>Nơi Chốn</button>
          <button onClick={() => navigate('album')} className="hover:opacity-70" style={{ color: colors.green }}>Thư Viện Ảnh</button>
          <button onClick={() => navigate('home', null, '#experiences')} className="hover:opacity-70" style={{ color: colors.green }}>Trải Nghiệm</button>
          <button 
            onClick={() => navigate('booking')}
            className="mt-8 px-8 py-3 text-sm tracking-widest uppercase font-sans-clean"
            style={{ backgroundColor: colors.bronze, color: colors.bg }}
          >
            Đặt Phòng Ngay
          </button>
        </div>
      </div>

      {/* --- Dynamic Page Rendering --- */}
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'rooms' && <RoomsPage navigate={navigate} />}
      {currentPage === 'room-details' && <RoomDetailsPage room={roomsData.find(r => r.id === selectedRoomId)} navigate={navigate} />}
      {currentPage === 'album' && <AlbumPage />}
      {currentPage === 'booking' && <BookingPage />}

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6" style={{ backgroundColor: '#EDEAE0' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif-elegant text-3xl tracking-[0.1em] mb-2" style={{ color: colors.green }}>NOLIA</h2>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: colors.bronze }}>Hoi An</p>
            <p className="font-sans-clean text-sm font-light opacity-80 leading-relaxed">
              The Art of Silence.<br/>
              Nguyên bản từ Soluna D'Annam.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-sans-clean text-xs tracking-widest uppercase mb-6" style={{ color: colors.bronze }}>Liên Hệ</h3>
            <ul className="space-y-4 font-sans-clean text-sm font-light opacity-80">
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
            <h3 className="font-sans-clean text-xs tracking-widest uppercase mb-6" style={{ color: colors.bronze }}>Khám Phá</h3>
            <ul className="space-y-3 font-sans-clean text-sm font-light opacity-80 flex flex-col items-start">
              <li><button onClick={() => navigate('home', null, '#about')} className="hover:text-[#AF9666] transition-colors">Về Chúng Tôi</button></li>
              <li><button onClick={() => navigate('rooms')} className="hover:text-[#AF9666] transition-colors">Nơi Chốn (Phòng)</button></li>
              <li><button onClick={() => navigate('album')} className="hover:text-[#AF9666] transition-colors">Thư Viện Ảnh</button></li>
              <li><button onClick={() => navigate('booking')} className="hover:text-[#AF9666] transition-colors">Đặt Phòng</button></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-sans-clean text-xs tracking-widest uppercase mb-6" style={{ color: colors.bronze }}>Nhận Tin Tức</h3>
            <p className="font-sans-clean text-sm font-light opacity-80 mb-4">
              Đăng ký để nhận những câu chuyện và ưu đãi đặc quyền từ Nolia.
            </p>
            <div className="flex border-b" style={{ borderColor: colors.green }}>
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                className="bg-transparent w-full py-2 outline-none text-sm font-sans-clean placeholder-opacity-50"
                style={{ color: colors.green }}
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

        <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs font-sans-clean font-light opacity-60" style={{ borderColor: 'rgba(82, 98, 72, 0.2)' }}>
          <p>© 2024 Nolia Hoi An. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="hover:underline">Chính sách bảo mật</button>
            <button className="hover:underline">Điều khoản sử dụng</button>
          </div>
        </div>
      </footer>

      {/* AI Floating Button */}
      <button
        onClick={() => setIsAiModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        style={{ backgroundColor: colors.bronze, color: colors.bg }}
      >
        <Sparkles size={24} />
      </button>

      {/* AI Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div 
            className="w-full max-w-lg rounded-xl shadow-2xl p-6 md:p-8 relative max-h-[90vh] flex flex-col"
            style={{ backgroundColor: colors.bg }}
          >
            <button 
              onClick={() => setIsAiModalOpen(false)}
              className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: colors.green }}
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="font-serif-elegant text-2xl mb-2" style={{ color: colors.green }}>
                Thiết Kế Trải Nghiệm Tĩnh Lặng ✨
              </h3>
              <p className="font-sans-clean text-sm opacity-80" style={{ color: colors.green }}>
                Hãy chia sẻ cảm xúc hiện tại, Nolia sẽ gợi ý một hành trình chữa lành dành riêng cho bạn.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              {!aiRecommendation && !isGenerating && (
                <textarea
                  value={userMood}
                  onChange={(e) => setUserMood(e.target.value)}
                  placeholder="Ví dụ: Dạo này tôi khá áp lực với công việc, tôi muốn tìm một không gian thật yên tĩnh để đọc sách và ngủ một giấc thật sâu..."
                  className="w-full h-32 p-4 border rounded-lg focus:outline-none font-sans-clean text-sm resize-none"
                  style={{ 
                    borderColor: colors.bronze, 
                    color: colors.green,
                    backgroundColor: 'transparent'
                  }}
                />
              )}

              {isGenerating && (
                <div className="flex flex-col items-center justify-center h-32 space-y-4">
                  <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: `${colors.bronze} transparent ${colors.bronze} ${colors.bronze}` }}></div>
                  <p className="font-sans-clean text-sm italic opacity-80" style={{ color: colors.green }}>
                    Nolia đang tĩnh tâm thiết kế không gian cho bạn...
                  </p>
                </div>
              )}

              {aiRecommendation && !isGenerating && (
                <div 
                  className="p-4 rounded-lg font-sans-clean text-sm leading-relaxed whitespace-pre-wrap shadow-inner overflow-y-auto max-h-[40vh]"
                  style={{ backgroundColor: 'rgba(82, 98, 72, 0.05)', color: colors.green }}
                >
                  {aiRecommendation}
                </div>
              )}
            </div>

            <div className="pt-2">
              {!aiRecommendation && !isGenerating ? (
                <button
                  onClick={generateExperience}
                  disabled={!userMood.trim()}
                  className="w-full py-3 rounded text-sm tracking-widest uppercase font-sans-clean transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: colors.green, color: colors.bg }}
                >
                  ✨ Nhận Gợi Ý Từ Nolia
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAiRecommendation('');
                    setUserMood('');
                  }}
                  className="w-full py-3 rounded text-sm tracking-widest uppercase font-sans-clean border transition-colors hover:bg-opacity-10"
                  style={{ borderColor: colors.green, color: colors.green }}
                >
                  Thử Một Cảm Xúc Khác
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}