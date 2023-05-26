import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
} from '../schemas/user.schema';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserResponseMultiple = z.infer<typeof userSchemaMultiple>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUserResponseMultiple,
};
