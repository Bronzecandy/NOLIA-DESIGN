import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Experiences from "./pages/Experiences";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "rooms", Component: Rooms },
      { path: "rooms/:roomId", Component: RoomDetails },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
      { path: "experiences", Component: Experiences },
      { path: "*", Component: NotFound },
    ],
  },
]);
