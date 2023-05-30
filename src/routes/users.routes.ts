import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUsersController,
  listUserByIdController,
  updateUserController,
} from '../controllers/user.controller';
import { userSchemaRequest, userSchemaUpdate } from '../schemas/user.schema';
import { ensureDataIsValid } from '../middlewares/jwt/ensureDataIsValid.middleware';
import { ensureUserExists } from '../middlewares/user/ensureUserExists.middleware';
import { ensureUserDontExists } from '../middlewares/user/ensureUserDontExists.middleware';
import { ensureAuth } from '../middlewares/jwt/ensureAuth.middleware';
import { ensureIsOwner } from '../middlewares/user/ensureIsOwner.middleware';

const usersRoutes = Router();

usersRoutes.post(
  '',
  ensureDataIsValid(userSchemaRequest),
  ensureUserDontExists,
  createUserController
);

usersRoutes.use(ensureAuth);

usersRoutes.get('', listUsersController);

usersRoutes.get('/:id', ensureUserExists, listUserByIdController);

usersRoutes.patch(
  '/:id',
  ensureUserExists,
  ensureDataIsValid(userSchemaUpdate),
  ensureIsOwner,
  updateUserController
);

usersRoutes.delete(
  '/:id',
  ensureUserExists,
  ensureIsOwner,
  deleteUserController
);

export { usersRoutes };
