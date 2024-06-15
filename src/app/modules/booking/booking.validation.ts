import { z } from "zod";

export const bookingValidationSchema = z.object({
  room: z.string({
    required_error: "Room reference is required",
  }),
  slots: z.array(
    z.string({
      required_error: "Slot reference is required",
    })
  ),
  user: z.string({
    required_error: "User reference is required",
  }),
  totalAmount: z
    .number({
      required_error: "Total amount is required",
    })
    .nonnegative("Total amount must be a non-negative number"),
  date: z.string({
    required_error: "Date is required",
  }),
  isConfirmed: z.enum(["confirmed", "unconfirmed"]).default("unconfirmed"),
  isDeleted: z.boolean().default(false),
});
