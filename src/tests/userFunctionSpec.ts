import { Add_User_Class } from "../models/user_name_model";

const user = new Add_User_Class();

describe("Check all user function: ", () => {
  it("createUser function has been defined", () => {
    expect(user.createUser).toBeDefined();
  });

  it("auth function has been defined", () => {
    expect(user.auth).toBeDefined();
  });

  it("showAllUser function has been defined", () => {
    expect(user.showAllUser).toBeDefined();
  });

  it("showSpecficUser function has been defined", () => {
    expect(user.showSpecficUser).toBeDefined();
  });
});
