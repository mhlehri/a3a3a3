import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  addBookingIntoDB,
  getMyBookingsFromDB,
  getAllBookingsFromDB,
} from "./booking.service";

export const getAllBookings = catchAsync(async (req, res) => {
  const result = await getAllBookingsFromDB();
  sendResponse(res, {
    message: "All bookings retrieved successfully",
    data: result,
  });
});

export const addBooking = catchAsync(async (req, res) => {
  const result = await addBookingIntoDB(req.body);
  sendResponse(res, {
    message: "Booking added successfully",
    data: result,
  });
});

export const getMyBookings = catchAsync(async (req, res) => {
  console.log(req.user, "req.user.id");
  const result = await getMyBookingsFromDB(req.user.id);
  sendResponse(res, {
    message: "My bookings fetched successfully",
    data: result,
  });
});
