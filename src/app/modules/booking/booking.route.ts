import { Router } from "express";
import { auth } from "../../middlewares/auth";
import {
  addBooking,
  getAllBookings,
  getMyBookings,
} from "./booking.controller";

const router = Router();

router.get("/", auth("admin"), getAllBookings);
router.post("/", auth("user"), addBooking);
router.get("/my-bookings", auth("user"), getMyBookings);

export const bookingRouter = router;
