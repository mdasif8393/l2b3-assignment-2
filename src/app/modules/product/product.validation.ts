import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string({
    required_error: "type is required",
  }),
  value: z.string({
    required_error: "value is required",
  }),
});

const inventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "quantity is required",
  }),
  inStock: z.boolean({
    required_error: "inStock is required",
  }),
});

const productValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "description is required",
  }),
  price: z.number({
    required_error: "price is required",
  }),
  category: z.string({
    required_error: "category is required",
  }),
  tags: z.array(z.string()).nonempty(),
  variants: z.array(variantValidationSchema).nonempty(),
  inventory: inventoryValidationSchema,
});

const updateVariantValidationSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const updateInventoryValidationSchema = z.object({
  quantity: z.number().optional(),
  inStock: z.boolean().optional(),
});

export const updateProductValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(updateVariantValidationSchema).optional(),
  inventory: updateInventoryValidationSchema.optional(),
});

export default productValidationSchema;
