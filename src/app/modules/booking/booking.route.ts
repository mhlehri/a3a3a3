import { Router } from "express";
import { auth } from "../../middlewares/auth";
import {
  addBooking,
  deleteBooking,
  getAllBookings,
  getMyBookings,
  updateBooking,
} from "./booking.controller";

const router = Router();

router.get("/bookings", auth("admin"), getAllBookings);
router.post("/bookings", auth("user"), addBooking);
router.put("/bookings/:id", auth("admin"), updateBooking);
router.delete("/bookings/:id", auth("admin"), deleteBooking);
router.get("/my-bookings", auth("user"), getMyBookings);

export const bookingRouter = router;
