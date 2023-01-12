import typePostModel from "../../dao/typePost";
import { TypePost } from "../../interfaces/typePost";

const createTypePost = async (_: any, args: TypePost) => {
  try {
    const { name, icon } = args;
    await typePostModel.create({
      name,
      icon,
    });
    return {
      status: true,
      text: "Sucessfull request",
    };
  } catch (err) {
    throw err;
  }
};

const updateTypePost = async (_: any, args: TypePost) => {
  try {
    const { _id, name, icon } = args;
    await typePostModel.findByIdAndUpdate(
      {
        _id,
      },
      {
        name,
        icon,
      }
    );
    return {
      status: true,
      text: "Sucessfull request",
    };
  } catch (err) {
    throw err;
  }
};

const getTypesPost = async () => {
  try {
    const posts = await typePostModel.find({});
    return posts;
  } catch (err) {
    throw err;
  }
};

export { createTypePost, updateTypePost, getTypesPost };
