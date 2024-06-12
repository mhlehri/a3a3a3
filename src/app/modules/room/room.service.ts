import { Types } from "mongoose";
import { TRoom } from "./room.interface";
import Room from "./room.model";

export const createRoomIntoDB = async (data: TRoom) => {
  const res = await Room.create(data);
  return res;
};

export const getRoomByIdFromDB = async (id: string) => {
  const res = await Room.findById(id);
  return res;
};
