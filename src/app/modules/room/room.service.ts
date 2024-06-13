import { Types } from "mongoose";
import { TRoom } from "./room.interface";
import Room from "./room.model";

export const createRoomIntoDB = async (data: TRoom) => {
  const res = await Room.create(data);
  return res;
};

export const getAllRoomsFromDB = async () => {
  const res = await Room.find();
  return res;
};

export const getRoomByIdFromDB = async (id: string) => {
  const res = await Room.findById(id);
  return res;
};

export const updateRoomByIdIntoDB = async (
  id: string,
  data: Partial<TRoom>
) => {
  const res = await Room.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return res;
};

export const deleteRoomByIdFormDB = async (id: string) => {
  const res = await Room.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    {
      new: true,
    }
  );
  return res;
};
