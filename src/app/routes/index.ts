import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { signUpWithGmailRoutes } from '../modules/signUpWithGmail/auth.route';
import { PostRoutes } from '../modules/post/post.route';
import { CommentRoutes } from '../modules/comments/comment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/gmailAuth',
    route: signUpWithGmailRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/posts',
    route: PostRoutes,
  },
  {
    path: '/comments',
    route: CommentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
