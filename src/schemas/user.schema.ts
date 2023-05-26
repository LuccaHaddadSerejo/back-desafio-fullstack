import { z } from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
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

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
  userSchemaUpdate,
};
