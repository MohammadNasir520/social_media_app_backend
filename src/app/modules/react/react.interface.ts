import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IPost } from '../post/post.interface';

export type IReact = {
  react: 'love' | 'like';
  post: Types.ObjectId | IPost;
  user: Types.ObjectId | IUser;
};
