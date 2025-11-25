import { MoviesModel } from '../models/MoviesModel.js';

const getAllMovie = async (req, res) => {
  try {
    const result = await MoviesModel.getAllMovie();
    res.status(200).json({
      message: 'Successfully get all movies',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movie id',
      data: null,
    });
  }

  try {
    const result = await MoviesModel.getMovieById(id);
    res.status(200).json({
      message: 'Successfully get movie by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewMovie = async (req, res) => {
  const { body } = req;

  if (!body.movie_title || !body.movie_subtitle || !body.movie_year || !body.movie_classification || !body.movie_producer || !body.movie_cast || !body.movie_image || !body.movie_duration) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movie fields',
      data: null,
    });
  }

  try {
    await MoviesModel.createNewMovie(body);
    res.status(201).json({
      message: 'Successfully created new movie',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkMovies = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movies array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await MoviesModel.createNewBulkMovies(body);

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

const updateMovieAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id || !body) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movie id',
      data: null,
    });
  }

  try {
    await MoviesModel.updateMovieAll(body, id);
    res.status(200).json({
      message: 'Successfully updated movie by id',
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

const updateMoviePartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id || !body) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movie id',
      data: null,
    });
  }

  try {
    await MoviesModel.updateMoviePartial(body, id);
    res.status(200).json({
      message: 'Successfully updated movie by id',
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

const deleteAllMovie = async (req, res) => {
  try {
    await MoviesModel.deleteAllMovie();
    res.status(200).json({
      message: 'Successfully deleted all movies',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteMovieById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required movies id',
      data: null,
    });
  }

  try {
    await MoviesModel.deleteMovieById(id);
    res.status(200).json({
      message: 'Successfully deleted movie by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const MoviesController = { getAllMovie, getMovieById, createNewMovie, createNewBulkMovies, updateMovieAll, updateMoviePartial, deleteAllMovie, deleteMovieById };
