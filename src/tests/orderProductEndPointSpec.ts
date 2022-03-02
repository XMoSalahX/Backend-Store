import supertest from "supertest";
import app from "../server";

const request = supertest(app);
describe("Check order product EndPoint: ", () => {
  it('The connection to the endpoint "/allorderproduct" has been successful.', async () => {
    async () => {
      const response = await request.get("/allorderproduct");
      expect(response.status).toBe(200);
    };
  });
});
