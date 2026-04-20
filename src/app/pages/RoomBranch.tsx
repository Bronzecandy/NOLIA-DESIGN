import { useParams } from "react-router";
import { isRoomSlug, isTierSlug } from "../data/rooms";
import RoomDetails from "./RoomDetails";
import RoomTierPage from "./RoomTierPage";
import NotFound from "./NotFound";

/** /rooms/:slug — slug là hạng (essence|deluxe|executive) hoặc id loại phòng */
export default function RoomBranch() {
  const { slug } = useParams();

  if (isTierSlug(slug)) {
    return <RoomTierPage />;
  }
  if (isRoomSlug(slug)) {
    return <RoomDetails />;
  }
  return <NotFound />;
}
