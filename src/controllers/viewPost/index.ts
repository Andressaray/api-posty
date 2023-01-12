import viewPostModel from "../../dao/viewPost";
import { ViewPost } from "../../interfaces/viewPost";

const createViewPost = async (_: any, args: ViewPost) => {
  try {
    const { idPost } = args;
    await viewPostModel.create({
      id_post: idPost,
      date: new Date(),
    });
    return {
      status: true,
      text: "Sucessfull request",
    };
  } catch (err) {
    throw err;
  }
};

export { createViewPost };
