import { Add_User_Class } from "../models/user_name_model";

const user = new Add_User_Class();

describe("Check user database action: ", () => {
  it('The connection to the endpoint "/newuser" and database action has been successful.', async () => {
    const result = await user.createUser({
      firstName: "mos3ad",
      lastName: "Salah",
      password: "Mohammed123#",
    });
    expect(result).toEqual({
      id: 6,
    });
  });

  it('The connection to the endpoint "/authuser" and database action has been successful.', async () => {
    const response = await user.auth(1, "Mohammed123#");
    expect(response).toBeTruthy();
  });

  it('The connection to the endpoint "/showalluser" and database action has been successful.', async () => {
    await user.showAllUser().then((res) => {
      expect(res[0].id).toBe(1);
    });
  });

  it('The connection to the endpoint "/showspecuser/1" has been successful.', async () => {
    await user.showSpecficUser(1).then((res) => {
      expect(res.id).toEqual(1);
    });
  });
});
