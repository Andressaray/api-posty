import { Schema, Types } from "mongoose";

const viewPost = new Schema({
  id_post: {
    type: Types.ObjectId,
    ref: "posts",
  },
  date: {
    type: Date,
  },
});

export default viewPost;
