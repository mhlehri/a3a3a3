import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  addBookingIntoDB,
  getAllBookingsFromDB,
  getMyBookingsFromDB,
  updateBookingIntoDB,
  deleteBookingFromDB,
} from "./booking.service";
import AppError from "../../errors/AppError";

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
  //   console.log(req.params.id, "req.params.id");
  const result = await updateBookingIntoDB(req.params.id, req.body);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Booking update failed");
  }
  sendResponse(res, {
    message: "Booking updated successfully",
    data: result,
  });
});

export const deleteBooking = catchAsync(async (req, res) => {
  const result = await deleteBookingFromDB(req.params.id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Booking delete failed");
  }
  sendResponse(res, {
    message: "Booking deleted successfully",
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
