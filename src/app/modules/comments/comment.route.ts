import express from 'express';
import { CommentController } from './comment.controller';
const router = express.Router();

router.post('/create-comment', CommentController.createComment);

router.get('/:id', CommentController.getAllCommentsOfSinglePost);
router.get('/', CommentController.getSingleComment);

export const CommentRoutes = router;
