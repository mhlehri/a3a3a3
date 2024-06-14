import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Room from "../room/room.model";
import { TSlot } from "./slot.interface";
import Slot from "./slot.model";

export const createSlotIntoDB = (data: TSlot) => {
  const isExist = Room.exists({ _id: data.room });
  console.log(isExist, "sui");
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Room does not exist");
  } else {
    const res = Slot.create(data);
    return res;
  }
};
