import { RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {
  createRoomIntoDB,
  deleteRoomByIdFormDB,
  getAllRoomsFromDB,
  getFeaturedRoomsFromDB,
  getRoomByIdFromDB,
  updateRoomByIdIntoDB,
} from "./room.service";
import AppError from "../../errors/AppError";

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
  const {
    searchTerm,
    capacityFilter,
    priceFilter,
    sortOrder,
    currentPage,
    roomsPerPage,
  } = req.query;

  const page = Number(currentPage) || 1;
  const limit = Number(roomsPerPage) || 6;

  const filters = {
    searchTerm: searchTerm?.toString() || "",
    capacityFilter: capacityFilter ? Number(capacityFilter) : 0,
    priceFilter: priceFilter ? Number(priceFilter) : 0,
    sortOrder:
      sortOrder === "asc" || sortOrder === "desc"
        ? (sortOrder as "asc" | "desc")
        : undefined,
  };

  const result = await getAllRoomsFromDB(filters, page, limit);

  if (!result?.rooms?.length)
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

//? This function is used to handle the request to get all rooms
export const getFeaturedRooms: RequestHandler = catchAsync(async (req, res) => {
  const result = await getFeaturedRoomsFromDB();

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

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: [],
    });
    return;
  }

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

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to update");
  }

  sendResponse(res, {
    message: "Room updated successfully",
    data: result,
  });
});

//? This function is used to handle the request to delete a room by id
export const deleteRoomById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await deleteRoomByIdFormDB(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete");
  }

  sendResponse(res, {
    message: "Room deleted successfully",
    data: result,
  });
});
