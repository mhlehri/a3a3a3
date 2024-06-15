import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TRoom } from "./room.interface";
import Room from "./room.model";

//? service for adding room
export const createRoomIntoDB = async (data: TRoom) => {
  const res = await Room.create(data);
  return res;
};

//?   service for getting all rooms
export const getAllRoomsFromDB = async () => {
  const res = await Room.find();
  return res;
};

//? service for getting room by id
export const getRoomByIdFromDB = async (id: string) => {
  const res = await Room.findById(id);
  return res;
};

//? service for updating room by id
export const updateRoomByIdIntoDB = async (
  id: string,
  data: Partial<TRoom>
) => {
  const res = await Room.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return res;
};

//? service for deleting room by id
export const deleteRoomByIdFormDB = async (id: string) => {
  const found = await Room.findById(id);
  if (found?.isDeleted)
    throw new AppError(httpStatus.NOT_ACCEPTABLE, `Room is already deleted`);

  const res = await Room.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    {
      new: true,
    }
  );
  return res;
};
