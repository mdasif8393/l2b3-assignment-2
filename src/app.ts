import cors from "cors";
import express, { Application } from "express";
import { OrderRoutes } from "./app/modules/order/order.route";
import { ProductRoutes } from "./app/modules/product/product.route";

const app: Application = express();

app.use(cors());
app.use(express.json());

// use all route
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
