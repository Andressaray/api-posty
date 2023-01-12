import bcrypjs from "bcryptjs";
import { GraphQLError } from "graphql";

import { userModel } from "@dao";
import { generateToken } from "../../util/token";

interface Auth {
  email: string;
  password: string;
}

const login = async (_: any, args: Auth) => {
  const { email, password } = args;
  const user = await userModel.find({
    email,
  });
  const isPassword = bcrypjs.compareSync(password, user[0].password);
  if (!isPassword) {
    throw new GraphQLError("Contrasena o usuario incorrecto", {
      extensions: {
        code: "404",
        argumentName: "email",
      },
    });
  }
  const token = generateToken(user[0]._id);
  return {token};
};

export { login };
