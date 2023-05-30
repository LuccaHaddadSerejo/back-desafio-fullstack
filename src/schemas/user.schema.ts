import { z } from 'zod';
import { contactSchemaRes } from './contacts.schemas';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaMultiple = z.array(userSchemaResponse);

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

const userSchemaCompleteRes = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  contacts: z.array(contactSchemaRes),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userSchemaCompleteResMultiple = z.array(userSchemaCompleteRes);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
  userSchemaUpdate,
  userSchemaCompleteRes,
  userSchemaCompleteResMultiple,
};
