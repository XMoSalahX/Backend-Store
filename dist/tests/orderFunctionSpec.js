"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = require("../models/order_model");
const order = new order_model_1.Add_Order_Class();
describe("Check all order function: ", () => {
    it("To_Card function has been defined", () => {
        expect(order.To_Card).toBeDefined();
    });
    it("Make_Order function has been defined", () => {
        expect(order.Make_Order).toBeDefined();
    });
});
