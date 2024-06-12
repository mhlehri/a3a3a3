import { Router } from "express";
import { createRoom } from "./room.controller";

const router = Router();

router.post("/", createRoom);

export const roomRouter = router;
