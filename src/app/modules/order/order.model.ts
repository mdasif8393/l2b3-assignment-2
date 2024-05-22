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

// static method to check product quantity before create a order
orderSchema.statics.isProductExists = async function (orderData: TOrder) {
  // update product inStock field false if quantity <= 0
  await Product.updateMany(
    {
      "inventory.quantity": { $lte: 0 },
    },
    {
      "inventory.inStock": false,
    }
  );
  // if product not found in database throw error
  if (
    !(await Product.findOne({
      _id: orderData.productId,
    }))
  ) {
    throw new Error("Order not found");
  }
  // if product QUANTITY IS NOT SUFFICIENT THROW ERROR
  else if (
    !(await Product.findOne({
      _id: orderData.productId,
      "inventory.quantity": { $gte: orderData.quantity },
    }))
  ) {
    throw new Error("Insufficient quantity available in inventory");
  }
  // decrease product quantity
  else {
    const existingProduct = await Product.findOneAndUpdate(
      {
        $and: [
          { _id: orderData.productId },
          { "inventory.quantity": { $gt: 0 } },
          { "inventory.quantity": { $gte: orderData.quantity } },
        ],
      },
      { $inc: { "inventory.quantity": -orderData.quantity } }
    );
    return existingProduct;
  }
};

export const Order = model<TOrder, OrderModel>("order", orderSchema);
