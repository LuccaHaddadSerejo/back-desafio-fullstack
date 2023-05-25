import { Router } from 'express';
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from '../controllers/Contacts.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware';
import {
  ContactsSchemaRequest,
  ContactsSchemaUpdate,
} from '../schemas/Contacts.schemas';
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware';

const ContactsRoutes = Router();

ContactsRoutes.use(ensureAuthMiddleware);

ContactsRoutes.post(
  '',
  ensureDataIsValidMiddleware(ContactsSchemaRequest),
  createContactsController
);

ContactsRoutes.get('', ensureIsOwnerMiddleware, listContactsController);

ContactsRoutes.patch(
  '/:id',
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(ContactsSchemaUpdate),
  updateContactsController
);

ContactsRoutes.delete(
  '/:id',
  ensureIsOwnerMiddleware,
  deleteContactsController
);

export { ContactsRoutes };
