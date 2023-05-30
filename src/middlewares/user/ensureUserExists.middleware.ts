import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';

const ensureUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepositoy = AppDataSource.getRepository(User);

  const userId: number = Number(req.params.id);

  const user = await userRepositoy.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return next();
};

export { ensureUserExists };
