import supertest from "supertest";
import app from "../server";

const request = supertest(app);
describe("Check user EndPoint: ", () => {
  it('The connection to the endpoint "/newuser" has been successful.', async () => {
    async () => {
      const response = await request.get("/newuser");
      expect(response.status).toBe(200);
    };
  });
  it('The connection to the endpoint "/authuser" has been successful.', async () => {
    async () => {
      const response = await request.get("/authuser");
      expect(response.status).toBe(200);
    };
  });
  it('The connection to the endpoint "/showalluser" has been successful.', async () => {
    async () => {
      const response = await request.get("/showalluser");
      expect(response.status).toBe(200);
    };
  });
  it('The connection to the endpoint "/showspecuser/1" has been successful.', async () => {
    async () => {
      const response = await request.get("/showspecuser/1");
      expect(response.status).toBe(200);
    };
  });
});
