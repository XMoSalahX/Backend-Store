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
describe("Check user EndPoint: ", () => {
    it('The connection to the endpoint "/newuser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/newuser");
            expect(response.status).toBe(200);
        });
    }));
    it('The connection to the endpoint "/authuser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/authuser");
            expect(response.status).toBe(200);
        });
    }));
    it('The connection to the endpoint "/showalluser" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/showalluser");
            expect(response.status).toBe(200);
        });
    }));
    it('The connection to the endpoint "/showspecuser/1" has been successful.', () => __awaiter(void 0, void 0, void 0, function* () {
        () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get("/showspecuser/1");
            expect(response.status).toBe(200);
        });
    }));
});
