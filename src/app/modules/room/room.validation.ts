import { z } from "zod";

export const roomValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  roomNo: z
    .number({
      required_error: "Room number is required",
    })
    .int("Room number must be an integer"),
  floorNo: z
    .number({
      required_error: "Floor number is required",
    })
    .int("Floor number must be an integer"),
  capacity: z
    .number({
      required_error: "Capacity is required",
    })
    .int("Capacity must be an integer"),
  pricePerSlot: z
    .number({
      required_error: "Price per slot is required",
    })
    .nonnegative("Price per slot must be a non-negative number"),
  amenities: z.array(
    z.string({
      required_error: "Amenities are required",
    })
  ),
  isDeleted: z.boolean().default(false),
});
