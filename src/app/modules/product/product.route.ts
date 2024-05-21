import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/products", ProductController.createProductToDB);

router.get("/products", ProductController.getAllProductsFromDB);

router.get("/products/:productId", ProductController.getSingleProductFromDB);

router.put("/products/:productId", ProductController.updateProductToDB);

router.delete("/products/:productId", ProductController.deleteProductFromDB);

export const ProductRoutes = router;
