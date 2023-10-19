import { Post } from "../model/Post";

export interface PostRepository {
  create(user: Post): Promise<Post>;
  getPosts(): Promise<Post[] | null>;
  getPost(postId: string): Promise<Post | null>;
  delete(postId: string): Promise<void>;
}
