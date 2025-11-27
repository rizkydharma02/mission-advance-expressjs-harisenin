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

  try {
    // Check if email already exists
    const emailExists = await UsersModel.getUserByEmail(body.email);
    if (emailExists && emailExists.length > 0) {
      return res.status(400).json({
        message: 'Bad Request: Email already exists',
        data: null,
      });
    }

    // Hash password
    const passwordHash = await bcryptjs.hash(body.password, 10);

    // Create user with hashed password
    const userData = {
      fullname: body.fullname,
      email: body.email,
      username: body.username,
      password: passwordHash,
    };

    const user = await UsersModel.createNewUser(userData);

    const payload = {
      id: user.insertId,
      fullname: body.fullname,
      email: body.email,
      username: body.username,
    };

    // Generate token after user is created
    const tokenRegister = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: '5m',
    });

    res.status(201).json({
      message: 'Successfully register',
      data: {
        token: tokenRegister,
        user: {
          id: user.insertId,
          fullname: body.fullname,
          email: body.email,
          username: body.username,
        },
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
    // Get user by email
    const users = await UsersModel.getUserByEmail(body.email);

    // Check if user exists
    if (!users || users.length === 0) {
      return res.status(400).json({
        message: 'Bad Request: invalid email or password',
        data: null,
      });
    }

    // Get first user from array
    const user = users[0];

    // Compare password
    const isPasswordValid = await bcryptjs.compare(body.password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Bad Request: invalid email or password',
        data: null,
      });
    }

    // Create payload from existing user data
    const payload = {
      id: user.id_user,
      fullname: user.fullname,
      email: user.email,
      username: user.username,
    };

    // Sign the JWT token when logging in
    const tokenLogin = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: '1d',
    });

    res.status(200).json({
      message: 'Successfully login',
      data: {
        token: tokenLogin,
        user: {
          id: user.id_user,
          fullname: user.fullname,
          email: user.email,
          username: user.username,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = { register, login };
