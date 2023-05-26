import { Repository } from 'typeorm';
import { Contact } from '../../entities/contacts.entity';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/AppError';

const deleteContactService = async (id: number): Promise<void> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact = await userRepository.findOneBy({ id: id });

  await userRepository.remove(contact!);
};

export default deleteContactService;
