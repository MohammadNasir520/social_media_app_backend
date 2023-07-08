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
export const UserService = {
  getAllUsers,
  getSingleUserByEmail,
};
