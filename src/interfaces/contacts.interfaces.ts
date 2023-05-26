import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
  contactSchemaRes,
} from '../schemas/contacts.schemas';

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactResponseMultiple = z.infer<typeof contactSchemaMultiple>;
type TContactUpdateRequest = DeepPartial<TContactRequest>;
type TContactteste1 = z.infer<typeof contactSchemaRes>;

export {
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactResponseMultiple,
  TContactteste1,
};
