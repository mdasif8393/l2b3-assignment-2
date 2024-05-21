import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.createOrderToDb);

router.get("/", OrderController.getAllOrdersFromDB);

export const OrderRoutes = router;
