import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaMultiple,
  userSchemaCompleteRes,
  userSchemaCompleteResMultiple,
} from '../schemas/user.schema';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserResponseMultiple = z.infer<typeof userSchemaMultiple>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;
type TUserResComplete = z.infer<typeof userSchemaCompleteRes>;
type TUserResCompleteMultiple = z.infer<typeof userSchemaCompleteResMultiple>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
  TUserResponseMultiple,
  TUserResComplete,
  TUserResCompleteMultiple,
};
