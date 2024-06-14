import { Router } from "express";
import { createSlot, getSlotsAvailability } from "./slot.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post("/", auth("admin"), createSlot);
router.get("/availability", getSlotsAvailability);

export const slotRouter = router;
