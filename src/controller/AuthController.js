import { UsersModel } from '../models/UsersModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = async (req, res, next) => {
  const { body } = req;

  if (!body.fullname || !body.email || !body.username || !body.password) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user fields',
      data: null,
    });
  }

  const emailExists = await UsersModel.getUserByEmail(body.email);
  if (emailExists) {
    return res.status(400).json({
      message: 'Bad Request: Email already exists',
      data: null,
    });
  }

  try {
    const passwordHash = await bcryptjs.hash(body.password, 10);
    const tokenRegister = await jwt.sign(
      {
        id: body.id_user,
        fullname: body.fullname,
        email: body.email,
        username: body.username,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '5m',
      }
    );
    body.password = passwordHash;
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: 'Successfully created new user',
      data: {
        token: tokenRegister,
        body,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user fields',
      data: null,
    });
  }

  try {
    await UsersModel.getUserByEmail(body.email).then(async (result) => {
      if (!result) {
        return res.status(400).json({
          message: 'Bad Request: invalid email or password',
          data: null,
        });
      }
      const invalidPassword = await bcryptjs.compare(body.password, result.password);
      if (!invalidPassword) {
        return res.status(400).json({
          message: 'Bad Request: invalid email or password',
          data: null,
        });
      }

      const payload = {
        id: result.id_user,
        fullname: result.fullname,
        email: result.email,
        username: result.username,
      };

      // Sign the JWT token when logging in (use same JWT secret env variable)
      const tokenLogin = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: '5m',
      });

      res.status(200).json({
        message: 'Successfully login',
        data: {
          token: tokenLogin,
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = { register, login };
