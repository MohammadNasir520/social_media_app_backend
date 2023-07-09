import { Post } from '../post/post.model';
import { IReact } from './react.interface';
import { React } from './react.model';

const createReact = async (ReactData: IReact): Promise<IReact | undefined> => {
  const findReact = await React.find({
    post: ReactData.post,
    user: ReactData.user,
  });

  console.log('find reac', findReact);
  if (findReact.length <= 0) {
    const createReact = await (
      await (await React.create(ReactData)).populate('user')
    ).populate('post');

    if (createReact) {
      const findLastRectNumber = await Post.findOne(
        { _id: ReactData.post },
        { react: 1 }
      );
      const totalReact = Number(findLastRectNumber?.react) + 1 || 1;
      const findPostAndUpdateReact = await Post.findOneAndUpdate(
        { _id: ReactData.post },
        { react: totalReact },
        { upsert: true, new: true }
      );
      console.log(findPostAndUpdateReact);
    }

    return createReact;
  }
};

const getAllReactsOfSinglePost = async (postId: string) => {
  const result = await React.find({ post: postId })
    .sort({ createdAt: -1 })
    .populate('user')
    .populate('post');

  return result;
};
const getSingleReact = async (id: string) => {
  console.log(id);
  const result = await React.find({ _id: id })
    .sort({ createdAt: -1 })
    .populate('user');
  console.log(result);
  return result;
};
export const ReactService = {
  createReact,
  getAllReactsOfSinglePost,
  getSingleReact,
};
