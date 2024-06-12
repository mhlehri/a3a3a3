import { Types } from "mongoose";

export type TBooking = {
  room: Types.ObjectId;
  slots: [Types.ObjectId];
  user: Types.ObjectId;
  totalAmount: number;
  isConfirmed: boolean;
};
