import { TRoom } from "./room.interface";
import Room from "./room.model";

export const createRoomIntoDB = async (data: TRoom) => {
  const room = await Room.create(data);
  return room;
};
