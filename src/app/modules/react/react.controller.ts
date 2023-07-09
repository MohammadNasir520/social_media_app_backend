import { Request, Response } from 'express';
import { ReactService } from './react.service';

const createReact = async (req: Request, res: Response) => {
  const { ...ReactData } = req.body;
  const result = await ReactService.createReact(ReactData);
  res.status(200).json({
    success: true,
    message: 'React created successfully',
    data: result,
  });
};

const getAllReactsOfSinglePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const result = await ReactService.getAllReactsOfSinglePost(postId);
  res.status(200).json({
    success: true,
    message: 'Reacts retrieved  successfully',
    data: result,
  });
};
const getSingleReact = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReactService.getSingleReact(id);
  res.status(200).json({
    success: true,
    message: 'Reacts retrieved  successfully',
    data: result,
  });
};

export const ReactController = {
  createReact,
  getAllReactsOfSinglePost,
  getSingleReact,
};
