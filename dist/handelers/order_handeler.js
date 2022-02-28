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
const order_model_1 = require("../models/order_model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const order = new order_model_1.Add_Order_Class();
const IntoCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const productData = {
            product_ID: req.body.product_ID,
            user_ID: req.body.user_ID,
            quantity: req.body.quantity,
            status: req.body.status,
        };
        const add_product = yield order.To_Card(productData);
        res.json(add_product);
    }
    catch (err) {
        throw new Error("Error in into order in handeler." + err);
    }
});
const Make_Order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const confirm = yield order.Make_Order(req.body.orderId);
        res.status(200);
        res.json(confirm);
    }
    catch (err) {
        throw new Error("Error happen in make order fun in handeler." + err);
    }
});
const orderEndpoint = (app) => {
    app.post("/tocard", IntoCard);
    app.post("/makeorder", Make_Order);
};
exports.default = orderEndpoint;
