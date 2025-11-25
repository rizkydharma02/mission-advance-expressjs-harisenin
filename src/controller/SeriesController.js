import { SeriesModel } from '../models/SeriesModel.js';

const getAllSeries = async (req, res) => {
  try {
    const result = await SeriesModel.getAllSeries();
    res.status(200).json({
      message: 'Successfully get all series',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getSeriesById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series id',
      data: null,
    });
  }

  try {
    const result = await SeriesModel.getSeriesById(id);
    res.status(200).json({
      message: 'Successfully get series by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewSeries = async (req, res) => {
  const { body } = req;

  if (
    !body.series_title ||
    !body.series_subtitle ||
    !body.series_desc ||
    !body.series_year ||
    !body.series_classification ||
    !body.series_producer ||
    !body.series_cast ||
    !body.series_image ||
    !body.series_duration ||
    !body.amount_episode
  ) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series fields',
      data: null,
    });
  }

  try {
    const result = await SeriesModel.createNewSeries(body);
    res.status(201).json({
      message: 'Successfully created new series',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkSeries = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await SeriesModel.createNewBulkSeries(body);

    res.status(201).json({
      message: 'Bulk insert series success',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const updateSeriesAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series id',
      data: null,
    });
  }

  try {
    await SeriesModel.updateSeriesAll(body, id);
    res.status(200).json({
      message: 'Successfully updated series by id',
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

const updateSeriesPartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series id',
      data: null,
    });
  }

  try {
    await SeriesModel.updateSeriesPartial(body, id);
    res.status(200).json({
      message: 'Successfully updated series by id',
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

const deleteAllSeries = async (req, res) => {
  try {
    await SeriesModel.deleteAllSeries();
    res.status(200).json({
      message: 'Successfully deleted all series',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteSeriesById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required series id',
      data: null,
    });
  }

  try {
    await SeriesModel.deleteSeriesById(id);
    res.status(200).json({
      message: 'Successfully deleted series by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const SeriesController = { getAllSeries, getSeriesById, createNewSeries, createNewBulkSeries, updateSeriesAll, updateSeriesPartial, deleteAllSeries, deleteSeriesById };
