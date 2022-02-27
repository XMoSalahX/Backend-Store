import express, { Application, Request, Response } from "express";
import { Add_User_Type, Add_User_Class } from "../models/user_name_model";
import jwt from "jsonwebtoken";
import { json } from "body-parser";

const user = new Add_User_Class();
const create_User = async (req: Request, res: Response) => {
  try {
    const userData: Add_User_Type = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    };
    const new_User = await user.createUser(userData);
    res.json(new_User);
  } catch (err) {
    throw new Error("Error in fun add user on handeler file" + err);
  }
};

const auth_User = async (req: Request, res: Response) => {
  try {
    const data = {
      id: req.body.id,
      password: req.body.password,
    };
    await user.auth(data.id, data.password).then((resp) => {
      if (resp !== null) {
        const token = jwt.sign(
          { user: resp },

          process.env.SECRET_KEY as string
        );
        res.json(token);
      } else {
        res.send("This user does not exist in the database");
      }
    });
  } catch (err) {
    throw new Error("Error from auth handeler" + err);
  }
};

const showAllUser = async (req: Request, res: Response) => {
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    await user.showAllUser().then((resp) => {
      res.status(200);
      res.json(resp);
    });
  } catch (err) {
    res.status(401);
    res.json("Invalid token: " + err);
    return;
  }
};

const showSpecficUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const authHeader: string = req.headers.authorization as string;
    const token: string = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY as string);
    await user.showSpecficUser(id).then((resp) => {
      res.status(200);
      res.json(resp);
    });
  } catch (err) {
    throw new Error("Error happen in fun show specific user" + err);
    return;
  }
};

const userEndPoint = (app: Application) => {
  app.post("/newuser", create_User);
  app.post("/authuser", auth_User);
  app.get("/showalluser", showAllUser);
  app.get("/showspecuser/:id", showSpecficUser);
};

export default userEndPoint;
