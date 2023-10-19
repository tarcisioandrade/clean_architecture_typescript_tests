import { User } from "../core/user/model/User";
import { UserRepository } from "../core/user/repository/UserRepository";

export class UserRepositoryMemory implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }

  async delete(userId: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  async getUser(userId: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId) ?? null;

    return user;
  }

  async getUsers(): Promise<User[] | null> {
    return this.users;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email.value === email) ?? null;
  }
}
