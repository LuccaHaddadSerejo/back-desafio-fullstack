// import { Repository } from 'typeorm';
// import { TContactsResponse } from '../../interfaces/contacts.interfaces';
// import { User } from '../../entities/user.entity';
// import { Contacts } from '../../entities/contact.entity';
// import { AppError } from '../../errors/AppError';
// import { AppDataSource } from '../../data-source';
// import { multipleUsersSchema } from '../../schemas/users.schemas';

// const listUsersService = async (): Promise<TUsersResponse> => {
//   const userRepository: Repository<User> = AppDataSource.getRepository(User);
//   const users: Array<User> = await userRepository.find();

//   return multipleUsersSchema.parse(users);
// };

// const listUserByIdService = async (userId: string): Promise<TUsersResponse> => {
//   const usersRepository: Repository<User> = AppDataSource.getRepository(User);

//   const user: User | null = await usersRepository.findOneBy({
//     id: userId,
//   });

//   if (!user) {
//     throw new AppError('User not found', 404);
//   }

//   const users: User[] = await usersRepository.find({
//     where: {
//       user: user,
//     },
//   });

//   return usersSchemaResponse.parse(users);
// };

// export { listusersService };
