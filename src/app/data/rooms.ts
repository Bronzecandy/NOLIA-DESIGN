export interface Room {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  size: string;
  view: string;
  bed: string;
  image: string;
}

export const roomsData: Room[] = [
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
