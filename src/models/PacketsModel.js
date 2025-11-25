import dbPool from '../config/database.js';

const getAllPacket = async () => {
  const SQLQuery = 'SELECT * FROM packets';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const getPacketById = async (id) => {
  const SQLQuery = `SELECT * FROM packets WHERE id_packet=${id}`;
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const createNewPacket = async (body) => {
  const SQLQuery = `INSERT INTO packets(packet_name, packet_status) VALUES(?, ?)`;

  const values = [body.packet_name, body.packet_status];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const createNewBulkPacket = async (body) => {
  if (!Array.isArray(body)) {
    throw new Error('Input must be an array');
  }

  const values = body.map((item) => [item.packet_name, item.packet_status]);

  // single placeholder for bulk insert on nested array
  const SQLQuery = `INSERT INTO packets(packet_name, packet_status) VALUES ?)`;

  const [result] = await dbPool.query(SQLQuery, [values]);
  return result;
};

const updatePacketAll = async (body, id) => {
  const SQLQuery = `UPDATE packets SET packet_name=?, packet_status=? WHERE id_packet=?`;

  const values = [body.packet_name, body.packet_status, id];

  const [result] = await dbPool.execute(SQLQuery, values);
  return result;
};

const updatePacketPartial = async (body, id) => {
  // get key and value from body
  const fields = Object.keys(body);
  const values = Object.values(body);

  // map set query from fields
  const setQuery = fields.map((field) => `${field} = ?`).join(', ');

  const SQLQuery = `
    UPDATE packets
    SET ${setQuery}
    WHERE id_packet = ?
  `;

  const params = [...values, id];

  const [result] = await dbPool.execute(SQLQuery, params);
  return result;
};

const deleteAllPacket = async () => {
  const SQLQuery = 'DELETE FROM packets';
  const [result] = await dbPool.execute(SQLQuery);
  return result;
};

const deletePacketById = async (id) => {
  const SQLQuery = `DELETE FROM packets WHERE id_packet=${id}`;
  const [result] = dbPool.execute(SQLQuery);
  return result;
};

export const PacketsModel = { getAllPacket, getPacketById, createNewPacket, createNewBulkPacket, updatePacketAll, updatePacketPartial, deleteAllPacket, deletePacketById };
