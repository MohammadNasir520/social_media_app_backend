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

export const UserController = {
  getAllUsers,
};
