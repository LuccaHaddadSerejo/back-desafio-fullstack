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
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const users: Array<Contact> = await userRepository.find();

  return contactSchemaMultiple.parse(users);
};

const listContactByIdService = async (
  id: number
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: id });

  return contactSchema.parse(contact);
};

export { listContactsService, listContactByIdService };
