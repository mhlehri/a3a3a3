import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  addBookingIntoDB,
  getAllBookingsFromDB,
  getMyBookingsFromDB,
  updateBookingIntoDB,
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

export const updateBooking = catchAsync(async (req, res) => {
  console.log(req.params.id, "req.params.id");
  const result = await updateBookingIntoDB(req.params.id, req.body);
  sendResponse(res, {
    message: "Booking updated successfully",
    data: result,
  });
});

export const getMyBookings = catchAsync(async (req, res) => {
  //   console.log(req.user, "req.user.id");
  const result = await getMyBookingsFromDB(req.user.id);
  sendResponse(res, {
    message: "User bookings retrieved successfully",
    data: result,
  });
});
