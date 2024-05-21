import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z.string({
    required_error: "email is required",
  }),
  productId: z.string({
    required_error: "productId is required",
  }),
  price: z.number({
    required_error: "price is required",
  }),
  quantity: z.number({
    required_error: "quantity is required",
  }),
});
