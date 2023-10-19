import { UseCase } from "../../shared/UseCase";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

export class GetUserByEmail implements UseCase<string, User | null> {
  constructor(private repo: UserRepository) {}

  async execute(email: string): Promise<User | null> {
    const user = await this.repo.getUserByEmail(email);

    return user;
  }
}
