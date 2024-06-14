import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createSlotIntoDB } from "./slot.service";

export const createSlot = catchAsync(async (req, res) => {
  const result = await createSlotIntoDB(req.body);
  console.log(res, "slot created successfully");
  sendResponse(res, {
    message: "User registered successfully",
    data: result,
  });
});
