import { Request, Response } from 'express';
import { UserService } from './user.service';

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  res.status(200).json({
    success: true,
    message: 'users retrieved successfully',
    data: result,
  });
};

const getSingleUserByEmail = async (req: Request, res: Response) => {
  const email = req.params.email;
  const result = await UserService.getSingleUserByEmail(email);
  res.status(200).json({
    success: true,
    message: 'Post retrieved  successfully',
    data: result,
  });
};

export const UserController = {
  getAllUsers,
  getSingleUserByEmail,
};
