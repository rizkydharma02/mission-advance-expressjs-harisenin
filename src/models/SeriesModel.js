import dbPool from '../config/database.js';

const getAllSeries = async () => {
  const SQLQuery = 'SELECT * FROM series';

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getSeriesById = async (id) => {
  const SQLQuery = `SELECT * FROM series WHERE id_series=${id}`;

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const createNewSeries = async (body) => {
  const SQLQuery = `INSERT INTO series(id_genre, series_title, series_subtitle, series_desc, series_year, series_classification, series_producer, series_cast, series_image, series_duration, amount_episode, series_rating, series_ongoing) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    body.id_genre,
    body.series_title,
    body.series_subtitle,
    body.series_desc,
    body.series_year,
    body.series_classification,
    body.series_producer,
    body.series_cast,
    body.series_image,
    body.series_duration,
    body.amount_episode,
    body.series_rating,
    body.series_ongoing,
  ];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkSeries = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [
    item.id_genre,
    item.series_title,
    item.series_subtitle,
    item.series_desc,
    item.series_year,
    item.series_classification,
    item.series_producer,
    item.series_cast,
    item.series_image,
    item.series_duration,
    item.amount_episode,
    item.series_rating,
    item.series_ongoing,
  ]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO series (
    id_genre,
    series_title,
    series_subtitle,
    series_desc,
    series_year,
    series_classification,
    series_producer,
    series_cast,
    series_image,
    series_duration,
    amount_episode,
    series_rating,
    series_ongoing
    ) VALUES ?`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateSeriesAll = async (body, id) => {
  const SQLQuery = `
    UPDATE series SET
      id_genre = ?,
      series_title = ?,
      series_subtitle = ?,
      series_desc = ?,
      series_year = ?,
      series_classification = ?,
      series_producer = ?,
      series_cast = ?,
      series_image = ?,
      series_duration = ?,
      amount_episode = ?,
      series_rating = ?,
      series_ongoing = ?
    WHERE id_series = ?
  `;

  const values = [
    body.id_genre,
    body.series_title,
    body.series_subtitle,
    body.series_desc,
    body.series_year,
    body.series_classification,
    body.series_producer,
    body.series_cast,
    body.series_image,
    body.series_duration,
    body.amount_episode,
    body.series_rating,
    body.series_ongoing,
    id,
  ];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateSeriesPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE series
    SET ${setQuery}
    WHERE id_series = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllSeries = async () => {
  const SQLQuery = 'DELETE FROM series';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deleteSeriesById = async (id) => {
  const SQLQuery = `DELETE FROM series WHERE id_series=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const SeriesModel = { getAllSeries, getSeriesById, createNewSeries, createNewBulkSeries, updateSeriesAll, updateSeriesPartial, deleteAllSeries, deleteSeriesById };
