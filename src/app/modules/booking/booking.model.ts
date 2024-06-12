import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>({
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  slots: [{ type: Schema.Types.ObjectId, ref: "Slot" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  totalAmount: Number,
  isConfirmed: Boolean,
});

const Booking = model<TBooking>("Booking", bookingSchema);

export default Booking;
