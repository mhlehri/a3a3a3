import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createUserIntoDB, getUserFromDB } from "./user.service";

export const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);
  sendResponse(res, {
    message: "User registered successfully",
    data: result,
  });
});

export const getUser = catchAsync(async (req, res) => {
  const result = await getUserFromDB(req.body);
  res.json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    token: result?.token,
    data: result?.result,
  });
});
