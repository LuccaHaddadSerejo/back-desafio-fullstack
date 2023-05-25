import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from '../controllers/user.controller';
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware';
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware';
import { userSchemaRequest, userSchemaUpdate } from '../schemas/user.schemas';
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware';

const usersRoutes = Router();

usersRoutes.post(
  '',
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUserController
);

usersRoutes.use(ensureAuthMiddleware);

usersRoutes.get('', listUserController);

usersRoutes.patch(
  '/:id',
  ensureIsOwnerMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);

usersRoutes.delete('/:id', ensureIsOwnerMiddleware, deleteUserController);

export { usersRoutes };
