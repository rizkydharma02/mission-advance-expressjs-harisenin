import express from 'express';
import { PaymentsController } from '../controller/PaymentsController.js';

const router = express.Router();

// Create - Post Payments Endpoint
router.post('/', PaymentsController.createNewPayment);

// Create - Post Bulk Payments Endpoint
router.post('/bulk', PaymentsController.createNewBulkPayment);

// Read - Get All Payments Endpoint
router.get('/', PaymentsController.getAllPayment);

// Read - Get Payments By Id Endpoint
router.get('/:id', PaymentsController.getPaymentById);

// Update - Patch Payments Endpoint
router.patch('/:id', PaymentsController.updatePaymentPartial);

// Update - Put Payments Endpoint
router.put('/:id', PaymentsController.updatePaymentAll);

// Delete - Delete All Payments Endpoint
router.delete('/', PaymentsController.deleteAllPayment);

// Delete - Delete Payments By Id Endpoint
router.delete('/:id', PaymentsController.deletePaymentById);

export default router;
