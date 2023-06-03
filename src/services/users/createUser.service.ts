import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { TUserRequest, TUserResponse } from '../../interfaces/user.interfaces';

import { userSchemaResponse } from '../../schemas/user.schema';

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { email, name, password, phone } = data;
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    name,
    email,
    phone,
    password,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default createUserService;
