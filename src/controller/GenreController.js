import { GenreModel } from '../models/GenreModel.js';

const getAllGenre = async (req, res) => {
  try {
    const result = await GenreModel.getAllGenre();
    res.status(200).json({
      message: 'Successfully get all genre',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getGenreById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre id',
      data: null,
    });
  }

  try {
    const result = await GenreModel.getGenreById(id);
    res.status(200).json({
      message: 'Successfully get genre by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewGenre = async (req, res) => {
  const { body } = req;

  if (!body.genre_title) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre fields',
      data: null,
    });
  }

  try {
    await GenreModel.createNewGenre(body);
    res.status(201).json({
      message: 'Successfully created new genre',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkGenre = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await GenreModel.createNewBulkGenre(body);

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

const updateGenreAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre id',
      data: null,
    });
  }

  try {
    await GenreModel.updateGenreAll(body, id);
    res.status(200).json({
      message: 'Successfully updated genre by id',
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

const updateGenrePartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre id',
      data: null,
    });
  }

  try {
    await GenreModel.updateGenrePartial(body, id);
    res.status(200).json({
      message: 'Successfully updated genre by id',
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

const deleteAllGenre = async (req, res) => {
  try {
    await GenreModel.deleteAllGenre();
    res.status(200).json({
      message: 'Successfully deleted all genre',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteGenreById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required genre id',
      data: null,
    });
  }

  try {
    await GenreModel.deleteGenreById(id);
    res.status(200).json({
      message: 'Successfully deleted genre by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const GenreController = {
  getAllGenre,
  getGenreById,
  createNewGenre,
  createNewBulkGenre,
  updateGenreAll,
  updateGenrePartial,
  deleteAllGenre,
  deleteGenreById,
};
