import { z } from "zod";

export const userValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters"),
  phone: z.string({
    required_error: "phone is required",
  }),
  address: z.string({
    required_error: "Address is required",
  }),
  role: z.enum(["admin", "user"]).default("user"),
});

export const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email"),
  password: z.string({
    required_error: "Password is missing",
  }),
});
