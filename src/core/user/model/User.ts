import { Post } from "../../post/model/Post";
import { Email } from "../../shared/Email";
import { Entity } from "../../shared/Entity";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  posts?: Post[];
}

export class User extends Entity<IUser> {
  readonly name: string;
  // Trocamos o tipo primitivo "string" para o Objeto de Valor "Email"
  readonly email: Email;
  readonly password: string;
  readonly posts: Post[] = [];

  constructor(user: IUser) {
    super(user);
    this.name = user.name;
    this.email = new Email(user.email);
    this.password = user.password;
    if (user.posts) this.posts = user.posts;
  }
}
