import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { roomRouter } from "../modules/room/room.route";

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
];

moduleRoutes?.forEach((route) => router.use(route.path, route.route));

export default router;
