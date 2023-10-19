import { User } from "../model/User";

export interface UserRepository {
  create(user: User): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  getUsers(): Promise<User[] | null>;
  getUser(userId: string): Promise<User | null>;
  delete(userId: string): Promise<void>;
}
