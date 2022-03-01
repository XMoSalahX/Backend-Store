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
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product_model");
const product = new product_model_1.Add_Product_Class();
describe("Check product database action: ", () => {
    it('The connection to the endpoint "/newproduct" and database action has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield product
            .CreateProduct({
            name: "Samsung A51",
            price: 5500,
            category: 1,
        })
            .then((res) => {
            expect(res).toEqual({
                id: 6,
                name: "Samsung A51",
                price: 5500,
                category: "1",
            });
        });
    }));
    it('The connection to the endpoint "/allproduct" and database action has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield product.DisplayAllProduct().then((res) => {
            expect(res[0].id).toEqual(1);
        });
    }));
    it('The connection to the endpoint "/specificproduct/1" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield product.DisplaySpecificProduct(1).then((res) => {
            expect(res.id).toEqual(1);
        });
        // const response = await request
        //   .get("/specificproduct/2")
        //   .set("Authorization", "Bearer " + token);
        // expect(response.status).toBe(200);
    }));
});
