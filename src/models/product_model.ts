import { response } from "express";
import { type } from "os";
import Client from "../database";

export type Add_Product_Type = {
  name: string;
  price: number;
  category: number;
};

export type Product_Type = {
  id: number;
  name: string;
  price: number;
  category: number;
};

export class Add_Product_Class {
  async CreateProduct(C: Add_Product_Type) {
    try {
      const sql =
        "INSERT INTO Product(name,price,category) VALUES($1,$2,$3) RETURNING *";
      const conn = await Client.connect();
      const result = await conn.query(sql, [C.name, C.price, C.category]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("Error in add product fun in model." + err);
    }
  }

  async DisplayAllProduct() {
    try {
      const sql = "SELECT * FROM Product";
      const conn = await Client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error("Error in Display product in model" + err);
    }
  }

  async DisplaySpecificProduct(id: number): Promise<Product_Type> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM Product WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error("Error in display specific product in model" + err);
    }
  }
}
