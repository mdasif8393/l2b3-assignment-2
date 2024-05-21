import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;

  const result = await ProductService.createProductToDB(product);

  res.send({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const ProductController = {
  createProduct,
};
