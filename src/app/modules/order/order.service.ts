import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { orderValidationSchema } from "./order.validation";

const createOrderToDb = async (order: TOrder) => {
  const zodParseOrder = orderValidationSchema.parse(order);
  const result = await Order.create(zodParseOrder);
  return result;
};

const getAllOrdersFromDb = async (email: string) => {
  if (email) {
    const result = await Order.find({ email });
    return result;
  }
  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrderToDb,
  getAllOrdersFromDb,
};
