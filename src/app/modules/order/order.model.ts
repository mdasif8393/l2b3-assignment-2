import { model, Schema } from "mongoose";
import { Product } from "../product/product.model";
import { OrderModel, TOrder } from "./order.interface";

export const orderSchema = new Schema<TOrder, OrderModel>({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  productId: {
    type: String,
    required: [true, "productId is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
});

// orderSchema.pre("save", async function (next) {
//   const currentOrder = this;
//   console.log(currentOrder);
// });

orderSchema.statics.isProductExists = async function (orderData: TOrder) {
  if (
    !(await Product.findOne({
      _id: orderData.productId,
    }))
  ) {
    throw new Error("Product Not found");
  } else if (
    !(await Product.findOne({
      _id: orderData.productId,
      "inventory.quantity": { $gte: orderData.quantity },
    }))
  ) {
    throw new Error("Insufficient product");
  } else {
    const existingProduct = await Product.findOneAndUpdate(
      {
        _id: orderData.productId,
        "inventory.quantity": { $gte: orderData.quantity },
      },
      { $inc: { "inventory.quantity": -orderData.quantity } }
    );
    return existingProduct;
  }
};

export const Order = model<TOrder, OrderModel>("order", orderSchema);
