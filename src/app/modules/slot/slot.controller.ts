import { TRoom } from "./../room/room.interface";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TSlot } from "./slot.interface";
import { createSlotIntoDB } from "./slot.service";
import { string } from "zod";

export const createSlot = catchAsync(async (req, res) => {
  // console.log(startTime, endTime);

  const result = await createSlotIntoDB(req.body);
  // console.log(result);

  // console.log(res, "slot created successfully");

  sendResponse(res, {
    message: "Slots created successfully",
    data: result,
  });
});
