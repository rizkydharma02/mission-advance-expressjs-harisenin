import dbPool from '../config/database.js';

const getAllMylist = async () => {
  const SQLQuery = 'SELECT * FROM my_list';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getMylistById = async (id) => {
  const SQLQuery = `SELECT * FROM my_list WHERE id_mylist=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const createNewMylist = async (body) => {
  const SQLQuery = `INSERT INTO my_list(id_user, id_movie, id_series, list_image) VALUES(?, ?, ?, ?)`;

  const values = [body.id_user, body.id_movie, body.id_series, body.list_image];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkMylist = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.id_user, item.id_movie, item.id_series, item.list_image]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO my_list(id_user, id_movie, id_series, list_image) VALUES ?`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateMylistAll = async (body, id) => {
  const SQLQuery = `UPDATE my_list SET id_user=?, id_movie=?, id_series=?, list_image=? WHERE id_mylist=?`;

  const values = [body.id_user, body.id_movie, body.id_series, body.list_image, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateMylistPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE my_list
    SET ${setQuery}
    WHERE id_mylist = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllSeries = async () => {
  const SQLQuery = 'DELETE FROM my_list';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deleteSeriesById = async (id) => {
  const SQLQuery = `DELETE FROM my_list WHERE id_mylist=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const MylistModel = { getAllMylist, getMylistById, createNewMylist, createNewBulkMylist, updateMylistAll, updateMylistPartial, deleteAllSeries, deleteSeriesById };
