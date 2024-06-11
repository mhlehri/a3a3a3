import { Router } from "express";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: require("./rooms").default,
  },
];

moduleRoutes?.forEach((route) => router.use(route.path, route.route));

export default router;
