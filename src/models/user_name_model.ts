import Client from "../database";
import bcrpt from "bcrypt";

export type Add_User_Type = {
  firstName: string;
  lastName: string;
  password: string;
};

export type Show_User_Type = {
  firstName: string;
  lastName: string;
  password: string;
  id: number;
};
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

export class Add_User_Class {
  async createUser(C: Add_User_Type) {
    try {
      const hash = bcrpt.hashSync(
        C.password + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS as string)
      );
      const sql =
        "INSERT INTO Username(firstName,lastName,password) VALUES($1,$2,$3) RETURNING id";
      const conn = await Client.connect();
      const result = await conn.query(sql, [C.firstName, C.lastName, hash]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error("Error happen when add user in model" + err);
    }
  }

  async auth(id: number, password: string): Promise<string | null> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT password FROM Username WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      if (result.rows.length) {
        const user = result.rows[0];
        if (bcrpt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
          return user;
        }
      }
      return null;
    } catch (err) {
      throw new Error("Error in auth model" + err);
    }
  }

  async showAllUser(): Promise<Show_User_Type[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM Username";
      const result = await conn.query(sql);
      return result.rows;
    } catch (err) {
      throw new Error("Error in show all user model" + err);
    }
  }

  async showSpecficUser(id: number): Promise<Show_User_Type> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM Username WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error("Error in fun show specific user." + err);
    }
  }
}
