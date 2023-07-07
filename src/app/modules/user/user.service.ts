import { User } from './user.model';

const getAllUsers = async () => {
  const getAllUsers = await User.find();
  return getAllUsers;
};
export const UserService = {
  getAllUsers,
};
