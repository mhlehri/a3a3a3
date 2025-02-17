import { Router } from "express";
import {
  createRoom,
  deleteRoomById,
  getAllRooms,
  getFeaturedRooms,
  getRoomById,
  updateRoomById,
} from "./room.controller";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { roomValidationSchema } from "./room.validation";

const router = Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(roomValidationSchema),
  createRoom
);
router.get("/", getAllRooms);
router.get("/featured", getFeaturedRooms);
router.get("/:id", getRoomById);
router.put("/:id", auth("admin"), updateRoomById);
router.delete("/:id", auth("admin"), deleteRoomById);

export const roomRouter = router;
