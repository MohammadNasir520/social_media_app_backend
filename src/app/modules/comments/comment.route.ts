import express from 'express';
import { CommentController } from './comment.controller';
const router = express.Router();

router.post('/create-comment', CommentController.createComment);

router.get('/', CommentController.getAllComments);
router.get('/:id', CommentController.getSingleComment);

export const CommentRoutes = router;
