import { PacketsModel } from '../models/PacketsModel.js';

const getAllPacket = async (req, res) => {
  try {
    const result = await PacketsModel.getAllPacket();
    res.status(200).json({
      message: 'Successfully get all packet',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getPacketById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packets id',
      data: null,
    });
  }

  try {
    const result = await PacketsModel.getPacketById(id);
    res.status(200).json({
      message: 'Successfully get packet by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewPacket = async (req, res) => {
  const { body } = req;

  if (!body.packet_name || !body.packet_status) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packets fields',
      data: null,
    });
  }

  try {
    await PacketsModel.createNewPacket(body);
    res.status(201).json({
      message: 'Successfully created new packet',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkPacket = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packet array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await PacketsModel.createNewBulkPacket(body);

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

const updatePacketAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packet id',
      data: null,
    });
  }

  try {
    await PacketsModel.updatePacketAll(body, id);
    res.status(200).json({
      message: 'Successfully updated packet by id',
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

const updatePacketPartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packet id',
      data: null,
    });
  }

  try {
    await PacketsModel.updatePacketPartial(body, id);
    res.status(200).json({
      message: 'Successfully updated packet by id',
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

const deleteAllPacket = async (req, res) => {
  try {
    await PacketsModel.deleteAllPacket();
    res.status(200).json({
      message: 'Successfully deleted all packet',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deletePacketById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required packets id',
      data: null,
    });
  }

  try {
    await PacketsModel.deletePacketById(id),
      res.status(200).json({
        message: 'Successfully deleted packet by id',
        data: null,
      });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const PacketsController = { getAllPacket, getPacketById, createNewPacket, createNewBulkPacket, updatePacketAll, updatePacketPartial, deleteAllPacket, deletePacketById };
