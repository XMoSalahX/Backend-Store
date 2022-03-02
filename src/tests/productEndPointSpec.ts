import supertest from "supertest";
import app from "../server";

const request = supertest(app);
describe("Check product EndPoint: ", () => {
  it('The connection to the endpoint "/newproduct" has been successful.', async () => {
    async () => {
      const response = await request.get("/newproduct");
      expect(response.status).toBe(200);
    };
  });
  it('The connection to the endpoint "/allproduct" has been successful.', async () => {
    async () => {
      const response = await request.get("/allproduct");
      expect(response.status).toBe(200);
    };
  });
  it('The connection to the endpoint "/specificproduct/1" has been successful.', async () => {
    async () => {
      const response = await request.get("/specificproduct/1");
      expect(response.status).toBe(200);
    };
  });
});
