import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderToDb = async (order: TOrder) => {
  console.log(order);
  const result = await Order.create(order);
  return result;
};

export const OrderService = {
  createOrderToDb,
};
