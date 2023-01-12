import mongoose from "mongoose";
import userSchema from "../../models/user";

userSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
};

const userModel = mongoose.model("users", userSchema);
export default userModel;
