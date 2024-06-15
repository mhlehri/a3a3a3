import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Room from "../room/room.model";
import { TBooking } from "./booking.interface";
import Booking from "./booking.model";
import Slot from "../slot/slot.model";
import User from "../user/user.model";

export const addBookingIntoDB = async (data: Partial<TBooking>) => {
  const isRoomExists = await Room.findOne({ _id: data.room, isDeleted: false });

  const totalAmount = isRoomExists?.pricePerSlot! * data?.slots?.length!;

  for (let index = 0; index < data?.slots?.length!; index++) {
    const re = await Slot.findOneAndUpdate(
      { _id: data.slots![index], isBooked: false },
      {
        isBooked: true,
      },
      {
        new: true,
      }
    );
    if (!re) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        `Slot \`${data.slots![index]}\` not found or is already booked`
      );
    }
  }

  const isUserExists = await User.exists({ _id: data.user });
  if (!isRoomExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Room not found!");
  }
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }
  const res = (await Booking.create({ totalAmount, ...data })).populate(
    "room slots user"
  );

  return res;
};

export const updateBookingIntoDB = async (
  id: string,
  data: Partial<TBooking>
) => {
  const res = await Booking.findByIdAndUpdate(id, data, { new: true });
  return res;
};

export const deleteBookingFromDB = async (id: string) => {
  const res = await Booking.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return res;
};

export const getMyBookingsFromDB = async (id: string) => {
  const res = await Booking.find({ user: id });
  return res;
};

export const getAllBookingsFromDB = async () => {
  const res = await Booking.find().populate("room slots user");
  return res;
};
