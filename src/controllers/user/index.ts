import bcrypjs from 'bcryptjs'

import { userModel } from "../../dao";
import { Paginate } from "../../interfaces/common";
import { User } from "../../interfaces/user";

const createUser = async (_: any, args: User) => {
  try {
    const { name, email, icon, password } = args;
    const passwordHash = bcrypjs.hashSync(password, 10)
    await userModel.create({
      email,
      icon,
      password: passwordHash,
      name,
    });
    return {
      status: true,
      text: "Sucessfull request",
    };
  } catch (err) {
    throw err;
  }
};

const getUsers = async (_: any, args: Paginate) => {
  try {
    const { page, per_page } = args;
    const users = await userModel
      .find({}, {}, { skip: page, limit: per_page })
      .sort({
        createdAt: 1,
      });
    return users;
  } catch (err) {
    throw err;
  }
};

export { createUser, getUsers };
