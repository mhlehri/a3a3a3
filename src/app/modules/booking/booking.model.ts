import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  room: { type: Schema.Types.ObjectId, ref: "rooms" },
  slots: [{ type: Schema.Types.ObjectId, ref: "slots" }],
  user: { type: Schema.Types.ObjectId, ref: "users" },
  totalAmount: Number,
  isConfirmed: Boolean,
});

const Booking = model<TBooking>("bookings", bookingSchema);

export default Booking;
