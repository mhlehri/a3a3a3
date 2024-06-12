import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import User from "./user.model";

export const createUserIntoDB = async (data: TUser) => {
  const user = await User.create(data);
  return user;
};

export const getUserFromDB = async (data: {
  email: string;
  password: string;
}) => {
  console.log(data);
  const user = await User.findOne({
    email: data.email,
    password: data.password,
  });
  if (user) return user;
  else {
    throw new AppError(404, "User not found");
  }
};
