import { PaymentsModel } from '../models/PaymentsModel.js';

const getAllPayment = async (req, res) => {
  try {
    const result = await PaymentsModel.getAllPayment();
    res.status(200).json({
      message: 'Successfully get all payment',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const getPaymentById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment id',
      data: null,
    });
  }

  try {
    const result = await PaymentsModel.getPaymentById(id);
    res.status(200).json({
      message: 'Successfully get payment by id',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewPayment = async (req, res) => {
  const { body } = req;

  if (!body.id_packet || !body.payment_price || !body.code_voucher || !body.payment_method || !body.payment_status) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment fields',
      data: null,
    });
  }

  try {
    await PaymentsModel.createNewPayment(body);
    res.status(201).json({
      message: 'Successfully created new payment',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const createNewBulkPayment = async (req, res) => {
  const { body } = req;

  if (!Array.isArray(body)) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment array or using array instead of object',
      data: null,
    });
  }

  try {
    const result = await PaymentsModel.createNewBulkPayment(body);

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

const updatePaymentAll = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment id',
      data: null,
    });
  }

  try {
    await PaymentsModel.updatePaymentAll(body, id);
    res.status(200).json({
      message: 'Successfully updated payment by id',
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

const updatePaymentPartial = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment id',
      data: null,
    });
  }

  try {
    await PaymentsModel.updatePaymentPartial(body, id);
    res.status(200).json({
      message: 'Successfully updated payment by id',
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

const deleteAllPayment = async () => {
  try {
    await PaymentsModel.deleteAllPayment();
    res.status(200).json({
      message: 'Successfully deleted all payment',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

const deletePaymentById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Bad Request: Missing required payment id',
      data: null,
    });
  }

  try {
    await PaymentsModel.deletePaymentById(id);
    res.status(200).json({
      message: 'Successfully deleted payment by id',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const PaymentsController = { getAllPayment, getPaymentById, createNewPayment, createNewBulkPayment, updatePaymentAll, updatePaymentPartial, deleteAllPayment, deletePaymentById };
