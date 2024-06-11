import { Types } from "mongoose";

export type TBooking = {
  room: Types.ObjectId;
  slots: [{ type: Types.ObjectId }];
  user: Types.ObjectId;
  totalAmount: number;
  isConfirmed: boolean;
};
