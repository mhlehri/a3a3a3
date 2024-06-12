import { Router } from "express";
import { createRoom, getAllRooms, getRoomById } from "./room.controller";

const router = Router();

router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);

export const roomRouter = router;
