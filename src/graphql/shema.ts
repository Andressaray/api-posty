import { login } from "@controllers/auth";
import { createPost, getPosts, getPostsType } from "@controllers/post";
import {
  createTypePost,
  getTypesPost,
  updateTypePost,
} from "@controllers/typePost";
import { createUser, getUsers } from "@controllers/user";
import { createViewPost } from "@controllers/viewPost";

const resolvers = {
  Query: {
    getUsers,
    getPosts,
    getPostsType,
    getTypesPost,
  },
  Mutation: {
    createUser,
    login,
    createPost,
    createTypePost,
    updateTypePost,
    createViewPost,
  },
};

export default resolvers;
