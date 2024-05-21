import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrderToDb = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderService.createOrderToDb(order);
    console.log(result);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

export const OrderController = {
  createOrderToDb,
};
