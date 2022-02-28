import supertest from "supertest";
import app from "../server";

const request = supertest(app);

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3N3b3JkIjoiJDJiJDEwJEd2WFpxSzlaeTVGdmxtUE9rMG1udHVUUUdTYnZsdGtCWTd1YzFveS9GRXBtVXRqQzZiLmlXIn0sImlhdCI6MTY0NTc5NTI2M30.Rc1vfrVFcIWen-mUjg286LABMH05Rv5gRV4BNHdpfd0";

describe("Ckeck all Endpoint status:", function () {
  it('The connection to the endpoint "/newuser" has been successful.', async () => {
    const response = await request.post("/newuser").send({
      firstName: "Mohammed",
      lastName: "Salah",
      password: "Mohammed123#",
    });
    expect(response.status).toBe(200);
  })

  it('The connection to the endpoint "/authuser" has been successful.', async () => {
    const response = await request.post("/authuser");
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/showalluser" has been successful.', async () => {
    const response = await request
      .get("/showalluser")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/showspecuser/1" has been successful.', async () => {
    const response = await request
      .get("/showspecuser/1")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/newproduct" has been successful.', async () => {
    const response = await request
      .post("/newproduct")
      .set("Authorization", "Bearer " + token)
      .send({
        name: "Samsung A51",
        price: 5500,
        category: 1,
      });
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/allproduct" has been successful.', async () => {
    const response = await request
      .get("/allproduct")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/specificproduct/1" has been successful.', async () => {
    const response = await request
      .get("/specificproduct/2")
      .set("Authorization", "Bearer " + token);
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/tocard" has been successful.', async () => {
    const response = await request
      .post("/tocard")
      .set("Authorization", "Bearer " + token)
      .send({
        product_ID: 1,
        user_ID: 1,
        quantity: 2,
        status: "Active",
      });
    expect(response.status).toBe(200);
  });

  it('The connection to the endpoint "/makeorder" has been successful.', async () => {
    const response = await request
      .post("/makeorder")
      .set("Authorization", "Bearer " + token)
      .send({
        orderId: 1,
      });
    expect(response.status).toBe(200);
  });
});
