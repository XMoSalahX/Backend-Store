import express, { Application, Request, Response } from "express";
import { Add_Product_Type, Add_Product_Class } from "../models/product_model";
import jwt from "jsonwebtoken";
import { threadId } from "worker_threads";

const product = new Add_Product_Class();
const CreateProduct = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    const productData: Add_Product_Type = {
      name: req.body.name as string,
      price: req.body.price as number,
      category: req.body.category as number,
    };
    const new_Product = await product.CreateProduct(productData);
    res.json(new_Product);
  } catch (err) {
    throw new Error("Error happen in Create product fun in handeler" + err);
  }
};
const DisplayAllProduct = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    const all_product = await product.DisplayAllProduct();
    res.status(200);
    res.json(all_product);
  } catch (err) {
    throw new Error("Error on display all product fun in handeler" + err);
  }
};

const DisplaySpecificProduct = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    await product.DisplaySpecificProduct(id).then((resp) => {
      res.status(200);
      res.json(resp);
    });
  } catch (err) {
    res.status(401);
    throw new Error(
      "Error happen in display specific product in handeler" + err
    );
    return;
  }
};
const productEndpoint = (app: Application) => {
  app.post("/newproduct", CreateProduct);
  app.get("/allproduct", DisplayAllProduct);
  app.get("/specificproduct/:id", DisplaySpecificProduct);
};

export default productEndpoint;
