import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createRoomIntoDB, getRoomByIdFromDB } from "./room.service";

export const createRoom: RequestHandler = catchAsync(async (req, res) => {
  const result = await createRoomIntoDB(req.body);

  sendResponse(res, {
    message: "Room added successfully",
    data: result,
  });
});

export const getRoom: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getRoomByIdFromDB(id);

  sendResponse(res, {
    message: "Room retrieved successfully",
    data: result,
  });
});
