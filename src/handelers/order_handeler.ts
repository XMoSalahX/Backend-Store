import express, { Application, Request, Response } from "express";
import { Add_Order_Type, Add_Order_Class } from "../models/order_model";
import jwt from "jsonwebtoken";
import { Order_Product_Class } from "../models/order_product";

const productOrder = new Order_Product_Class();

const order = new Add_Order_Class();

const IntoCard = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    const productData: Add_Order_Type = {
      product_ID: req.body.product_ID as number,
      user_ID: req.body.user_ID as number,
      quantity: req.body.quantity as number,
      status: req.body.status as string,
    };
    const add_product = await order.To_Card(productData);
    res.json(add_product);
  } catch (err) {
    throw new Error("Error in into order in handeler." + err);
  }
};

const Make_Order = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    const confirm = await order.Make_Order(req.body.orderId, req.body.userID);
    res.status(200);
    res.json(confirm);
    productOrder.putOnOrderProduct(req.body.userID, req.body.orderId);
  } catch (err) {
    throw new Error("Error happen in make order fun in handeler." + err);
  }
};

const orderEndpoint = (app: Application) => {
  app.post("/tocard", IntoCard);
  app.post("/makeorder", Make_Order);
};

export default orderEndpoint;
