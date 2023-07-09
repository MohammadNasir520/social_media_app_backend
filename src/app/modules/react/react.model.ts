import { Schema, model } from 'mongoose';
import { IReact } from './react.interface';

const ReactSchema = new Schema<IReact>(
  {
    react: {
      type: String,
      trim: true,
      enum: ['love', 'like'],
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

export const React = model<IReact>('React', ReactSchema);
