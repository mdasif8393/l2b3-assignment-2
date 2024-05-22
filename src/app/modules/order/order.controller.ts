import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrderToDb = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderService.createOrderToDb(order);

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

const getAllOrdersFromDB = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderService.getAllOrdersFromDb(email as string);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
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
  getAllOrdersFromDB,
};
