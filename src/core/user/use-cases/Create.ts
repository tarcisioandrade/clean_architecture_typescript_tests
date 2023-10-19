import { UseCase } from "../../shared/UseCase";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

export type UserInput = {
  name: string;
  email: string;
  password: string;
};

export class Create implements UseCase<UserInput, User> {
  constructor(private repo: UserRepository) {}

  async execute(input: UserInput): Promise<User> {
    const user = new User(input);

    const newUser = await this.repo.create(user);

    return newUser;
  }
}
