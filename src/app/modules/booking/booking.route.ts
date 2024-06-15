import { Router } from "express";
import { auth } from "../../middlewares/auth";
import {
  addBooking,
  getAllBookings,
  getMyBookings,
} from "./booking.controller";

const router = Router();

router.get("/bookings", auth("admin"), getAllBookings);
router.post("/bookings", auth("user"), addBooking);
router.get("/my-bookings", auth("user"), getMyBookings);

export const bookingRouter = router;
