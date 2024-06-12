import { Router } from "express";
import { createRoom, getRoom } from "./room.controller";

const router = Router();

router.post("/", createRoom);
router.post("/:id", getRoom);

export const roomRouter = router;
