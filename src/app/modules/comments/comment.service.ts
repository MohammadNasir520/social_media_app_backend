import { IComment } from './comment.interface';
import { Comment } from './comment.model';

const createComment = async (CommentData: IComment): Promise<IComment> => {
  const createComment = (
    await (await Comment.create(CommentData)).populate('user')
  ).populate('post');
  return createComment;
};

const getAllCommentsOfSinglePost = async (postId: string) => {
  const result = await Comment.find({ post: postId })
    .sort({ createdAt: -1 })
    .populate('user')
    .populate('post');

  return result;
};
const getSingleComment = async (id: string) => {
  console.log(id);
  const result = await Comment.find({ _id: id })
    .sort({ createdAt: -1 })
    .populate('user');
  console.log(result);
  return result;
};
export const CommentService = {
  createComment,
  getAllCommentsOfSinglePost,
  getSingleComment,
};
