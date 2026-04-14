import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { roomsData } from "../data/rooms";

const colors = {
  bg: '#F4F2EB',
  green: '#526248',
  bronze: '#AF9666',
};

export function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMood, setUserMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExperience = async () => {
    if (!userMood.trim()) return;
    setIsGenerating(true);
    setRecommendation('');

    const apiKey = "";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const prompt = `Bạn là một chuyên gia tư vấn trải nghiệm (Concierge) thanh lịch, đậm chất thơ tại khách sạn Nolia Hoi An (trước đây là Soluna D'Annam). Chủ đề của khách sạn là 'The Art of Silence', phong cách tối giản và chữa lành. 
    Khách hàng chia sẻ cảm xúc hiện tại: "${userMood}"
    Dựa trên cảm xúc này, hãy gợi ý một lịch trình thư giãn ngắn gọn nhưng tinh tế tại Nolia Hoi An, bao gồm: 1 loại phòng phù hợp (${roomsData.map(r => r.name).join(' hoặc ')}), 1 liệu pháp Spa thanh lọc, và 1 hoạt động tĩnh tâm (ví dụ: trà đạo, đi dạo vườn rêu).
    Trả lời bằng tiếng Việt với giọng văn xoa dịu, sang trọng, tinh tế. Bố cục rõ ràng, dễ nhìn.`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      if (data.candidates && data.candidates[0]) {
        setRecommendation(data.candidates[0].content.parts[0].text);
      } else {
        setRecommendation("Xin lỗi, hiện tại không gian tĩnh lặng của chúng tôi đang cần chút thời gian để phản hồi. Vui lòng thử lại sau.");
      }
    } catch {
      setRecommendation("Đã có lỗi xảy ra khi kết nối. Mong bạn tĩnh tâm và thử lại nhé.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_30px_rgba(175,150,102,0.4)] transition-all duration-300 flex items-center justify-center animate-bounce bg-[#AF9666] text-[#F4F2EB] hover:bg-[#526248]"
      >
        <Sparkles size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            className="w-full max-w-lg rounded-xl shadow-2xl p-6 md:p-8 relative max-h-[90vh] flex flex-col"
            style={{ backgroundColor: colors.bg }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 opacity-60 hover:opacity-100 hover:rotate-90 transition-all duration-300"
              style={{ color: colors.green }}
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                Thiết Kế Trải Nghiệm Tĩnh Lặng
              </h3>
              <p className="text-sm opacity-80" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                Hãy chia sẻ cảm xúc hiện tại, Nolia sẽ gợi ý một hành trình chữa lành dành riêng cho bạn.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              {!recommendation && !isGenerating && (
                <textarea
                  value={userMood}
                  onChange={(e) => setUserMood(e.target.value)}
                  placeholder="Ví dụ: Dạo này tôi khá áp lực với công việc, tôi muốn tìm một không gian thật yên tĩnh để đọc sách và ngủ một giấc thật sâu..."
                  className="w-full h-32 p-4 border rounded-lg focus:outline-none text-sm resize-none transition-all duration-300 focus:border-[#526248] focus:shadow-[0_0_0_1px_rgba(82,98,72,0.3)]"
                  style={{
                    fontFamily: "var(--font-body)",
                    borderColor: colors.bronze,
                    color: colors.green,
                    backgroundColor: 'transparent'
                  }}
                />
              )}

              {isGenerating && (
                <div className="flex flex-col items-center justify-center h-32 space-y-4">
                  <div
                    className="w-8 h-8 border-4 rounded-full animate-spin"
                    style={{ borderColor: `${colors.bronze} transparent ${colors.bronze} ${colors.bronze}` }}
                  />
                  <p className="text-sm italic opacity-80" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                    Nolia đang tĩnh tâm thiết kế không gian cho bạn...
                  </p>
                </div>
              )}

              {recommendation && !isGenerating && (
                <div
                  className="p-4 rounded-lg text-sm leading-relaxed whitespace-pre-wrap shadow-inner overflow-y-auto max-h-[40vh]"
                  style={{ fontFamily: "var(--font-body)", backgroundColor: 'rgba(82, 98, 72, 0.05)', color: colors.green }}
                >
                  {recommendation}
                </div>
              )}
            </div>

            <div className="pt-2">
              {!recommendation && !isGenerating ? (
                <button
                  onClick={generateExperience}
                  disabled={!userMood.trim()}
                  className="w-full py-3 rounded text-sm tracking-widest uppercase transition-all duration-500 disabled:opacity-50 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666] disabled:hover:bg-[#526248]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Nhận Gợi Ý Từ Nolia
                </button>
              ) : !isGenerating ? (
                <button
                  onClick={() => {
                    setRecommendation('');
                    setUserMood('');
                  }}
                  className="w-full py-3 rounded text-sm tracking-widest uppercase border transition-all duration-500 hover:bg-[#526248] hover:text-[#F4F2EB] hover:border-[#526248]"
                  style={{ fontFamily: "var(--font-body)", borderColor: colors.green, color: colors.green }}
                >
                  Thử Một Cảm Xúc Khác
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
