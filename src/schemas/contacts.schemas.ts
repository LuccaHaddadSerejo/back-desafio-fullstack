import { z } from 'zod';

const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  user: z.optional(
    z.object({
      id: z.number(),
    })
  ),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  user: true,
  createdAt: true,
  updatedAt: true,
});

const contactSchemaMultiple = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    user: true,
  })
  .partial();

const contactSchemaRes = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
  contactSchemaUpdate,
  contactSchemaRes,
};
