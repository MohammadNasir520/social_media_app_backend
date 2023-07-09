import { IUser } from './user.interface';
import { User } from './user.model';

const getAllUsers = async () => {
  const getAllUsers = await User.find();
  return getAllUsers;
};

const getSingleUserByEmail = async (email: string) => {
  console.log(email);
  const result = await User.findOne(
    { email: email },
    { password: 0, confirmPassword: 0 }
  );
  console.log(result);
  return result;
};
const updateSingleUser = async (id: string, payload: Partial<IUser>) => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  console.log(result);
  return result;
};
export const UserService = {
  getAllUsers,
  getSingleUserByEmail,
  updateSingleUser,
};
