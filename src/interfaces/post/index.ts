import { Types } from "mongoose";

interface Post {
  _id?: Types.ObjectId;
  title: string;
  subtitle: string;
  state: boolean;
  content: string;
  img_background: string;
  id_type: Types.ObjectId;
  user_id: Types.ObjectId;
}

interface ArgsPost {
  input: Post
}

interface PaginationPostType {
  per_page: number;
  page: number;
  type_id: Types.ObjectId;
}

export type { Post, PaginationPostType, ArgsPost };
