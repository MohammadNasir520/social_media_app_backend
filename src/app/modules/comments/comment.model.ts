import { Schema, model } from 'mongoose';
import { IComment } from './comment.interface';

const userSchema = new Schema<IComment>(
  {
    text: {
      type: String,
      trim: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Comment = model<IComment>('Comment', userSchema);
