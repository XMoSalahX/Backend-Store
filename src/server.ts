import express, { Request, Response } from "express";
import userEndPoint from "./handelers/user_handeler";
import productEndpoint from "./handelers/product_handeler";
import orderEndpoint from "./handelers/order_handeler";
import orderProductEndPoint from "./handelers/order_product";

const app: express.Application = express();
const address: string = "http://localhost:8003";

app.use(express.json());
userEndPoint(app);
productEndpoint(app);
orderEndpoint(app);
orderProductEndPoint(app);

app.listen(8003, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
