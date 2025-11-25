import dbPool from '../config/database.js';

const getAllGenre = async () => {
  const SQLQuery = 'SELECT * FROM genre';

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getGenreById = async (id) => {
  const SQLQuery = `SELECT * FROM genre WHERE id_genre=${id}`;

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const createNewGenre = async (body) => {
  const SQLQuery = `INSERT INTO genre(genre_title) VALUES(?)`;

  const values = [body.genre_title];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkGenre = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.genre_title]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO movies (
      genre_title,
    ) VALUES (?)`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateGenreAll = async (body, id) => {
  const SQLQuery = `
    UPDATE genre SET
      genre_title = ?
    WHERE id_genre = ?
  `;

  const values = [body.genre_title, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateGenrePartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE genre
    SET ${setQuery}
    WHERE id_genre = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllGenre = async () => {
  const SQLQuery = 'DELETE FROM genre';

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deleteGenreById = async (id) => {
  const SQLQuery = `DELETE FROM genre WHERE id_genre=${id}`;

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const GenreModel = { getAllGenre, getGenreById, createNewGenre, createNewBulkGenre, updateGenreAll, updateGenrePartial, deleteAllGenre, deleteGenreById };
