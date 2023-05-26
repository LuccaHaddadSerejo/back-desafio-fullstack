import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entity';
import { TUserRequest, TUserResponse } from '../../interfaces/user.interfaces';
import { contactSchema } from '../../schemas/contacts.schemas';

const createContactService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const { name, email, phone } = data;
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = contactRepository.create({
    name,
    email,
    phone,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
