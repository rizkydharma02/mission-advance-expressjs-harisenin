import dbPool from '../config/database.js';

const getAllOrder = async () => {
  const SQLQuery = 'SELECT * FROM orders';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getOrderById = async (id) => {
  const SQLQuery = `SELECT * FROM orders WHERE id_order=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const createNewOrder = async (body) => {
  const SQLQuery = `INSERT INTO orders(id_payment, order_price) VALUES(?, ?)`;

  const values = [body.id_payment, body.order_price];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkOrder = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.id_payment, item.order_price]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO orders(id_payment, order_price) VALUES ?`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updateOrderAll = async (body, id) => {
  const SQLQuery = `UPDATE orders SET id_payment=?, order_price=? WHERE id_order=?`;

  const values = [body.id_payment, body.order_price, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updateOrderPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE orders
    SET ${setQuery}
    WHERE id_order = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllOrder = async () => {
  const SQLQuery = 'DELETE FROM orders';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deleteOrderById = async (id) => {
  const SQLQuery = `DELETE FROM orders WHERE id_order=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const OrdersModel = { getAllOrder, getOrderById, createNewOrder, createNewBulkOrder, updateOrderAll, updateOrderPartial, deleteAllOrder, deleteOrderById };
