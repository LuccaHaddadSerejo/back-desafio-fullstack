import { Repository } from 'typeorm';
import { Contact } from '../../entities/contacts.entity';
import { AppDataSource } from '../../data-source';
import {
  TContactResponseMultiple,
  TContactResponse,
} from '../../interfaces/contacts.interfaces';
import {
  contactSchemaMultiple,
  contactSchema,
} from '../../schemas/contacts.schemas';
import { AppError } from '../../errors/AppError';

const listContactsService = async (): Promise<TContactResponseMultiple> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Array<Contact> = await contactsRepository.find({
    relations: {
      user: true,
    },
  });

  return contactSchemaMultiple.parse(contacts);
};

const listContactByIdService = async (
  id: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Array<Contact> = await contactRepository.find({
    where: { id: id },
    relations: {
      user: true,
    },
  });

  if (!contact[0]) {
    throw new AppError('Contact not found', 404);
  }

  return contactSchema.parse(contact[0]);
};

export { listContactsService, listContactByIdService };
