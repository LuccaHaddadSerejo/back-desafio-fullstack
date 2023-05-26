import { z } from 'zod';

const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
});

const contactSchemaMultiple = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaMultiple,
  contactSchemaUpdate,
};
