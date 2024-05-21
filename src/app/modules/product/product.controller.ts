import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProductToDB = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductToDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
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

const getAllProductsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

export const ProductController = {
  createProductToDB,
  getAllProductsFromDB,
};
