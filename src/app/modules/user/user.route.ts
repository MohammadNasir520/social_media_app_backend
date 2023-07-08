import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:email', UserController.getSingleUserByEmail);

export const UserRoutes = router;
