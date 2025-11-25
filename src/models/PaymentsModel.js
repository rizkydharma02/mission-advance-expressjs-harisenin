import dbPool from '../config/database.js';

const getAllPayment = async () => {
  const SQLQuery = 'SELECT * FROM payments';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getPaymentById = async (id) => {
  const SQLQuery = `SELECT * FROM payments WHERE id_payment=${id}`;
  const [result] = dbPool.execute(SQLQuery);
  return result;
};

const createNewPayment = async (body) => {
  const SQLQuery = `INSERT INTO payments(id_packet, payment_price, code_voucher, payment_method, payment_status) VALUES( ?, ?, ?, ?, ?)`;

  const values = [body.id_packet, body.payment_price, body.code_voucher, body.payment_method, body.payment_status];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkPayment = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.id_packet, item.payment_price, item.code_voucher, item.payment_method, item.payment_status]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO payments(id_packet, payment_price, code_voucher, payment_method, payment_status) VALUES ?)`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updatePaymentAll = async (body, id) => {
  const SQLQuery = `UPDATE payments SET id_packet=?, payment_price=?, code_voucher=?, payment_method=?, payment_status=? WHERE id_payment=?`;

  const values = [body.id_packet, body.payment_price, body.code_voucher, body.payment_method, body.payment_status, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updatePaymentPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE payments
    SET ${setQuery}
    WHERE id_payment = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllPayment = async () => {
  const SQLQuery = 'DELETE FROM payments';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deletePaymentById = async (id) => {
  const SQLQuery = `DELETE FROM payments WHERE id_payment=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

export const PaymentsModel = { getAllPayment, getPaymentById, createNewPayment, createNewBulkPayment, updatePaymentAll, updatePaymentPartial, deleteAllPayment, deletePaymentById };
