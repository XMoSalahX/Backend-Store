import { Order_Product_Class } from "../models/order_product";

const order = new Order_Product_Class();

describe("Check all order product function: ", () => {
  it("putOnOrderProduct function has been defined", () => {
    expect(order.putOnOrderProduct).toBeDefined();
  });

  it("showAllProductOrder function has been defined", () => {
    expect(order.showAllProductOrder).toBeDefined();
  });
});
