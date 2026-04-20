import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { roomsData } from "../data/rooms";
import { useLanguage } from "../context/LanguageContext";

const colors = {
  bg: "#F4F2EB",
  green: "#526248",
  bronze: "#AF9666",
};

function localSuggest(mood: string, locale: "vi" | "en"): string {
  const m = mood.toLowerCase();
  const pick = (() => {
    if (/pool|bơi|swim|hồ/i.test(m)) return roomsData.find((r) => r.id === "essence-pool-view") ?? roomsData[0];
    if (/vườn|garden/i.test(m)) return roomsData.find((r) => r.id === "deluxe-garden-view") ?? roomsData[0];
    if (/kênh|canal|river/i.test(m)) return roomsData.find((r) => r.id === "deluxe-canal-view") ?? roomsData[0];
    if (/rộng|lớn|family|suite|executive/i.test(m)) return roomsData.find((r) => r.id === "executive") ?? roomsData[0];
    if (/stress|áp|căng|mệt|burn|busy/i.test(m)) return roomsData.find((r) => r.id === "executive") ?? roomsData[0];
    const idx = mood.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    return roomsData[idx % roomsData.length];
  })();

  const room = pick.name[locale];
  const spa = locale === "vi" ? "Liệu trình Spa nhẹ (60’), tập trung hơi thở và ấn lưng chậm." : "A gentle 60’ spa ritual focused on breath and slow back work.";
  const calm =
    locale === "vi"
      ? "Hoạt động tĩnh: trà chiều tại Main Pool Bar hoặc đi bộ chậm quanh khu vườn nội khu."
      : "A quiet moment: afternoon tea at Main Pool Bar or a slow walk through the inner gardens.";

  if (locale === "vi") {
    return `Gợi ý nhanh (không dùng API — logic từ khóa):\n\n1) Phòng: ${room} — phù hợp với mô tả của bạn.\n2) Spa: ${spa}\n3) ${calm}\n\nKhi cần gợi ý sâu hơn, NOLIA có thể bật mô hình AI (Gemini) bằng biến môi trường VITE_GEMINI_API_KEY.`;
  }
  return `Quick suggestion (keyword logic, no API):\n\n1) Room: ${room} — aligned with what you shared.\n2) Spa: ${spa}\n3) ${calm}\n\nFor richer prose, enable the Gemini model via VITE_GEMINI_API_KEY.`;
}

export function AiConcierge() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [userMood, setUserMood] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const copy =
    locale === "vi"
      ? {
          title: "Gợi ý phòng & lịch trình",
          sub: "Chia sẻ cảm xúc — NOLIA gợi ý phòng, spa và khoảnh khắc tĩnh.",
          ph: "Ví dụ: muốn ngủ sâu, tránh ồn, thích nhìn hồ bơi...",
          go: "Nhận gợi ý",
          again: "Thử cảm xúc khác",
          wait: "Đang soạn gợi ý cho bạn...",
        }
      : {
          title: "Room & rhythm suggestions",
          sub: "Share how you feel — we suggest a room, spa, and a quiet beat.",
          ph: "e.g. deep sleep, less noise, love pool views...",
          go: "Get suggestions",
          again: "Try another mood",
          wait: "Composing your quiet itinerary...",
        };

  const generateExperience = async () => {
    if (!userMood.trim()) return;
    setIsGenerating(true);
    setRecommendation("");

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

    if (!apiKey) {
      await new Promise((r) => setTimeout(r, 450));
      setRecommendation(localSuggest(userMood, locale));
      setIsGenerating(false);
      return;
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const roomList = roomsData.map((r) => r.name[locale]).join(", ");

    const prompt =
      locale === "vi"
        ? `Bạn là concierge NOLIA Hoi An, chủ đề The Art of Silence. Khách viết: "${userMood}". Gợi ý ngắn gọn: 1 phòng trong [${roomList}], 1 spa, 1 hoạt động tĩnh. Giọng nhẹ, sang.`
        : `You are NOLIA Hoi An concierge (The Art of Silence). Guest says: "${userMood}". Briefly suggest: 1 room from [${roomList}], 1 spa, 1 quiet activity. Warm, refined tone.`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });
      const data = await response.json();
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        setRecommendation(data.candidates[0].content.parts[0].text);
      } else {
        setRecommendation(localSuggest(userMood, locale));
      }
    } catch {
      setRecommendation(localSuggest(userMood, locale));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] p-3.5 rounded-full shadow-xl hover:scale-105 hover:shadow-[0_0_24px_rgba(175,150,102,0.35)] transition-all duration-300 flex items-center justify-center bg-[#AF9666] text-[#F4F2EB] hover:bg-[#526248]"
        aria-label="Concierge"
      >
        <Sparkles size={22} />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg shadow-2xl p-6 md:p-8 relative max-h-[90vh] flex flex-col" style={{ backgroundColor: colors.bg }}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 opacity-60 hover:opacity-100 hover:rotate-90 transition-all duration-300"
              style={{ color: colors.green }}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <div className="text-center mb-5">
              <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
                {copy.title}
              </h3>
              <p className="text-xs opacity-80" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                {copy.sub}
              </p>
            </div>

            <div className="flex-1 overflow-y-auto mb-4">
              {!recommendation && !isGenerating ? (
                <textarea
                  value={userMood}
                  onChange={(e) => setUserMood(e.target.value)}
                  placeholder={copy.ph}
                  className="w-full h-28 p-3 border focus:outline-none text-sm resize-none transition-all duration-300 focus:border-[#526248]"
                  style={{
                    fontFamily: "var(--font-body)",
                    borderColor: colors.bronze,
                    color: colors.green,
                    backgroundColor: "transparent",
                  }}
                />
              ) : null}

              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-28 space-y-3">
                  <div className="w-7 h-7 border-[3px] rounded-full animate-spin" style={{ borderColor: `${colors.bronze} transparent ${colors.bronze} ${colors.bronze}` }} />
                  <p className="text-xs italic opacity-80" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
                    {copy.wait}
                  </p>
                </div>
              ) : null}

              {recommendation && !isGenerating ? (
                <div
                  className="p-4 text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto max-h-[40vh]"
                  style={{ fontFamily: "var(--font-body)", backgroundColor: "rgba(82, 98, 72, 0.05)", color: colors.green }}
                >
                  {recommendation}
                </div>
              ) : null}
            </div>

            <div className="pt-1">
              {!recommendation && !isGenerating ? (
                <button
                  type="button"
                  onClick={generateExperience}
                  disabled={!userMood.trim()}
                  className="w-full py-3 text-[10px] tracking-[0.2em] uppercase transition-all duration-500 disabled:opacity-50 bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666] disabled:hover:bg-[#526248]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {copy.go}
                </button>
              ) : !isGenerating ? (
                <button
                  type="button"
                  onClick={() => {
                    setRecommendation("");
                    setUserMood("");
                  }}
                  className="w-full py-3 text-[10px] tracking-[0.2em] uppercase border transition-all duration-500 hover:bg-[#526248] hover:text-[#F4F2EB] hover:border-[#526248]"
                  style={{ fontFamily: "var(--font-body)", borderColor: colors.green, color: colors.green }}
                >
                  {copy.again}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
