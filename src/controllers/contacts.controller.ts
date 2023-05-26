import { Request, Response } from 'express';
import createContactService from '../services/contacts/createContact.service';
import {
  listContactsService,
  listContactByIdService,
} from '../services/contacts/listContacts.service';
import { TContactUpdateRequest } from '../interfaces/contacts.interfaces';
import updateContactService from '../services/contacts/updateContact.service';
import deleteContactService from '../services/contacts/deleteContact.service';

const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body);

  return res.status(201).json(newContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();

  return res.json(contacts);
};

const listContactsByIdController = async (req: Request, res: Response) => {
  const contactId: number = Number(req.params.id);
  const contacts = await listContactByIdService(contactId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const ContactId: number = Number(req.params.id);
  const updatedValues: TContactUpdateRequest = req.body;
  const updateContact = await updateContactService(updatedValues, ContactId);
  return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const ContactId: number = Number(req.params.id);
  await deleteContactService(ContactId);
  res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  listContactsByIdController,
  deleteContactController,
  updateContactController,
};
