import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/products", ProductController.createProductToDB);

router.get("/products", ProductController.getAllProductsFromDB);

router.get("/products/:productId", ProductController.getSingleProductFromDB);

export const ProductRoutes = router;
