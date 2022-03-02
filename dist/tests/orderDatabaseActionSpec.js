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
const order_model_1 = require("../models/order_model");
const order = new order_model_1.Add_Order_Class();
describe("Check order database action: ", () => {
    it('Database action to the endpoint "/tocard" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield order
            .To_Card({
            product_ID: 1,
            user_ID: 1,
            quantity: 2,
            status: "Active",
        })
            .then((res) => {
            expect(res).toEqual({
                id: 1,
                product_ID: 1,
                user_ID: 1,
                quantity: 2,
                status: "Active",
            });
        });
    }));
    it('Database action to the endpoint "/makeorder" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield order.Make_Order(1, 1).then((res) => {
            expect(res).toEqual("Complete");
        });
    }));
});
