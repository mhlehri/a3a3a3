import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user"] },
  },
  { timestamps: true }
);

export const MUser = model<TUser>("user", userSchema);
