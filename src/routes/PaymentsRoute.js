import express from 'express';
import { PaymentsController } from '../controller/PaymentsController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Payments Endpoint
router.post('/', AuthMiddleware, PaymentsController.createNewPayment);

// Create - Post Bulk Payments Endpoint
router.post('/bulk', AuthMiddleware, PaymentsController.createNewBulkPayment);

// Read - Get All Payments Endpoint
router.get('/', AuthMiddleware, PaymentsController.getAllPayment);

// Read - Get Payments By Id Endpoint
router.get('/:id', AuthMiddleware, PaymentsController.getPaymentById);

// Update - Patch Payments Endpoint
router.patch('/:id', AuthMiddleware, PaymentsController.updatePaymentPartial);

// Update - Put Payments Endpoint
router.put('/:id', AuthMiddleware, PaymentsController.updatePaymentAll);

// Delete - Delete All Payments Endpoint
router.delete('/', AuthMiddleware, PaymentsController.deleteAllPayment);

// Delete - Delete Payments By Id Endpoint
router.delete('/:id', AuthMiddleware, PaymentsController.deletePaymentById);

export default router;
