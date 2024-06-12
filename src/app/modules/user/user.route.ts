import { Router } from "express";
import { createUser, getUser } from "./user.controller";

const router = Router();

router.post("/signup", createUser);
router.post("/login", getUser);

export const userRouter = router;
