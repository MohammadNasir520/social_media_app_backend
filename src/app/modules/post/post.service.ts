import { IPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (postData: IPost): Promise<IPost> => {
  const createPost = (await Post.create(postData)).populate('user');
  return createPost;
};

const getAllPosts = async () => {
  const result = await Post.find().sort({ createdAt: -1 }).populate('user');

  return result;
};
const getSinglePost = async (id: string) => {
  console.log(id);
  const result = await Post.find({ _id: id })
    .sort({ createdAt: -1 })
    .populate('user');
  console.log(result);
  return result;
};
export const PostService = {
  createPost,
  getAllPosts,
  getSinglePost,
};
