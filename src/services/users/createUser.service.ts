import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces';
import { hash } from 'bcryptjs';
import { userSchemaResponse } from '../../schemas/users.schema';
import { AppError } from '../../errors/AppError';

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { email, name, password, phone } = data;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError('User already exists', 409);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
