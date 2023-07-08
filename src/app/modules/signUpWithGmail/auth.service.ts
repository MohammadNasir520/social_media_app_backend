import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

const signUpWithGmail = async (userData: IUser): Promise<IUser | null> => {
  const createUser = await User.findOneAndUpdate(
    { email: userData.email },
    userData,
    { upsert: true, new: true }
  );
  return createUser;
};

export const AuthService = {
  signUpWithGmail,
};
