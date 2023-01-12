import mongoose from "mongoose";
import typePostSchema from "../../models/typePost";

typePostSchema.statics = {
  create: function (data, cb) {
    const typePost = new this(data);
    typePost.save(cb);
  },
};

const typePostModel = mongoose.model("typePost", typePostSchema);
export default typePostModel;
