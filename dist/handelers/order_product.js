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
const order_product_1 = require("../models/order_product");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const productOrder = new order_product_1.Order_Product_Class();
const showALLOrderProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const allOrderProduct = yield productOrder.showAllProductOrder();
        res.json(allOrderProduct);
    }
    catch (err) {
        throw new Error("Error happen in Show all order product in handeler." + err);
    }
});
const orderProductEndPoint = (app) => {
    app.get("/allorderproduct", showALLOrderProduct);
};
exports.default = orderProductEndPoint;
