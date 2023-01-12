import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { config } from 'dotenv';
config()

const SECRET_KEY = process.env.SECRET_KEY || '';

const generateToken = (id: Types.ObjectId) => {
  const token: string = jwt.sign(
    {
      id: id.toString()
    },
    SECRET_KEY,
    { expiresIn: '48h' }
  );
  return token;
};

const decodeToken = (token: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, data) => {
      if (err) {
        return reject(err);
      }
      // @ts-ignore
      resolve(data.id);
    });
  });
};

export { generateToken, decodeToken };
