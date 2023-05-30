import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contacts.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';
import {
  TContactRequest,
  TContactResponse,
} from '../../interfaces/contacts.interfaces';
import { contactSchema } from '../../schemas/contacts.schemas';

const createContactService = async (
  data: TContactRequest,
  id: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.find({
    where: { id: id },
  });

  if (findUser.length === 0) {
    throw new AppError('User not found', 404);
  }

  const findContact = await contactRepository.findOneBy({
    email: findUser[0].email,
  });

  if (findContact) {
    throw new AppError('Contact already registered', 409);
  }

  const user = findUser[0];

  const contact = contactRepository.create({ ...data, user: user });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
