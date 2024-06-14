import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  room: { type: String, ref: "Room" },
  slots: [{ type: String, ref: "Slot" }],
  user: { type: String, ref: "User" },
  totalAmount: Number,
  isConfirmed: Boolean,
});

const Booking = model<TBooking>("Booking", bookingSchema);

export default Booking;
