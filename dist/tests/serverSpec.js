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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJiJDEwJEd2WFpxSzlaeTVGdmxtUE9rMG1udHVUUUdTYnZsdGtCWTd1YzFveS9GRXBtVXRqQzZiLmlXIn0sImlhdCI6MTY0NTc5NTI2M30.Rc1vfrVFcIWen-mUjg286LABMH05Rv5gRV4BNHdpfd0";
describe("Ckeck all Endpoint status:", function () {
    it('The connection to the endpoint "/newuser" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request.post("/newuser").send({
            firstName: "Mohammed",
            lastName: "Salah",
            password: "Mohammed123#",
        });
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/authuser" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request.post("/authuser");
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/showalluser" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .get("/showalluser")
            .set("Authorization", "Bearer " + token);
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/showspecuser/1" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .get("/showspecuser/1")
            .set("Authorization", "Bearer " + token);
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/newproduct" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .post("/newproduct")
            .set("Authorization", "Bearer " + token)
            .send({
            name: "Samsung A51",
            price: 5500,
            category: 1,
        });
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/allproduct" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .get("/allproduct")
            .set("Authorization", "Bearer " + token);
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/specificproduct/1" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .get("/specificproduct/2")
            .set("Authorization", "Bearer " + token);
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/tocard" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .post("/tocard")
            .set("Authorization", "Bearer " + token)
            .send({
            product_ID: 1,
            user_ID: 1,
            quantity: 2,
            status: "Active",
        });
        expect(response.status).toBe(200);
    }));
    it('The connection to the endpoint "/makeorder" has been successful.', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request
            .post("/makeorder")
            .set("Authorization", "Bearer " + token)
            .send({
            orderId: 1,
        });
        expect(response.status).toBe(200);
    }));
});
