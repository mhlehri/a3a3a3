import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { addBookingIntoDB } from "./booking.service";

export const getAllBookings = catchAsync(async (req, res) => {});
export const addBooking = catchAsync(async (req, res) => {
  const result = await addBookingIntoDB(req.body);
  sendResponse(res, {
    message: "Booking added successfully",
    data: result,
  });
});
export const getMyBookings = catchAsync(async (req, res) => {});
