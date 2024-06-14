import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createSlotIntoDB, getSlotsAvailabilityFromDB } from "./slot.service";

export const createSlot = catchAsync(async (req, res) => {
  const result = await createSlotIntoDB(req.body);
  // console.log(result);

  sendResponse(res, {
    message: "Slots created successfully",
    data: result,
  });
});

export const getSlotsAvailability = catchAsync(async (req, res) => {
  const result = await getSlotsAvailabilityFromDB(req.query);
  // console.log(result);

  if (!result.length) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: result,
    });
    return;
  }

  sendResponse(res, {
    message: "Available slots retrieved successfully",
    data: result,
  });
});
