import { UsersModel } from '../models/UsersModel.js';

const getAllUser = async (req, res) => {
  try {
    const result = await UsersModel.getAllUser();

    res.status(200).json({
      message: 'Successfully get all user',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user id',
      data: null,
    });
  }

  try {
    const result = await UsersModel.getUserById(id);
    res.status(200).json({
      message: 'Successfully get user by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.fullname || !body.email || !body.username || !body.password) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user fields',
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: 'Successfully created new user',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkUser = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await UsersModel.createNewBulkUser(body);

    res.status(201).json({
      message: 'Bulk insert movie success',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const updateUserAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user id',
      data: null,
    });
  }

  try {
    await UsersModel.updateUserAll(body, id);
    res.status(200).json({
      message: 'Successfully updated user by id',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const updateUserPartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user id',
      data: null,
    });
  }

  try {
    await UsersModel.updateUserPartial(body, id);
    res.status(200).json({
      message: 'Successfully updated user by id',
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteAllUser = async (req, res) => {
  try {
    await UsersModel.deleteAllUser();
    res.status(200).json({
      message: 'Successfully deleted all user',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required user id',
      data: null,
    });
  }

  try {
    await UsersModel.deleteUserById(id);
    res.status(200).json({
      message: 'Successfully deleted user by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const UsersController = { getAllUser, getUserById, createNewUser, createNewBulkUser, updateUserAll, updateUserPartial, deleteAllUser, deleteUserById };
