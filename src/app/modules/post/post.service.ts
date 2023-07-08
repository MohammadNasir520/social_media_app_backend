import { IPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (postData: IPost): Promise<IPost> => {
  const createPost = (await Post.create(postData)).populate('user');
  return createPost;
};

export const PostService = {
  createPost,
};
