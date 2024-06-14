import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const createToken = (
  jwtPayload: JwtPayload,
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
