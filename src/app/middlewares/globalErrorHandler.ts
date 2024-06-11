import { Request, Response, NextFunction } from "express";
import { TErrorMessages } from "../interface/error";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessages: TErrorMessages = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  res.json({
    success: false,
    message: "",
    errorMessages: "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export default globalErrorHandler;
