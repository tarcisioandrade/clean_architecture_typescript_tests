import { UseCase } from "../../shared/UseCase";
import { UserRepository } from "../repository/UserRepository";

export class Delete implements UseCase<string, void> {
  constructor(private repo: UserRepository) {}

  async execute(id: string) {
    await this.repo.delete(id);
  }
}
