import { Router } from 'express';
import {
  createContactsController,
  deleteContactsController,
  listContactsController,
  updateContactsController,
} from '../controllers/contacts.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware';
import {
  ContactsSchemaRequest,
  ContactsSchemaUpdate,
} from '../schemas/contacts.schemas';
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware';

const contactsRoutes = Router();

contactsRoutes.use(ensureAuthMiddleware);

contactsRoutes.post(
  '',
  ensureDataIsValidMiddleware(ContactsSchemaRequest),
  createContactsController
);

contactsRoutes.get('', ensureIsOwnerMiddleware, listContactsController);

contactsRoutes.patch(
  '/:id',
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(ContactsSchemaUpdate),
  updateContactsController
);

contactsRoutes.delete(
  '/:id',
  ensureIsOwnerMiddleware,
  deleteContactsController
);

export { contactsRoutes };
