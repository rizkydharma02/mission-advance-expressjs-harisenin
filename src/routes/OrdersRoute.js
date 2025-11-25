import express from 'express';
import { OrdersController } from '../controller/OrdersController.js';

const router = express.Router();

// Create - Post Orders Endpoint
router.post('/', OrdersController.createNewOrder);

// Create - Post Bulk Orders Endpoint
router.post('/bulk', OrdersController.createNewBulkOrder);

// Read - Get All Orders Endpoint
router.get('/', OrdersController.getAllOrder);

// Read - Get Orders By Id Endpoint
router.get('/:id', OrdersController.getOrderById);

// Update - Patch Orders Endpoint
router.patch('/:id', OrdersController.updateOrderPartial);

// Update - Put Orders Endpoint
router.put('/:id', OrdersController.updateOrderAll);

// Delete - Delete All Orders Endpoint
router.delete('/', OrdersController.deleteAllOrder);

// Delete - Delete Orders By Id Endpoint
router.delete('/:id', OrdersController.deleteOrderById);

export default router;
