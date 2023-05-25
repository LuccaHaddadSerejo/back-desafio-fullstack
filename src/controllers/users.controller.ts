import { Request, Response } from 'express';
import { createUserService } from '../services/Users/createUser.service';
import { listUsersService } from '../services/Users/listUsers.service';
import {
  TUserUpdateRequest,
  TUserRequest,
} from '../interfaces/Users.interfaces';
import { updateUserService } from '../services/Users/updateUser.service';
import { deleteUserService } from '../services/Users/deleteUser.service';

const createUserController = async (req: Request, res: Response) => {
  const { email, name, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ email, name, password, phone });

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const userid = res.locals.userId;
  const Users = await listUsersService(userid);

  return res.json(Users);
};

const updateUserController = async (req: Request, res: Response) => {
  const UserId = req.params.id;
  const updatedValues: TUserUpdateRequest = req.body;
  const updateUser = await updateUserService(updatedValues, UserId);
  return res.json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const UserId = req.params.id;
  await deleteUserService(UserId);
  res.status(204).send();
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
