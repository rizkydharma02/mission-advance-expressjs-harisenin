import express from 'express';
import { MylistController } from '../controller/MylistController.js';
import AuthMiddleware from '../middleware/Auth.js';

const router = express.Router();

// Create - Post Mylist Endpoint
router.post('/', AuthMiddleware, MylistController.createNewMylist);

// Create - Post Bulk Mylist Endpoint
router.post('/bulk', AuthMiddleware, MylistController.createNewBulkMylist);

// Read - Get All Mylist Endpoint
router.get('/', AuthMiddleware, MylistController.getAllMylist);

// Read - Get Mylist By Id Endpoint
router.get('/:id', AuthMiddleware, MylistController.getMylistById);

// Update - Patch Mylist Endpoint
router.patch('/:id', AuthMiddleware, MylistController.updateMylistPartial);

// Update - Put Mylist Endpoint
router.put('/:id', AuthMiddleware, MylistController.updateMylistAll);

// Delete - Delete All Mylist Endpoint
router.delete('/', AuthMiddleware, MylistController.deleteAllMylist);

// Delete - Delete Mylist By Id Endpoint
router.delete('/:id', AuthMiddleware, MylistController.deleteMylistById);

export default router;
