import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const signUpWithGmail = async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await AuthService.signUpWithGmail(userData);
  res.send(result);
};

export const signUpWithGmailController = {
  signUpWithGmail,
};
