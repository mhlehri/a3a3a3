import { Router } from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoomById,
} from "./room.controller";

const router = Router();

router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", updateRoomById);

export const roomRouter = router;
