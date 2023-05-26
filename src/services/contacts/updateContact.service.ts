import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entity';
import {
  TContactResponse,
  TContactUpdateRequest,
} from '../../interfaces/contacts.interfaces';
import { userSchemaResponse } from '../../schemas/user.schema';

const updateUserService = async (
  data: TContactUpdateRequest,
  id: number
): Promise<TContactResponse> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldData = await userRepository.findOneBy({
    id: id,
  });

  const user: Contact = userRepository.create({
    ...oldData,
    ...data,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default updateUserService;
