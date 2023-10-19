import { Entity } from "../../shared/Entity";
import { Title } from "../../shared/Title";

export interface IPost {
  id?: string;
  title: string;
  description: string;
  body: string;
  created_at: Date;
  update_at: Date;
  user_id: string;
}

export class Post extends Entity<IPost> {
  readonly title: Title;
  readonly description: string;
  readonly body: string;
  readonly created_at: Date;
  readonly update_at: Date;
  readonly user_id: string;

  constructor(props: IPost) {
    super(props);
    this.title = new Title(props.title);
    this.description = props.description;
    this.body = props.body;
    this.created_at = props.created_at;
    this.update_at = props.update_at;
    this.user_id = props.user_id;
  }
}
