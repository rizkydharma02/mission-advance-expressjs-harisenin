import express from 'express';
import { OrdersController } from '../controller/OrdersController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Orders Endpoint
router.post('/', AuthMiddleware, OrdersController.createNewOrder);

// Create - Post Bulk Orders Endpoint
router.post('/bulk', AuthMiddleware, OrdersController.createNewBulkOrder);

// Read - Get All Orders Endpoint
router.get('/', AuthMiddleware, OrdersController.getAllOrder);

// Read - Get Orders By Id Endpoint
router.get('/:id', AuthMiddleware, OrdersController.getOrderById);

// Update - Patch Orders Endpoint
router.patch('/:id', AuthMiddleware, OrdersController.updateOrderPartial);

// Update - Put Orders Endpoint
router.put('/:id', AuthMiddleware, OrdersController.updateOrderAll);

// Delete - Delete All Orders Endpoint
router.delete('/', AuthMiddleware, OrdersController.deleteAllOrder);

// Delete - Delete Orders By Id Endpoint
router.delete('/:id', AuthMiddleware, OrdersController.deleteOrderById);

export default router;
