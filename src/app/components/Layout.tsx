import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#F4F2EB]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
