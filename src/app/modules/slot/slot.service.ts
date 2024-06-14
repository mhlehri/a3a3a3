import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Room from "../room/room.model";
import { TSlot } from "./slot.interface";
import Slot from "./slot.model";

export const createSlotIntoDB = async (data: TSlot) => {
  const duration = 60;
  const { room, date, startTime, endTime } = data;

  const startTimeDuration = Number(startTime?.split(":")[0]) * duration;
  const endTimeDuration = Number(endTime?.split(":")[0]) * duration;

  let currentStartTime = startTimeDuration;
  let currentEndTime = startTimeDuration + 60;

  function convertMinutesToTime(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(mins).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  }

  const NumOfSlot = (endTimeDuration - startTimeDuration) / duration;
  for (let index = 0; index < NumOfSlot; index++) {
    await Slot.create({
      startTime: convertMinutesToTime(currentStartTime + index * duration),
      endTime: convertMinutesToTime(currentEndTime + index * duration),
      date,
      room,
    });
  }

  const res = await Slot.find({ room });
  if (!res) {
    throw new AppError(httpStatus.NOT_FOUND, "Failed to Create Slot");
  }
  return res;
};

export const getSlotsAvailabilityFromDB = async () => {
  const query = {
    isBooked: false,
  };
  const res = await Slot.find(query);
  return res;
};
