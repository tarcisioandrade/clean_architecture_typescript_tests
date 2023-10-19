import { Post } from "./core/post/model/Post";
import { User } from "./core/user/model/User";

const user = new User({
  name: "s",
  email: "a@hotmail.com",
  password: "a",
});

const post = new Post({
  body: "asasas",
  description: "aasa",
  created_at: new Date(),
  update_at: new Date(),
  title: "asassasaaaaaaaaaaaaaaaa",
  user_id: "asalsklsk",
});

console.log(user);
console.log(post);
