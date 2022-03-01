import { Order_Product_Class } from "../models/order_product";

const order = new Order_Product_Class();
describe("Check order product database action: ", () => {
  it("putOnOrderProduct function has been defined", () => {
    expect(order.putOnOrderProduct).toBeDefined();
  });

  it("showAllProductOrder function has been defined", () => {
    expect(order.showAllProductOrder).toBeDefined();
  });

  it('The connection to the endpoint "/allorderproduct" has and database action been successful.', async () => {
    await order.showAllProductOrder().then((res) => {
      expect(res).toEqual([]);
    });
  });
});
