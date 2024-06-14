import { TRoom } from "./../room/room.interface";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TSlot } from "./slot.interface";
import { createSlotIntoDB, getSlotsAvailabilityFromDB } from "./slot.service";
import { string } from "zod";

export const createSlot = catchAsync(async (req, res) => {
  const result = await createSlotIntoDB(req.body);
  // console.log(result);

  sendResponse(res, {
    message: "Slots created successfully",
    data: result,
  });
});

export const getSlotsAvailability = catchAsync(async (req, res) => {
  const result = await getSlotsAvailabilityFromDB();
  // console.log(result);

  sendResponse(res, {
    message: "Slots created successfully",
    data: result,
  });
});
