import { Types } from "mongoose";

interface ViewPost {
  _id?: Types.ObjectId;
  idPost: Types.ObjectId;
  date: Date
}

export type { ViewPost };
