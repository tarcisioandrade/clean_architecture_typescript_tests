import { UserRepositoryMemory } from "./UserRepositoryMemory";
import { Create, UserInput } from "../core/user/use-cases/Create";
import { Delete } from "../core/user/use-cases/Delete";
import { GetUserByEmail } from "../core/user/use-cases/GetUserByEmail";

const mockUser: UserInput = {
  name: "Fake User",
  email: "fakeuser@email.com",
  password: "123456",
};

const userRepositoryMemory = new UserRepositoryMemory();

test("should create a new user", async () => {
  const createUser = new Create(userRepositoryMemory);

  const user = await createUser.execute(mockUser);

  expect(user.email.value).toBe(mockUser.email);
});

test("should return a user via email", async () => {
  const getUserByEmail = new GetUserByEmail(userRepositoryMemory);

  const user = await getUserByEmail.execute(mockUser.email);

  expect(user?.name).toBe(mockUser.name);
});

test("should delete user via id", async () => {
  const getUserByEmail = new GetUserByEmail(userRepositoryMemory);
  const deleteUser = new Delete(userRepositoryMemory);

  let user = await getUserByEmail.execute(mockUser.email);

  await deleteUser.execute(user?.id!);

  user = await getUserByEmail.execute(mockUser.email);

  expect(user).toBeNull();
});
