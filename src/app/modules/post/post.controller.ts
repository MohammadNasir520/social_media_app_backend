import { Request, Response } from 'express';
import { PostService } from './post.service';

const createPost = async (req: Request, res: Response) => {
  const { ...postData } = req.body;
  const result = await PostService.createPost(postData);
  res.status(200).json({
    success: true,
    message: 'Post created successfully',
    data: result,
  });
};

export const PostController = {
  createPost,
};
