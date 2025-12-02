import dbPool from '../config/database.js';

const getUserByVerificationToken = async (token) => {
  const SQLQuery = `SELECT * FROM users WHERE verification_token = ?`;

  const [result] = await dbPool.execute(SQLQuery, [token]);
  return result;
};

const verifyUser = async (token) => {
  const SQLQuery = `UPDATE users SET is_verified = TRUE, verification_token = NULL WHERE verification_token = ?`;
  const [result] = await dbPool.execute(SQLQuery, [token]);
  return result;
};

const getAllUser = async () => {
  const SQLQuery = 'SELECT * FROM users';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getUserById = async (id) => {
  const SQLQuery = `SELECT * FROM users WHERE id_user = ?`;
  const [result] = await dbPool.execute(SQLQuery, [id]);
  return result;
};

const getUserByEmail = async (email) => {
  const SQLQuery = `SELECT * FROM users WHERE email = ?`;
  const [result] = await dbPool.execute(SQLQuery, [email]);
  return result;
};

const createNewUser = async (body) => {
  const SQLQuery = `INSERT INTO users(fullname, email, username, password, verification_token, is_verified) VALUES(?, ?, ?, ?, ?, ?)`;

  const values = [body.fullname, body.email, body.username, body.password, body.verification_token, body.is_verified];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkUser = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.fullname, item.email, item.username, item.password, item.verification_token, item.is_verified]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO users(fullname, email, username, password, verification_token, is_verified) VALUES ?`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateUserAll = async (body, id) => {
  const SQLQuery = `UPDATE users SET fullname=?, email=?, username=?, password=? WHERE id_user=?`;

  const values = [body.fullname, body.email, body.username, body.password, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateUserPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE users
    SET ${setQuery}
    WHERE id_user = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllUser = async () => {
  const SQLQuery = 'DELETE FROM users';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deleteUserById = async (id) => {
  const SQLQuery = `DELETE FROM users WHERE id_user = ?`;
  const [result] = await dbPool.execute(SQLQuery, [id]);
  return result;
};

export const UsersModel = {
  getUserByVerificationToken,
  verifyUser,
  getAllUser,
  getUserById,
  getUserByEmail,
  createNewUser,
  createNewBulkUser,
  updateUserAll,
  updateUserPartial,
  deleteAllUser,
  deleteUserById,
};
