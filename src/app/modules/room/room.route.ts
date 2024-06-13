import { Router } from "express";
import {
  createRoom,
  deleteRoomById,
  getAllRooms,
  getRoomById,
  updateRoomById,
} from "./room.controller";

const router = Router();

router.post("/", createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", updateRoomById);
router.delete("/:id", deleteRoomById);

export const roomRouter = router;
