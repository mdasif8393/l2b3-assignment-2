import cors from "cors";
import express, { Application } from "express";
import { ProductRoutes } from "./app/modules/product/product.route";

const app: Application = express();

app.use(cors());
app.use(express.json());

// use all route
app.use("/api", ProductRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
