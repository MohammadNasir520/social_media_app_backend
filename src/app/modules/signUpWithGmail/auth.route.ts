import express from 'express';
import { signUpWithGmailController } from './auth.controller';

const router = express.Router();

router.put('/signupWthGmail', signUpWithGmailController.signUpWithGmail);

export const signUpWithGmailRoutes = router;
