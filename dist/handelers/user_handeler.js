"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_name_model_1 = require("../models/user_name_model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user = new user_name_model_1.Add_User_Class();
const create_User = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
        };
        const new_User = yield user.createUser(userData);
        res.json(new_User);
    }
    catch (err) {
        throw new Error("Error in fun add user on handeler file" + err);
    }
});
const auth_User = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = {
            id: req.body.id,
            password: req.body.password,
        };
        yield user.auth(data.id, data.password).then((resp) => {
            if (resp !== null) {
                const token = jsonwebtoken_1.default.sign({ user: resp }, process.env.SECRET_KEY);
                res.json(token);
            }
            else {
                res.send("This user does not exist in the database");
            }
        });
    }
    catch (err) {
        throw new Error("Error from auth handeler" + err);
    }
});
const showAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        yield user.showAllUser().then((resp) => {
            res.status(200);
            res.json(resp);
        });
    }
    catch (err) {
        res.status(401);
        res.json("Invalid token: " + err);
        return;
    }
});
const showSpecficUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        yield user.showSpecficUser(id).then((resp) => {
            res.status(200);
            res.json(resp);
        });
    }
    catch (err) {
        throw new Error("Error happen in fun show specific user" + err);
        return;
    }
});
const userEndPoint = (app) => {
    app.post("/newuser", create_User);
    app.post("/authuser", auth_User);
    app.get("/showalluser", showAllUser);
    app.get("/showspecuser/:id", showSpecficUser);
};
exports.default = userEndPoint;
