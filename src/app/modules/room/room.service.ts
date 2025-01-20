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
interface RoomFilters {
  searchTerm?: string;
  capacityFilter?: number;
  priceFilter?: number;
  sortOrder?: "asc" | "desc";
}

export const getAllRoomsFromDB = async (
  filters: RoomFilters,
  page: number,
  limit: number
): Promise<{ rooms: TRoom[]; total: number }> => {
  const { searchTerm, capacityFilter, priceFilter, sortOrder } = filters;

  // Build the query object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = { isDeleted: false };

  if (searchTerm) {
    query.name = { $regex: searchTerm, $options: "i" }; // Case-insensitive search
  }

  if (capacityFilter) {
    query.capacity = { $gte: capacityFilter }; // Filter by minimum capacity
  }

  if (priceFilter) {
    query.pricePerSlot = { $lte: priceFilter }; // Filter by maximum price
  }

  // Sorting
  const sort: { [key: string]: 1 | -1 } =
    sortOrder === "asc"
      ? { pricePerSlot: 1 }
      : sortOrder === "desc"
      ? { pricePerSlot: -1 }
      : {};

  // Pagination
  const skip = (page - 1) * limit;

  const rooms = await Room.find(query).sort(sort).skip(skip).limit(limit);
  const total = await Room.countDocuments(query);
  return { rooms, total };
};

//?   service for getting all rooms
export const getFeaturedRoomsFromDB = async () => {
  const res = await Room.find({
    isDeleted: false,
  })
    .sort({ createdAt: -1 })
    .limit(4);
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
