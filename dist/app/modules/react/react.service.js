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
exports.ReactService = void 0;
const post_model_1 = require("../post/post.model");
const react_model_1 = require("./react.model");
const createReact = (ReactData) => __awaiter(void 0, void 0, void 0, function* () {
    const findReactOfSingleUser = yield react_model_1.React.find({
        post: ReactData.post,
        user: ReactData.user,
    });
    console.log('find React', findReactOfSingleUser.length);
    if (findReactOfSingleUser.length <= 0) {
        const createReact = yield (yield (yield react_model_1.React.create(ReactData)).populate('user')).populate('post');
        if (createReact) {
            const findLastRectNumber = yield post_model_1.Post.findOne({ _id: ReactData.post }, { react: 1 });
            const totalReact = Number(findLastRectNumber === null || findLastRectNumber === void 0 ? void 0 : findLastRectNumber.react) + 1 || 1;
            const findPostAndUpdateReact = yield post_model_1.Post.findOneAndUpdate({ _id: ReactData.post }, { react: totalReact }, { upsert: true, new: true });
            console.log(findPostAndUpdateReact);
        }
        return createReact;
    }
});
const getAllReactsOfSinglePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield react_model_1.React.find({ post: postId })
        .sort({ createdAt: -1 })
        .populate('user')
        .populate('post');
    return result;
});
const getSingleReact = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield react_model_1.React.find({ _id: id })
        .sort({ createdAt: -1 })
        .populate('user');
    console.log(result);
    return result;
});
exports.ReactService = {
    createReact,
    getAllReactsOfSinglePost,
    getSingleReact,
};
