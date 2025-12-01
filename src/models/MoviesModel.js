import dbPool from '../config/database.js';

const getAllMovie = async (queryParams = {}) => {
  let SQLQuery = 'SELECT * FROM movies';
  const conditions = [];
  const values = [];

  const filterFields = ['id_movie', 'id_genre', 'movie_title', 'movie_subtitle', 'movie_year', 'movie_classification', 'movie_producer', 'movie_cast', 'movie_duration', 'movie_rating', 'movie_ongoing'];

  const numericFields = ['id_movie', 'id_genre'];

  filterFields.forEach((field) => {
    if (queryParams[field] !== undefined && queryParams[field] !== null && queryParams[field] !== '') {
      conditions.push(`${field} = ?`);

      // Konversi ke number jika field adalah numeric
      if (numericFields.includes(field)) {
        values.push(Number(queryParams[field]));
      } else {
        values.push(queryParams[field]);
      }
    }
  });

  if (queryParams.search) {
    const searchFields = queryParams.searchBy ? queryParams.searchBy : ['movie_title', 'movie_subtitle', 'movie_producer', 'movie_cast'];

    const searchConditions = searchFields
      .map((searchField) => {
        return `${searchField} LIKE ?`;
      })
      .join(' OR ');

    conditions.push(`(${searchConditions})`);

    searchFields.forEach(() => {
      values.push(`%${queryParams.search}%`);
    });
  }
  if (conditions.length > 0) {
    SQLQuery += ' WHERE ' + conditions.join(' AND ');
  }

  if (queryParams.sortBy) {
    const sortOrder = queryParams.sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const allowedSortFields = ['id_movie', 'id_genre', 'movie_title', 'movie_year', 'movie_classification', 'movie_producer', 'movie_cast', 'movie_duration', 'movie_rating', 'movie_ongoing', 'added_at'];

    if (allowedSortFields.includes(queryParams.sortBy)) {
      SQLQuery += ` ORDER BY ${queryParams.sortBy} ${sortOrder}`;
    }
  }

  if (queryParams.limit) {
    const limit = parseInt(queryParams.limit);
    const page = parseInt(queryParams.page) || 1;
    const offset = (page - 1) * limit;

    SQLQuery += ` LIMIT ${limit} OFFSET ${offset}`;
  }
  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const getMovieById = async (id) => {
  const SQLQuery = `SELECT * FROM movies WHERE id_movie= ?`;
  const [result] = await dbPool.execute(SQLQuery, [id]);
  return result;
};

const createNewMovie = async (body) => {
  const SQLQuery = `INSERT INTO movies (
      id_genre,
      movie_title,
      movie_subtitle,
      movie_year,
      movie_classification,
      movie_producer,
      movie_cast,
      movie_image,
      movie_duration,
      movie_rating,
      movie_ongoing
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [body.id_genre, body.movie_title, body.movie_subtitle, body.movie_year, body.movie_classification, body.movie_producer, body.movie_cast, body.movie_image, body.movie_duration, body.movie_rating, body.movie_ongoing];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkMovies = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [
    item.id_genre,
    item.movie_title,
    item.movie_subtitle,
    item.movie_year,
    item.movie_classification,
    item.movie_producer,
    item.movie_cast,
    item.movie_image,
    item.movie_duration,
    item.movie_rating,
    item.movie_ongoing,
  ]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO movies (
      id_genre,
      movie_title,
      movie_subtitle,
      movie_year,
      movie_classification,
      movie_producer,
      movie_cast,
      movie_image,
      movie_duration,
      movie_rating,
      movie_ongoing
    ) VALUES ?`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateMovieAll = async (body, id) => {
  const SQLQuery = `
    UPDATE movies SET
      id_genre = ?,
      movie_title = ?,
      movie_subtitle = ?,
      movie_year = ?,
      movie_classification = ?,
      movie_producer = ?,
      movie_cast = ?,
      movie_image = ?,
      movie_duration = ?,
      movie_rating = ?,
      movie_ongoing = ?
    WHERE id_movie = ?
  `;

  const values = [body.id_genre, body.movie_title, body.movie_subtitle, body.movie_year, body.movie_classification, body.movie_producer, body.movie_cast, body.movie_image, body.movie_duration, body.movie_rating, body.movie_ongoing, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateMoviePartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE movies
    SET ${setQuery}
    WHERE id_movie = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllMovie = async () => {
  const SQLQuery = 'DELETE FROM movies';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};
const deleteMovieById = async (id) => {
  const SQLQuery = `DELETE FROM movies WHERE id_movie=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const MoviesModel = { getAllMovie, getMovieById, createNewMovie, createNewBulkMovies, updateMovieAll, updateMoviePartial, deleteAllMovie, deleteMovieById };
