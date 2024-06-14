import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { roomRouter } from "../modules/room/room.route";
import { slotRouter } from "../modules/slot/slot.route";
import { bookingRouter } from "../modules/booking/booking.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/rooms",
    route: roomRouter,
  },
  {
    path: "/slots",
    route: slotRouter,
  },
  {
    path: "/bookings",
    route: bookingRouter,
  },
];

moduleRoutes?.forEach((route) => router.use(route.path, route.route));

export default router;
