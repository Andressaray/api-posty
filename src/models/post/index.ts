import { Schema, Types } from "mongoose";

const post = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      required: true,
    },
    img_background: {
      type: String,
      required: true,
    },
    id_type: {
      type: Types.ObjectId,
      required: true,
      ref: "typePost",
    },
    user_id: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export default post;
