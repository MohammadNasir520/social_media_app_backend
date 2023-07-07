import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

const signup = async (userData: IUser): Promise<IUser> => {
  const createUser = await User.create(userData);
  return createUser;
};

export const AuthService = {
  signup,
};
