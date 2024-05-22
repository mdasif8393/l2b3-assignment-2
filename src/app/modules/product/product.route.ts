import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProductToDB);

router.get("/", ProductController.getAllProductsFromDB);

router.get("/:productId", ProductController.getSingleProductFromDB);

router.put("/:productId", ProductController.updateProductToDB);

router.delete("/:productId", ProductController.deleteProductFromDB);

export const ProductRoutes = router;
