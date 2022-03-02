import supertest from "supertest";
import app from "../server";

const request = supertest(app);
describe("Check order EndPoint: ", () => {
  it('The connection to the endpoint "/tocard" has been successful.', async () => {
    async () => {
      const response = await request.get("/tocard");
      expect(response.status).toBe(200);
    };
  });

  it('The connection to the endpoint "/makeorder" has been successful.', async () => {
    async () => {
      const response = await request.get("/makeorder");
      expect(response.status).toBe(200);
    };
  });
});
