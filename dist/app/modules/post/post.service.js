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
exports.PostService = void 0;
const paginationHelper_1 = require("../../helpers/paginationHelper");
const post_model_1 = require("./post.model");
const createPost = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    const createPost = (yield post_model_1.Post.create(postData)).populate('user');
    return createPost;
});
const getAllPosts = (paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculationPagination(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const result = yield post_model_1.Post.find()
        .sort(sortConditions)
        .skip(skip)
        .limit(limit)
        .populate('user');
    return result;
});
const getSinglePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.Post.find({ _id: id })
        .sort({ createdAt: -1 })
        .populate('user');
    return result;
});
exports.PostService = {
    createPost,
    getAllPosts,
    getSinglePost,
};
