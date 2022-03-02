import { Add_Product_Class } from "../models/product_model";

const product = new Add_Product_Class();

describe("Check all product function: ", () => {
  it("CreateProduct function has been defined", () => {
    expect(product.CreateProduct).toBeDefined();
  });

  it("DisplayAllProduct function has been defined", () => {
    expect(product.DisplayAllProduct).toBeDefined();
  });

  it("DisplaySpecificProduct function has been defined", () => {
    expect(product.DisplaySpecificProduct).toBeDefined();
  });
});
