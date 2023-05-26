import { Repository } from 'typeorm';
import { Contact } from '../../entities/contacts.entity';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/AppError';

const deleteContactService = async (
  contactId: number,
  userId: number
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.find({
    where: { id: contactId },
    relations: ['user'],
  });

  if (contact![0].user.id !== userId) {
    throw new AppError("You don't have permission to do this action", 409);
  }

  await contactRepository.remove(contact!);
};

export default deleteContactService;
