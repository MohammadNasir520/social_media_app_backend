import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../helpers/paginationHelper';
import { IPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (postData: IPost): Promise<IPost> => {
  const createPost = (await Post.create(postData)).populate('user');
  return createPost;
};

const getAllPosts = async (paginationOptions: any) => {
  const { limit, skip, sortBy, sortOrder } =
    paginationHelper.calculationPagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await Post.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
    .populate('user');

  return result;
};
const getSinglePost = async (id: string) => {
  const result = await Post.find({ _id: id })
    .sort({ createdAt: -1 })
    .populate('user');

  return result;
};
export const PostService = {
  createPost,
  getAllPosts,
  getSinglePost,
};
