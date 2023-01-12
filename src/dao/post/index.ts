import mongoose from "mongoose";
import postSchema from "../../models/post";

postSchema.statics = {
  create: function (data, cb) {
    const post = new this(data);
    post.save(cb);
  },
};

const postModel = mongoose.model("posts", postSchema);
export default postModel;
