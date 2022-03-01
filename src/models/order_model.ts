import { type } from "os";
import Client from "../database";

export type Add_Order_Type = {
  product_ID: number;
  user_ID: number;
  quantity: number;
  status: string;
};

export class Add_Order_Class {
  async To_Card(P: Add_Order_Type) {
    try {
      const checktable = "SELECT * FROM orders LIMIT 1";
      const conn = await Client.connect();
      const tablerow = await conn.query(checktable);
      let order_id;
      if (tablerow.rows.length === 0) {
        order_id = 1;
      } else {
        const sqlCheckId =
          'SELECT id,status FROM orders WHERE "user_ID"=($1) ORDER BY id DESC LIMIT 1';

        const LastOrder = await conn.query(sqlCheckId, [P.user_ID]);
        if (LastOrder.rows[0].status === "Active") {
          order_id = LastOrder.rows[0].id;
        } else {
          order_id = LastOrder.rows[0].id + 1;
        }
      }
      const insert =
        'INSERT INTO orders(id,"product_ID","user_ID",quantity,status) VALUES($1,$2,$3,$4,$5) RETURNING *';
      const insertProduct = await conn.query(insert, [
        order_id,
        P.product_ID,
        P.user_ID,
        P.quantity,
        P.status,
      ]);
      conn.release();
      return insertProduct.rows[0];
    } catch (err) {
      throw new Error("Error happen in to card fun in model." + err);
    }
  }

  async Make_Order(orderId: number) {
    try {
      const sql =
        "UPDATE orders SET status=('Complete') WHERE id=($1) RETURNING *";
      const conn = await Client.connect();
      const result = await conn.query(sql, [orderId]);
      conn.release();

      return result.rows[0].status;
    } catch (err) {
      throw new Error("Error happen in make order fun in model." + err);
    }
  }
}
