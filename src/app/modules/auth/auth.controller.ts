import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const signup = async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await AuthService.signup(userData);
  res.send(result);
};

export const AuthController = {
  signup,
};
