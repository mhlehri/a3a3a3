import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import { createRoomIntoDB } from "./room.service";
import catchAsync from "../../utils/catchAsync";

export const createRoom: RequestHandler = catchAsync(async (req, res) => {
  const result = await createRoomIntoDB(req.body);

  sendResponse(res, {
    message: "Room added successfully",
    data: result,
  });
});
