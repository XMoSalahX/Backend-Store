"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_handeler_1 = __importDefault(require("./handelers/user_handeler"));
const product_handeler_1 = __importDefault(require("./handelers/product_handeler"));
const order_handeler_1 = __importDefault(require("./handelers/order_handeler"));
const app = (0, express_1.default)();
const address = "http://localhost:8003";
app.use(express_1.default.json());
(0, user_handeler_1.default)(app);
(0, product_handeler_1.default)(app);
(0, order_handeler_1.default)(app);
app.listen(8003, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
