"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const auth_route_2 = require("../modules/signUpWithGmail/auth.route");
const post_route_1 = require("../modules/post/post.route");
const comment_route_1 = require("../modules/comments/comment.route");
const react_route_1 = require("../modules/react/react.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/gmailAuth',
        route: auth_route_2.signUpWithGmailRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/posts',
        route: post_route_1.PostRoutes,
    },
    {
        path: '/comments',
        route: comment_route_1.CommentRoutes,
    },
    {
        path: '/reacts',
        route: react_route_1.ReactRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
