import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entity';
import {
  TContactResponse,
  TContactUpdateRequest,
} from '../../interfaces/contacts.interfaces';
import { contactSchema } from '../../schemas/contacts.schemas';
import { AppError } from '../../errors/AppError';

const updateUserService = async (
  data: TContactUpdateRequest,
  contactId: number,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldData = await contactRepository.findOneBy({
    id: contactId,
  });

  const findContact = await contactRepository.find({
    where: { id: contactId },
    relations: ['user'],
  });

  if (findContact![0].user.id !== userId) {
    throw new AppError("You don't have permission to do this action", 409);
  }

  const contact: Contact = contactRepository.create({
    ...oldData,
    ...data,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export default updateUserService;
