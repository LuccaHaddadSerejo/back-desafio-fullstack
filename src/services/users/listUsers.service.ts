import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';
import {
  TUserResponseMultiple,
  TUserResponse,
} from '../../interfaces/user.interfaces';
import {
  userSchemaMultiple,
  userSchemaResponse,
} from '../../schemas/user.schema';

const listUsersService = async (): Promise<TUserResponseMultiple> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await userRepository.find();

  return userSchemaMultiple.parse(users);
};

const listUserByIdService = async (userId: number): Promise<TUserResponse> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    id: userId,
  });

  return userSchemaResponse.parse(user);
};

export { listUsersService, listUserByIdService };
