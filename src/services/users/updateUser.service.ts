import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import {
  TUserResponse,
  TUserUpdateRequest,
} from '../../interfaces/user.interface';
import { userSchemaResponse } from '../../schemas/user.schema';

const updateUserService = async (
  data: TUserUpdateRequest,
  id: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData = await userRepository.findOneBy({
    id: id,
  });

  const user: User = userRepository.create({
    ...oldData,
    ...data,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default updateUserService;
