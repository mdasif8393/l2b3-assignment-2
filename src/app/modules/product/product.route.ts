import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/products", ProductController.createProductToDB);

router.get("/products", ProductController.getAllProductsFromDB);

export const ProductRoutes = router;
