import { Request, Response } from 'express';
import { CommentService } from './comment.service';

const createComment = async (req: Request, res: Response) => {
  const { ...CommentData } = req.body;
  const result = await CommentService.createComment(CommentData);
  res.status(200).json({
    success: true,
    message: 'Comment created successfully',
    data: result,
  });
};

const getAllCommentsOfSinglePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const result = await CommentService.getAllCommentsOfSinglePost(postId);
  res.status(200).json({
    success: true,
    message: 'Comments retrieved  successfully',
    data: result,
  });
};
const getSingleComment = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CommentService.getSingleComment(id);
  res.status(200).json({
    success: true,
    message: 'Comments retrieved  successfully',
    data: result,
  });
};

export const CommentController = {
  createComment,
  getAllCommentsOfSinglePost,
  getSingleComment,
};
