import { Request, Response } from 'express';
import createUserService from '../services/users/createUser.service';
import updateUserService from '../services/users/updateUser.service';
import deleteUserService from '../services/users/deleteUser.service';
import {
  listUserByIdService,
  listUsersService,
} from '../services/users/listUsers.service';
import { TUserUpdateRequest, TUserRequest } from '../interfaces/user.interface';

const createUserController = async (req: Request, res: Response) => {
  const { email, name, password, phone }: TUserRequest = req.body;
  const newUser = await createUserService({ email, name, password, phone });

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

const listUserByIdController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  const user = await listUserByIdService(userId);

  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  const updatedValues: TUserUpdateRequest = req.body;
  const updateUser = await updateUserService(updatedValues, userId);
  return res.json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const UserId = Number(req.params.id);
  await deleteUserService(UserId);
  res.status(204).send();
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
  listUserByIdController,
};
