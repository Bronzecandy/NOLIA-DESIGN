import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { shellGutter, shellMax } from "../shell";
import { tx } from "../typography";

const colors = { green: "#526248", bronze: "#AF9666", cream: "#F4F2EB", sand: "#EDEAE0" };

export default function Contact() {
  const { locale } = useLanguage();
  const [sent, setSent] = useState(false);

  const c =
    locale === "vi"
      ? {
          kicker: "Liên hệ",
          title: "Concierge NOLIA",
          sub: "Đội ngũ sẽ phản hồi trong thời gian làm việc.",
          name: "Họ tên",
          email: "Email",
          phone: "Điện thoại",
          msg: "Nội dung",
          send: "Gửi tin nhắn",
          thanks: "Cảm ơn bạn. Chúng tôi sẽ liên hệ sớm.",
        }
      : {
          kicker: "Contact",
          title: "NOLIA Concierge",
          sub: "Our team replies during business hours.",
          name: "Full name",
          email: "Email",
          phone: "Phone",
          msg: "Message",
          send: "Send message",
          thanks: "Thank you — we will be in touch shortly.",
        };

  return (
    <div className={`pt-20 md:pt-24 pb-20 min-h-screen ${shellGutter}`} style={{ backgroundColor: colors.cream }}>
      <div className={`${shellMax} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}>
        <div>
          <span className={tx.eyebrowAccent} style={{ fontFamily: "var(--font-accent)", color: colors.bronze }}>
            {c.kicker}
          </span>
          <h1 className={tx.pageTitle} style={{ fontFamily: "var(--font-heading)", color: colors.green }}>
            {c.title}
          </h1>
          <p className={`${tx.body} mb-10`} style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            {c.sub}
          </p>

          <div className="space-y-5 text-base" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
            <p className="flex gap-3 items-start opacity-90">
              <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: colors.bronze }} />
              <span>Đường Hai Bà Trưng, Cẩm Châu, Hội An, Quảng Nam</span>
            </p>
            <p className="flex gap-3 items-center opacity-90">
              <Phone size={18} className="shrink-0" style={{ color: colors.bronze }} />
              <span>+84 235 3xxx xxx</span>
            </p>
            <p className="flex gap-3 items-center opacity-90">
              <Mail size={18} className="shrink-0" style={{ color: colors.bronze }} />
              <span>hello@noliahoian.com</span>
            </p>
          </div>

          <div className="mt-10 aspect-[4/3] w-full max-w-lg border overflow-hidden" style={{ borderColor: "rgba(82,98,72,0.15)" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
              alt="Nolia contact"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>

        <div className="border p-6 md:p-10 text-base" style={{ borderColor: "rgba(82,98,72,0.15)", backgroundColor: colors.sand }}>
          {sent ? (
            <p className="text-center py-12 text-base" style={{ fontFamily: "var(--font-body)", color: colors.green }}>
              {c.thanks}
            </p>
          ) : (
            <form
              className="space-y-6"
              style={{ fontFamily: "var(--font-body)", color: colors.green }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 block mb-1">{c.name}</label>
                <input required className="w-full bg-transparent border-b py-2.5 outline-none focus:border-[#526248] text-base" style={{ borderColor: colors.bronze }} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 block mb-1">{c.email}</label>
                <input type="email" required className="w-full bg-transparent border-b py-2.5 outline-none focus:border-[#526248] text-base" style={{ borderColor: colors.bronze }} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 block mb-1">{c.phone}</label>
                <input className="w-full bg-transparent border-b py-2.5 outline-none focus:border-[#526248] text-base" style={{ borderColor: colors.bronze }} />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest opacity-70 block mb-1">{c.msg}</label>
                <textarea rows={4} className="w-full bg-transparent border-b py-2.5 outline-none resize-none focus:border-[#526248] text-base" style={{ borderColor: colors.bronze }} />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-xs tracking-[0.18em] uppercase bg-[#526248] text-[#F4F2EB] hover:bg-[#AF9666] transition-colors"
              >
                {c.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
