import mongoose from "mongoose";
import viewPost from "../../models/viewPost";

viewPost.statics = {
  create: function (data, cb) {
    const viewPost = new this(data);
    viewPost.save(cb);
  },
};

const viewPostModel = mongoose.model("viewPost", viewPost);
export default viewPostModel;
