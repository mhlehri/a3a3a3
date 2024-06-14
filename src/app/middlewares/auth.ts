import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const auth = (...requiredRoles: Partial<["admin", "user"]>) =>
  catchAsync((req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);
    if (!token)
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");

    const decoded = jwt.verify(token, config.secret as string) as JwtPayload;

    if (requiredRoles && !requiredRoles.includes(decoded.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    // console.log(decoded);

    req.user = decoded;

    next();
  });
