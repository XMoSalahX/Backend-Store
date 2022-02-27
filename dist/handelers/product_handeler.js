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
const product_model_1 = require("../models/product_model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const product = new product_model_1.Add_Product_Class();
const CreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const productData = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        const new_Product = yield product.CreateProduct(productData);
        res.json(new_Product);
    }
    catch (err) {
        throw new Error("Error happen in Create product fun in handeler" + err);
    }
});
const DisplayAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        const all_product = yield product.DisplayAllProduct();
        res.status(200);
        res.json(all_product);
    }
    catch (err) {
        throw new Error("Error on display all product fun in handeler" + err);
    }
});
const DisplaySpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        yield product.DisplaySpecificProduct(id).then((resp) => {
            res.status(200);
            res.json(resp);
        });
    }
    catch (err) {
        res.status(401);
        throw new Error("Error happen in display specific product in handeler" + err);
        return;
    }
});
const productEndpoint = (app) => {
    app.post("/newproduct", CreateProduct);
    app.get("/allproduct", DisplayAllProduct);
    app.get("/specificproduct/:id", DisplaySpecificProduct);
};
exports.default = productEndpoint;
