import { Add_Order_Class } from "../models/order_model";

const order = new Add_Order_Class();

describe("Check all order function: ", () => {
  it("To_Card function has been defined", () => {
    expect(order.To_Card).toBeDefined();
  });

  it("Make_Order function has been defined", () => {
    expect(order.Make_Order).toBeDefined();
  });
});
