import { Router } from "express";
import {
  createRoom,
  deleteRoomById,
  getAllRooms,
  getRoomById,
  updateRoomById,
} from "./room.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post("/", auth("admin"), createRoom);
router.get("/", getAllRooms);
router.get("/:id", getRoomById);
router.put("/:id", auth("admin"), updateRoomById);
router.delete("/:id", deleteRoomById);

export const roomRouter = router;
