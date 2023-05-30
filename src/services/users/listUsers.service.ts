import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';
import {
  TUserResCompleteMultiple,
  TUserResComplete,
} from '../../interfaces/user.interfaces';
import {
  userSchemaCompleteRes,
  userSchemaCompleteResMultiple,
} from '../../schemas/user.schema';

const listUsersService = async (): Promise<TUserResCompleteMultiple> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await userRepository.find({
    relations: ['contacts'],
  });

  return userSchemaCompleteResMultiple.parse(users);
};

const listUserByIdService = async (
  userId: number
): Promise<TUserResComplete> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await usersRepository.find({
    where: { id: userId },
    relations: { contacts: true },
  });

  return userSchemaCompleteRes.parse(user[0]);
};

export { listUsersService, listUserByIdService };
