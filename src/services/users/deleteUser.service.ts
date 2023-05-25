// import { Repository } from 'typeorm';
// import { User } from '../../entities/user.entity';
// import { AppDataSource } from '../../data-source';
// import { AppError } from '../../errors/AppError';

// const deleteUserService = async (userId: string): Promise<void> => {
//   const usersRepository: Repository<User> = AppDataSource.getRepository(User);
//   const user: User | null = await usersRepository.findOneBy({ id: userId });

//   if (!user) {
//     throw new AppError('Usernot found', 404);
//   }

//   await usersRepository.remove(user);
// };

// export { deleteUserService };
