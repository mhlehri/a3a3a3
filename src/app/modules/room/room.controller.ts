import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createRoomIntoDB,
  getAllRoomsFromDB,
  getRoomByIdFromDB,
} from "./room.service";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

export const createRoom: RequestHandler = catchAsync(async (req, res) => {
  const result = await createRoomIntoDB(req.body);

  sendResponse(res, {
    message: "Room added successfully",
    data: result,
  });
});

export const getAllRooms: RequestHandler = catchAsync(async (req, res) => {
  const result = await getAllRoomsFromDB();

  if (!result.length)
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: result,
    });

  sendResponse(res, {
    message: "Room retrieved successfully",
    data: result,
  });
});

export const getRoomById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getRoomByIdFromDB(id);

  sendResponse(res, {
    message: "Room retrieved successfully",
    data: result,
  });
});
