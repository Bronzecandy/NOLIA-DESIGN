import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomBranch from "./pages/RoomBranch";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Experiences from "./pages/Experiences";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import ServicesIndex from "./pages/ServicesIndex";
import RestaurantBarHub from "./pages/RestaurantBarHub";
import ServiceDetail from "./pages/ServiceDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "rooms", Component: Rooms },
      { path: "rooms/:slug", Component: RoomBranch },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
      { path: "experiences", Component: Experiences },
      { path: "contact", Component: Contact },
      { path: "services", Component: ServicesIndex },
      { path: "services/restaurant-bar", Component: RestaurantBarHub },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "*", Component: NotFound },
    ],
  },
]);
