import { Schema, model } from 'mongoose';
import { IPost } from './post.interface';

const userSchema = new Schema<IPost>(
  {
    text: {
      type: String,

      trim: true,
    },
    react: {
      type: Number,
      trim: true,
    },
    comment: {
      type: {
        text: String,
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Post = model<IPost>('Post', userSchema);
