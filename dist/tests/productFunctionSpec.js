"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product_model");
const product = new product_model_1.Add_Product_Class();
describe("Check all product function: ", () => {
    it("CreateProduct function has been defined", () => {
        expect(product.CreateProduct).toBeDefined();
    });
    it("DisplayAllProduct function has been defined", () => {
        expect(product.DisplayAllProduct).toBeDefined();
    });
    it("DisplaySpecificProduct function has been defined", () => {
        expect(product.DisplaySpecificProduct).toBeDefined();
    });
});
