import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
} from '../schemas/contacts.schemas';

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactResponseMultiple = z.infer<typeof contactSchemaMultiple>;
type TContactUpdateRequest = DeepPartial<TContactRequest>;

export {
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactResponseMultiple,
};
