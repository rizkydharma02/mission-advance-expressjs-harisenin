import { OrdersModel } from '../models/OrdersModel.js';

const getAllOrder = async (req, res) => {
  try {
    const result = await OrdersModel.getAllOrder();
    res.status(200).json({
      message: 'Successfully get all order',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order id',
      data: null,
    });
  }

  try {
    const result = await OrdersModel.getOrderById(id);
    res.status(200).json({
      message: 'Successfully get order by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewOrder = async (req, res) => {
  const { body } = req;

  if (!body.id_payment || !body.order_price) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order fields',
      data: null,
    });
  }

  try {
    await OrdersModel.createNewOrder(body);
    res.status(201).json({
      message: 'Successfully created new order',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkOrder = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await OrdersModel.createNewBulkOrder(body);

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

const updateOrderAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order id',
      data: null,
    });
  }

  try {
    await OrdersModel.updateOrderAll(body, id);
    res.status(200).json({
      message: 'Successfully updated order by id',
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

const updateOrderPartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order id',
      data: null,
    });
  }

  try {
    await OrdersModel.updateOrderPartial(body, id);
    res.status(200).json({
      message: 'Successfully updated order by id',
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

const deleteAllOrder = async (req, res) => {
  try {
    await OrdersModel.deleteAllOrder();
    res.status(200).json({
      message: 'Successfully deleted all order',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deleteOrderById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required order id',
      data: null,
    });
  }

  try {
    await OrdersModel.deleteOrderById(id);
    res.status(200).json({
      message: 'Successfully deleted order by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const OrdersController = { getAllOrder, getOrderById, createNewOrder, createNewBulkOrder, updateOrderAll, updateOrderPartial, deleteAllOrder, deleteOrderById };
