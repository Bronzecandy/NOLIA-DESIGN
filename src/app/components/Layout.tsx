import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { AiConcierge } from "./AiConcierge";

export function Layout() {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#AF9666] selection:text-white"
      style={{ backgroundColor: '#F4F2EB', color: '#526248' }}
    >
      <Navigation />
      <Outlet />
      <Footer />
      <AiConcierge />
    </div>
  );
}
