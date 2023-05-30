import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';

const ensureUserDontExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepositoy = AppDataSource.getRepository(User);

  const userEmail: string = req.body.email;

  const findUser = await userRepositoy.findOne({
    where: {
      email: userEmail,
    },
  });

  if (findUser) {
    throw new AppError('User already exists', 409);
  }

  return next();
};

export { ensureUserDontExists };
