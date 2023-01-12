import { Types } from "mongoose";

interface TypePost {
  _id?: Types.ObjectId;
  name: string;
  icon: string;
}

export type { TypePost };
