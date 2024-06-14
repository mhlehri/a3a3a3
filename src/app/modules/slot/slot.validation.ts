import { z } from "zod";

const SlotValidationSchema = z.object({
  room: z.string({
    required_error: "Room is required",
  }),
  date: z.string({
    required_error: "Date is required",
  }),
  startTime: z.string({
    required_error: "Start time is required",
  }),
  endTime: z.string({
    required_error: "End time is required",
  }),
  isBooked: z.boolean().optional(),
});

export default SlotValidationSchema;
