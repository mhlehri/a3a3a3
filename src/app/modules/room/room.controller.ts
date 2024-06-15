import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createRoomIntoDB,
  deleteRoomByIdFormDB,
  getAllRoomsFromDB,
  getRoomByIdFromDB,
  updateRoomByIdIntoDB,
} from "./room.service";

//? This function is used to handle the request to create a room
export const createRoom: RequestHandler = catchAsync(async (req, res) => {
  const result = await createRoomIntoDB(req.body);

  sendResponse(res, {
    message: "Room added successfully",
    data: result,
  });
});

//? This function is used to handle the request to get all rooms
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

//? This function is used to handle the request to get a room by id
export const getRoomById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getRoomByIdFromDB(id);

  sendResponse(res, {
    message: "Room retrieved successfully",
    data: result,
  });
});

//? This function is used to handle the request to update a room by id
export const updateRoomById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await updateRoomByIdIntoDB(id, data);

  sendResponse(res, {
    message: "Room updated successfully",
    data: result,
  });
});

//? This function is used to handle the request to delete a room by id
export const deleteRoomById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await deleteRoomByIdFormDB(id);

  sendResponse(res, {
    message: "Room deleted successfully",
    data: result,
  });
});
