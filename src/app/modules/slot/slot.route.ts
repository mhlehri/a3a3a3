import { Router } from "express";
import { createSlot } from "./slot.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post("/", auth("admin"), createSlot);

export const slotRouter = router;
