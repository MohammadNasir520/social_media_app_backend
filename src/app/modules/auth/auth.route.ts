import express from 'express';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post('/signup', AuthController.signup);

export const AuthRoutes = router;
