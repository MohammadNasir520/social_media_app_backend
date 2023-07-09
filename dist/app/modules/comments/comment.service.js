"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_model_1 = require("./comment.model");
const createComment = (CommentData) => __awaiter(void 0, void 0, void 0, function* () {
    const createComment = (yield (yield comment_model_1.Comment.create(CommentData)).populate('user')).populate('post');
    return createComment;
});
const getAllCommentsOfSinglePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.Comment.find({ post: postId })
        .sort({ createdAt: -1 })
        .populate('user')
        .populate('post');
    return result;
});
const getSingleComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield comment_model_1.Comment.find({ _id: id })
        .sort({ createdAt: -1 })
        .populate('user');
    console.log(result);
    return result;
});
exports.CommentService = {
    createComment,
    getAllCommentsOfSinglePost,
    getSingleComment,
};
