import { Add_Product_Class } from "../models/product_model";

const product = new Add_Product_Class();

describe("Check product database action: ", () => {
  it('The connection to the endpoint "/newproduct" and database action has been successful.', async () => {
    await product
      .CreateProduct({
        name: "Samsung A51",
        price: 5500,
        category: 1,
      })
      .then((res) => {
        expect(res).toEqual({
          id: 6,
          name: "Samsung A51",
          price: 5500,
          category: "1",
        });
      });
  });

  it('The connection to the endpoint "/allproduct" and database action has been successful.', async () => {
    await product.DisplayAllProduct().then((res) => {
      expect(res[0].id).toEqual(1);
    });
  });

  it('The connection to the endpoint "/specificproduct/1" has been successful.', async () => {
    await product.DisplaySpecificProduct(1).then((res) => {
      expect(res.id).toEqual(1);
    });
    // const response = await request
    //   .get("/specificproduct/2")
    //   .set("Authorization", "Bearer " + token);
    // expect(response.status).toBe(200);
  });
});
