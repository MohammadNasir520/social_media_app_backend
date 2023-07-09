import { Request, Response } from 'express';
import { PostService } from './post.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createPost = async (req: Request, res: Response) => {
  const { ...postData } = req.body;
  const result = await PostService.createPost(postData);
  res.status(200).json({
    success: true,
    message: 'Post created successfully',
    data: result,
  });
};
const getAllPosts = async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);
  const result = await PostService.getAllPosts(paginationOptions);
  res.status(200).json({
    success: true,
    message: 'Posts retrieved  successfully',
    data: result,
  });
};
const getSinglePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PostService.getSinglePost(id);
  res.status(200).json({
    success: true,
    message: 'Posts retrieved  successfully',
    data: result,
  });
};

export const PostController = {
  createPost,
  getAllPosts,
  getSinglePost,
};
