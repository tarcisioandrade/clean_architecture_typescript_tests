import { UseCase } from "../../shared/UseCase";
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

export class GetUser implements UseCase<string, User | null> {
  constructor(private repo: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.repo.getUser(id);

    return user;
  }
}
