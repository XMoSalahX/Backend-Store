import { Add_Order_Class } from "../models/order_model";

const order = new Add_Order_Class();
describe("Check order database action: ", () => {
  it('The connection to the endpoint "/tocard" has and database action been successful.', async () => {
    await order
      .To_Card({
        product_ID: 1,
        user_ID: 1,
        quantity: 2,
        status: "Active",
      })
      .then((res) => {
        expect(res).toEqual({
          id: 1,
          product_ID: 1,
          user_ID: 1,
          quantity: 2,
          status: "Active",
        });
      });
  });

  it('The connection to the endpoint "/makeorder" has been successful.', async () => {
    await order.Make_Order(1, 1).then((res) => {
      expect(res).toEqual("Complete");
    });
  });
});
