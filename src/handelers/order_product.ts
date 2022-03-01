import { Application, Request, Response } from "express";
import { Order_Product_Class } from "../models/order_product";
import jwt from "jsonwebtoken";
const productOrder = new Order_Product_Class();

const showALLOrderProduct = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    const allOrderProduct = await productOrder.showAllProductOrder();
    res.json(allOrderProduct);
  } catch (err) {
    throw new Error(
      "Error happen in Show all order product in handeler." + err
    );
  }
};

const orderProductEndPoint = (app: Application) => {
  app.get("/allorderproduct", showALLOrderProduct);
};

export default orderProductEndPoint;
