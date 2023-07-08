import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IPost = {
  text: string;
  react: number;
  comment: {
    text: string;
    user: Types.ObjectId | IUser;
  };
  image: string;
  user: Types.ObjectId | IUser;
};
