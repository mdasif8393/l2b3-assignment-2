import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const variantSchema = new Schema({
  type: {
    type: String,
    required: [true, "type is required"],
  },
  value: {
    type: String,
    required: [true, "value is required"],
  },
});

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  iStock: {
    type: Number,
    required: [true, "iStock is required"],
  },
});

export const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  tags: {
    type: [String],
    required: [true, "tags is required"],
  },
  variants: {
    type: [variantSchema],
    required: [true, "variants is required"],
  },
  inventory: {
    type: [inventorySchema],
    required: [true, "inventory is required"],
  },
});

export const Product = model<TProduct>("product", productSchema);
