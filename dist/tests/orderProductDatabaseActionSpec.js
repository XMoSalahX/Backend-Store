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
const order_product_1 = require("../models/order_product");
const order = new order_product_1.Order_Product_Class();
describe("Check order product database action: ", () => {
    it("putOnOrderProduct function has been defined", () => {
        expect(order.putOnOrderProduct).toBeDefined();
    });
    it("showAllProductOrder function has been defined", () => {
        expect(order.showAllProductOrder).toBeDefined();
    });
    it('The connection to the endpoint "/allorderproduct" has and database action been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield order.showAllProductOrder().then((res) => {
            expect(res).toEqual([]);
        });
    }));
});
