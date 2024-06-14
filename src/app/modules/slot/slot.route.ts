import { Router } from "express";
import { createSlot } from "./slot.controller";

const router = Router();

router.post("/", createSlot);

export const slotRouter = router;
