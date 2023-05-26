// import { Request, Response } from 'express';
// import { createContactService } from '../services/Contacts/createContact.service';
// import { listContactsService } from '../services/Contacts/listContacts.service';
// import { TContactUpdateRequest } from '../interfaces/Contacts.interfaces';
// import { updateContactService } from '../services/Contacts/updateContact.service';
// import { deleteContactService } from '../services/Contacts/deleteContact.service';

// const createContactController = async (req: Request, res: Response) => {
//   const userid = res.locals.userId;

//   const newContact = await createContactService(req.body, userid);

//   return res.status(201).json(newContact);
// };

// const listContactsController = async (req: Request, res: Response) => {
//   const userid = res.locals.userId;
//   const Contacts = await listContactsService(userid);

//   return res.json(Contacts);
// };

// const updateContactController = async (req: Request, res: Response) => {
//   const ContactId = req.params.id;
//   const updatedValues: TContactUpdateRequest = req.body;
//   const updateContact = await updateContactService(updatedValues, ContactId);
//   return res.json(updateContact);
// };

// const deleteContactController = async (req: Request, res: Response) => {
//   const ContactId = req.params.id;
//   await deleteContactService(ContactId);
//   res.status(204).send();
// };

// export {
//   createContactController,
//   listContactsController,
//   updateContactController,
//   deleteContactController,
// };
