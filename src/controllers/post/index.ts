import postModel from "../../dao/post";
import { Paginate } from "../../interfaces/common";
import { PaginationPostType, Post, ArgsPost } from "../../interfaces/post";

const createPost = async (_: any, args: ArgsPost) => {
  try {
    const {
      title,
      subtitle,
      content,
      state,
      user_id,
      id_type,
      img_background,
    } = args.input;
    await postModel.create({
      title,
      subtitle,
      content,
      state,
      user_id,
      id_type,
      img_background,
    });
    return {
      status: true,
      text: "Sucessfull request",
    };
  } catch (err) {
    throw err;
  }
};

const updatePost = async (_: any, args: Post) => {
  try {
    const {
      _id,
      title,
      subtitle,
      content,
      state,
      user_id,
      id_type,
      img_background,
    } = args;
    await postModel.findByIdAndUpdate(
      {
        _id,
      },
      {
        title,
        subtitle,
        content,
        state,
        user_id,
        id_type,
        img_background,
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

const getPosts = async (_: any, args: Paginate) => {
  try {
    const { page, per_page } = args;
    const posts = await postModel.aggregate([
      {
        $lookup: {
          from: "viewposts",
          localField: "_id",
          foreignField: "id_post",
          as: "postView",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $lookup: {
          from: "typeposts",
          localField: "id_type",
          foreignField: "_id",
          as: "typePost",
        },
      },
      {
        $addFields: {
          views: {
            $size: "$postView",
          },
        },
      },
      {
        $unwind: "$user",
      },
      {
        $unwind: "$typePost",
      },
      {
        $skip: page,
      },
      { $limit: per_page },
    ]);
    return posts;
  } catch (err) {
    throw err;
  }
};

const getPostsType = async (_: any, args: PaginationPostType) => {
  try {
    const { page, per_page, type_id } = args;
    const posts = await postModel
      .find({ id_type: type_id }, {}, { skip: page, limit: per_page })
      .sort({
        createdAt: 1,
      });
    return posts;
  } catch (err) {
    throw err;
  }
};

export { createPost, updatePost, getPosts, getPostsType };
