import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/AppError';

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await userRepository.remove(user);
};

export default deleteUserService;
