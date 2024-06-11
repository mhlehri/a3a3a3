import { Schema, model } from "mongoose";
import { TSlot } from "./slot.interface";

const SlotSchema: Schema = new Schema({
  room: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, required: true },
});

const Slot = model<TSlot>("Slot", SlotSchema);

export default Slot;