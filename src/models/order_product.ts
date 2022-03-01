import Client from "../database";

export class Order_Product_Class {
  async putOnOrderProduct(userID: number, orderId: number) {
    try {
      const sqlAdd =
        "INSERT INTO order_product(userID,ProductID) VALUES($1,$2) ";
      const conn = await Client.connect();
      const sqlcheck = "SELECT * FROM order_product WHERE productid=($1)";
      const doCheck = await conn.query(sqlcheck, [orderId]);
      if (doCheck.rows.length === 0) {
        const addToTable = await conn.query(sqlAdd, [userID, orderId]);
        conn.release();
        return addToTable.rows;
      } else {
        return null;
      }
    } catch (err) {
      throw new Error("Error found in put on order product in model." + err);
    }
  }

  async showAllProductOrder() {
    try {
      const sqlShowAll = "SELECT * FROM order_product";
      const conn = await Client.connect();
      const result = await conn.query(sqlShowAll);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error("Error in show product order in model." + err);
    }
  }
}
