import { Router } from 'express';
import { ensureAuth } from '../middlewares/jwt/ensureAuth.middleware';
import { ensureDataIsValid } from '../middlewares/jwt/ensureDataIsValid.middleware';
import {
  createContactController,
  deleteContactController,
  listContactsByIdController,
  listContactsController,
  updateContactController,
} from '../controllers/contacts.controller';
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from '../schemas/contacts.schemas';

const contactsRoutes = Router();

contactsRoutes.use(ensureAuth);

contactsRoutes.post(
  '',
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);

contactsRoutes.get('', listContactsController);

contactsRoutes.get('', listContactsByIdController);

contactsRoutes.patch(
  '/:id',
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);

contactsRoutes.delete('/:id', deleteContactController);

export { contactsRoutes };
