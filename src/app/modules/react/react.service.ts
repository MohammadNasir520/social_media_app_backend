import { IReact } from './react.interface';
import { React } from './react.model';

const createReact = async (ReactData: IReact): Promise<IReact> => {
  const createReact = (
    await (await React.create(ReactData)).populate('user')
  ).populate('post');
  return createReact;
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
